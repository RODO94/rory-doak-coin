import { useEffect, useState } from "react";
import "./ImageWindow.scss";
import { useParams } from "react-router-dom";
import { ArrowBack, ArrowForward, Circle } from "@mui/icons-material";
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { getImage } from "../../utils/AxiosRequests";

export default function ImageWindow({ imageArray }) {
  const [activeImageURL, setActiveImageURL] = useState(null);
  const [sortedImageArray, setSortedImageArray] = useState(imageArray);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { threadId } = useParams();
  const theme = createTheme({
    palette: {
      primary: { main: "#026052" },
      secondary: { main: "#02605240" },
    },
  });

  console.log(sortedImageArray);

  const sortArray = (array) => {
    if (array.length === 0) {
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
    const createImageURL = async () => {
      if (imageArray.length === 0) {
        setActiveImageURL(null);
        return;
      } else {
        const data = await getImage(
          threadId,
          imageArray[activeImageIndex].file_id
        );
        const newUrl = URL.createObjectURL(data);
        setActiveImageURL(newUrl);
        return data;
      }
    };
    createImageURL();
  }, [imageArray, activeImageIndex, threadId]);

  if (!activeImageURL) {
    return <p className="image__loading">No Images Generated Yet</p>;
  }
  return (
    <section className="image-window">
      <ThemeProvider theme={theme}>
        <div className="image-window__wrap">
          <img
            className="image-window__img"
            src={activeImageURL}
            alt="generated graph from assistant"
          />
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
              key={index}
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
