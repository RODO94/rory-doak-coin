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
      secondary: { main: "#02605240" },
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
      return setActiveImageIndex(imageArray.length - 1);
    }
    setActiveImageIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (activeImageIndex + 1 >= imageArray.length) {
      return setActiveImageIndex(0);
    }
    setActiveImageIndex((i) => i + 1);
  };

  useEffect(() => {
    setSortedImageArray(sortArray(imageArray));
    createImageURL();
  }, [imageArray, activeImageIndex]);

  if (!activeImageURL) {
    return <p className="image__loading">No Images Generated Yet</p>;
  }
  return (
    <section className="image-window">
      <ThemeProvider theme={theme}>
        <div className="image-window__wrap">
          <img className="image-window__img" src={activeImageURL} />
        </div>
        <div className="image-window__circles">
          <Button
            className="image-window__button"
            size="small"
            onClick={handlePrev}
          >
            <ArrowBack
              fontSize="small"
              className={
                activeImageIndex === 0
                  ? "image-window__back--hide"
                  : "image-window__back"
              }
            />
          </Button>
          {imageArray.map((image, index) => (
            <Circle
              color={index === activeImageIndex ? "primary" : "secondary"}
              fontSize="small"
              className="image-window__circle"
            />
          ))}
          <Button
            className="image-window__button"
            size="small"
            onClick={handleNext}
          >
            <ArrowForward
              fontSize="small"
              className={
                activeImageIndex === imageArray.length - 1
                  ? "image-window__forward--hide"
                  : "image-window__forward"
              }
            />
          </Button>
        </div>
      </ThemeProvider>
    </section>
  );
}
