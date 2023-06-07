import React, { useState } from "react";
import "./ImagesGrid.css";
import image1 from "../img/ImagesGrid.png";
import image2 from "../img/AnotherImage.png"

const ImagesGrid = () => {
  const [currentImages, setCurrentImages] = useState(Array(9).fill(image1));
  const [isCongratulationsOpen, setIsCongratulationsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (imageIndex) => {
    setCurrentImages((prevState) => {
      const updatedImages = [...prevState];
      updatedImages[imageIndex] = updatedImages[imageIndex] === image1 ? image2 : image1;
      return updatedImages;
    });

    setClickCount((prevCount) => prevCount + 1);
  };

  const handleCloseCongratulations = () => {
    setIsCongratulationsOpen(false);
  };

  React.useEffect(() => {
    if (clickCount > 0 && clickCount % 2 === 0) {
      setIsCongratulationsOpen(true);
    }
  }, [clickCount]);

  const images = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="container">
      {images.map((imageIndex) => (
        <img
          key={imageIndex}
          className="image"
          src={currentImages[imageIndex - 1]}
          alt={`Image ${imageIndex}`}
          onClick={() => handleClick(imageIndex - 1)}
        />
      ))}
      {isCongratulationsOpen && clickCount > 0 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Вітаємо! <br /> Ви отримуєте можливість замовити Липокарнит+ <br /> БЕЗКОШТОВНО!</h2>
            <button className="modal-close" onClick={handleCloseCongratulations}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesGrid;



