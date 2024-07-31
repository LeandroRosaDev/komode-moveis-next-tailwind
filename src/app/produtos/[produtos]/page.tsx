"use client";

import { PageParams } from "@/interfaces/Produtos-types";
import Image from "next/image";
import { token } from "@/app/api/api";
import { useState, useEffect } from "react";
import { ButtonBack } from "@/componentes/helpers/BtnBack";
import MenuCategoriasProdutos from "@/componentes/menus/MenuCategoriasProdutos";
import LoadingSpinner from "@/componentes/helpers/Loading";

export default function ProdutoPage({ params }: PageParams) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://apikomode.altuori.com/wp-json/api/produto/${params.produtos}`,
          {
            cache: "no-store",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Falha ao buscar dados do produto");
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.produtos]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <main className="w-full">
        <MenuCategoriasProdutos />
        <div className="text-center text-red-600">{error}</div>
      </main>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.fotos.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.fotos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="font-sans w-full">
      <MenuCategoriasProdutos />
      <ButtonBack>Voltar</ButtonBack>
      <div className="mx-auto max-w-5xl p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative flex items-center justify-center w-full">
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl z-10 bg-white bg-opacity-70 p-2 rounded-full focus:outline-none hover:bg-opacity-90"
                onClick={handlePrevClick}
              >
                &lt;
              </button>
              <Image
                src={data.fotos[currentIndex].src}
                alt={data.fotos[currentIndex].titulo}
                width={600}
                height={500}
                className="border border-gray-300 rounded-md max-w-full h-auto"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl z-10 bg-white bg-opacity-70 p-2 rounded-full focus:outline-none hover:bg-opacity-90"
                onClick={handleNextClick}
              >
                &gt;
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {data.fotos.map((foto: any, index: number) => (
                <Image
                  key={index}
                  src={foto.src}
                  alt={foto.titulo}
                  width={100}
                  height={80}
                  className={`cursor-pointer border-2 ${
                    currentIndex === index
                      ? "border-red-600"
                      : "border-transparent"
                  } rounded-md`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">{data.nome}</h1>
            <div className="flex flex-col gap-2">
              <span className="text-red-600 line-through">
                De: {data.preco_original}
              </span>
              <span className="text-green-600 text-xl">Por: {data.preco}</span>
              <span className="text-gray-500">
                Ou 12x de: {data.preco_parcelado}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg">Cor:</h3>
              {/* Renderização de cores */}
              <span className="w-5 h-5 border border-black rounded-full"></span>
            </div>
            <a
              target="_blank"
              href={data.link_1}
              className="inline-block px-4 py-2 bg-green-500 text-white text-center rounded-md mt-4 hover:bg-green-600 transition"
            >
              Compre via WhatsApp
            </a>
            <p className="text-gray-700 mt-4">
              Pagamento realizado no ato da Entrega
            </p>
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex border-b border-gray-300 mb-4">
            <li className="mr-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-red-500 transition">
              Descrição
            </li>
            <li className="pb-2 cursor-pointer border-b-2 border-transparent hover:border-red-500 transition">
              Informações adicionais
            </li>
          </ul>
          <div>
            <h3 className="text-xl font-semibold">
              {data.nome_long} {data.cor}
            </h3>
            <p className="mt-2">{data.descricao}</p>
            {data.altura && data.largura && data.profundidade_aberto && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Medidas:</h3>
                <p>Altura: {data.altura}m</p>
                <p>Largura: {data.largura}m</p>
                <p>Profundidade: {data.profundidade_aberto}m</p>
                {data.profundidade_fechado && (
                  <p>
                    Profundidade fechado (sofás retráteis):{" "}
                    {data.profundidade_fechado}m
                  </p>
                )}
              </div>
            )}
            {data.assento && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Assento:</h3>
                <p>{data.assento}</p>
              </div>
            )}
            {data.encosto && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Encosto:</h3>
                <p>{data.encosto}</p>
              </div>
            )}
            {data.estrutura && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Características:</h3>
                <p>{data.estrutura}</p>
              </div>
            )}
            {data.braco && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Braços:</h3>
                <p>{data.braco}</p>
              </div>
            )}
            <p className="text-gray-600 mt-8">
              * As imagens dos produtos são meramente ilustrativas. As cores
              podem sofrer variações dependendo da luminosidade, tipo de câmera
              ou mesmo da visualização das imagens em dispositivos diversos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
