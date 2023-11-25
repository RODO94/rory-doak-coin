import { useEffect, useState } from "react";
import "./ImageWindow.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ArrowBack, ArrowForward, Circle } from "@mui/icons-material";
import { Button, Skeleton, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function ImageWindow({ imageArray }) {
  const [activeImageURL, setActiveImageURL] = useState(null);
  const [sortedImageArray, setSortedImageArray] = useState(imageArray);
  const [isThereImage, setIsThereImage] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { threadId } = useParams();
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
    },
  });

  const createImageURL = async () => {
    if (imageArray.length === 0) {
      console.log("condition triggered");
      setIsThereImage(false);
      setActiveImageURL(null);
      return;
    } else {
      setIsThereImage(true);
      const { data } = await axios.get(
        `http://localhost:8080/threads/${threadId}/file/${imageArray[activeImageIndex].file_id}`,
        { responseType: "blob" }
      );
      const newUrl = URL.createObjectURL(data);
      setActiveImageURL(newUrl);
      return data;
    }
  };

  const sortArray = (array) => {
    if (array.length === 0) {
      setIsThereImage(false);
      setActiveImageURL(null);
      return;
    }
    const newArray = array.sort((a, b) => b.created_at - a.created_at);
    return newArray;
  };

  const handlePrev = () => {
    if (activeImageIndex - 1 < 0) {
      setActiveImageIndex(imageArray.length - 1);
    }
    setActiveImageIndex(activeImageIndex - 1);
  };

  const handleNext = () => {};

  useEffect(() => {
    setSortedImageArray(sortArray(imageArray));
    createImageURL();
  }, [imageArray]);

  if (!activeImageURL) {
    return <p className="image__loading">No Images Generated Yet</p>;
  }
  return (
    <section className="image-window">
      <ThemeProvider theme={theme}>
        <Button onClick={handlePrev}>
          <ArrowBack className="image-window__back" />
        </Button>
        <img className="image-window__img" src={activeImageURL} />
        <Button onClick={handleNext}>
          <ArrowForward className="image-window__next" />
        </Button>
        {/* <div>
          {imageArray.map((image) => (
            <Circle color="primary" />
          ))}
        </div> */}
      </ThemeProvider>
    </section>
  );
}
