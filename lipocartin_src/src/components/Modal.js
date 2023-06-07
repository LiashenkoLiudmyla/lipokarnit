import React, { useState } from "react";
import "./Modal.css";
import ImagesGrid from "./ImagesGrid";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const spanRedElement = document.querySelector(".span-red");
    if (
      spanRedElement &&
      window.innerHeight + window.scrollY >= spanRedElement.offsetTop
    ) {
      openModal();
      window.removeEventListener("scroll", handleScroll);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="span-red">Текст з className="span-red"</div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              x
            </button>
            <h2>
              Відкрийте коробку і отримаєте можливість <br /> замовити Липокарнит+  за
              півціни або безкоштовно!
            </h2>
            <ImagesGrid />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
