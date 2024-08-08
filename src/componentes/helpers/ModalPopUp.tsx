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
      }, 7000);
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
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-black text-2xl"
          onClick={handleCloseModal}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          Frete Grátis para todo o site
        </h2>
        <p className="text-gray-700">
          Aproveite as nossas ofertas com frete grátis para qualquer lugar!
        </p>
      </div>
    </div>
  );
};

export default ModalFreteGratis;
