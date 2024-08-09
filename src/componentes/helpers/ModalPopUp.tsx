"use client";
import React, { useState, useEffect } from "react";

const ModalFreteGratis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const firstLoad = localStorage.getItem("firstLoad");
    if (!firstLoad) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 2000);
      localStorage.setItem("firstLoad", "true");
    } else {
      setIsFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      handleCloseModal();
    }
  };

  if (!isFirstLoad || !isModalOpen) {
    return null;
  }

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-red-700 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={handleCloseModal}
        >
          &times;
        </button>
        <h2 className="text-2xl text-white text-center font-bold mb-4">
          Atenção! <br /> Aproveitem nossas promoções!!
        </h2>
        <div
          className="text-white text-xl up text-center 
"
        >
          <p>Frete Grátis para todo o site!</p>
          <p>Pague somente na entrega!</p>
          <p>Promoção por tempo limitado!</p>
        </div>
      </div>
    </div>
  );
};

export default ModalFreteGratis;
