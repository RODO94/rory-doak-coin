import { useEffect, useState } from "react";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./ConnectionList.scss";
import { CircularProgress } from "@mui/material";
import { fetchUserConnections } from "../../utils/AxiosRequests";
import { useParams } from "react-router-dom";
import coder1 from "../../assets/coder1.jpg";
import coder2 from "../../assets/coder2.jpg";
import coder3 from "../../assets/coder3.jpg";

export default function ConnectionList() {
  const [connectionArray, setConnectionArray] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    const getConnections = async () => {
      const data = await fetchUserConnections(userId);
      setConnectionArray(data);
    };
    getConnections();
  }, []);
  if (!connectionArray) {
    return <CircularProgress />;
  }
  return (
    <div className="connection-list">
      <ConnectionCard connectionName={"Michael"} image={coder1} />
    </div>
  );
}
