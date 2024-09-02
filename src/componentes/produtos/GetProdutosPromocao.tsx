"use client";
import React, { useState, useEffect, useRef } from "react";
import { Produto } from "@/interfaces/Produtos-types";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../helpers/Loading";
import { getProductsPromocaoAction } from "@/action/produtos/get-produtos-promocao-action";

const GetProdutosPromocao = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await getProductsPromocaoAction();
        if (data && data.length > 0) {
          setProdutos(data);
        } else {
          setProdutos([]);
        }
      } catch (err) {
        setError(
          "Não foi possível carregar os produtos. Por favor, tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the breakpoint for "sm"
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [produtos]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(produtos.length / (isMobile ? 4 : 8))
      );
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrevious = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(produtos.length / (isMobile ? 4 : 8)) - 1
        : prevIndex - 1
    );
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(produtos.length / (isMobile ? 4 : 8))
    );
    startAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartXRef.current) return;
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartXRef.current - touchEndX;

    if (touchDiff > 50) {
      handleNext();
      touchStartXRef.current = null;
    } else if (touchDiff < -50) {
      handlePrevious();
      touchStartXRef.current = null;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  const renderProdutos = (produtos: Produto[]) => {
    return produtos.map((produto) => (
      <Link key={produto.id} href={`/produtos/${produto.id}`}>
        <div className="relative w-full h-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 flex flex-col items-center text-center p-1 group cursor-pointer">
          {produto.fotos && produto.fotos.length > 0 && (
            <div className="relative w-full h-52 sm:h-58 overflow-hidden">
              <Image
                src={produto.fotos[0].src}
                alt={`Imagem de ${produto.nome}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full transition-opacity duration-500 rounded-md group-hover:opacity-30"
              />
              <div className="absolute top-6 -left-6 bg-red-600 text-white text-xs py-1 px-8 rounded-sm font-bold -rotate-45">
                Promoção
              </div>
              {produto.profundidade_fechado && (
                <div className="absolute top-2 right-2 bg-green-700 text-white sm:text-xs text-[8px] sm:w-12 w-10 sm:h-12 h-10 sm:py-4 py-3 px-1 rounded-full font-bold text-center">
                  {produto.largura} m
                </div>
              )}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="bg-red-700 text-white text-lg py-2 px-4 rounded-lg hover:bg-red-800">
                  Ver detalhes
                </span>
              </div>
            </div>
          )}
          <div className="text-left w-40 sm:w-60 sm:p-4">
            <h2 className="sm:text-lg text-sm truncate">{produto.nome}</h2>
            <p className="line-through text-red-600 sm:text-sm text-xs">
              De: {produto.preco_original}
            </p>
            <p className="sm:text-xl text-sm flex items-end">
              Por: {produto.preco}{" "}
              <span className="text-sm flex ml-1">
                {" "}
                no pix{" "}
                <Image
                  src="assets/pix.svg"
                  alt="icone do pix"
                  width={20}
                  height={20}
                />
              </span>
            </p>
            <p className="text-xs text-gray-600">
              Ou em até 12x de: {produto.preco_parcelado}
            </p>
          </div>
        </div>
      </Link>
    ));
  };

  const groupedProdutos = [];
  const itemsPerGroup = isMobile ? 4 : 8;
  for (let i = 0; i < produtos.length; i += itemsPerGroup) {
    groupedProdutos.push(produtos.slice(i, i + itemsPerGroup));
  }

  return (
    <section
      className="relative w-full h-[600px] sm:h-[750px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {groupedProdutos.map((group, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex justify-center items-center"
          >
            <div className="w-full sm:max-w-[1200px] grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-2 sm:gap-4 ">
              {renderProdutos(group)}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 rotate-180"
        onClick={handlePrevious}
        aria-label="Previous Slide"
      >
        ▶
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        ▶
      </button>
    </section>
  );
};

export default GetProdutosPromocao;
