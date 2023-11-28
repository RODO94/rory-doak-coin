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
      console.log(data);
      setConnectionArray(data);
    };
    getConnections();
  }, [userId]);
  if (!connectionArray) {
    return <CircularProgress />;
  }
  return (
    <div className="connection-list">
      {connectionArray.map((connection, i) => {
        if (connection.user_id === connection.connect_id) {
          return;
        }
        return (
          <ConnectionCard
            key={connection.id}
            connectionName={`${connection.connect_first_name} ${connection.connect_last_name}`}
            image={
              i + 1 === 1
                ? coder1
                : i + 1 === 2
                ? coder2
                : i + 1 === 3
                ? coder3
                : coder1
            }
            connectionElement={connection}
          />
        );
      })}
    </div>
  );
}
