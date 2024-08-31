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
  const [stockNumber, setStockNumber] = useState<number | null>(null);

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

    const storedStockNumber = localStorage.getItem(
      `stockNumber_${params.produtos}`
    );
    if (storedStockNumber) {
      setStockNumber(Number(storedStockNumber));
    } else {
      const randomStockNumber = Math.floor(Math.random() * 4) + 1;
      setStockNumber(randomStockNumber);
      localStorage.setItem(
        `stockNumber_${params.produtos}`,
        randomStockNumber.toString()
      );
    }
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
            <div className="flex flex-wrap justify-center gap-2 mt-4">
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
            {data.link_2 && (
              <div className="mt-8 w-[400px] sm:w-[500px] my-2">
                <h2 className="text-lg font-semibold">
                  Assista abaixo o vídeo deste produto!
                </h2>
                <p className="text-xs">
                  **Alguns produtos não estão disponíveis em vídeo nas cores do
                  produto <br /> Alguns vídeos são do mesmo produto porém em
                  cores similares
                </p>
                <div className="relative w-full max-w-xl mt-4">
                  <iframe
                    width="100%"
                    height="400px"
                    src={`https://www.youtube.com/embed/${
                      data.link_2.split("v=")[1]
                    }`}
                    title="Demonstração do Produto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">{data.nome}</h1>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-lg text-red-600 line-through">
                De: {data.preco_original}
              </span>
              <span className="font-bold text-green-700 text-2xl flex items-end">
                Por: {data.preco}{" "}
                <span className="text-gray-900 text-base ml-1"> no pix</span>
                <Image
                  src="/assets/pix.svg"
                  alt="icone do pix"
                  width={30}
                  height={20}
                />{" "}
              </span>
              <span className="font-bold text-gray-500">
                Ou 12x de: {data.preco_parcelado}
              </span>
            </div>
            <a
              target="_blank"
              href={data.link_1}
              className=" flex items-center justify-center gap-1 px-4 py-2 w-72 bg-green-500 text-white text-center rounded-md mt-4 hover:bg-green-600 transition"
            >
              <Image
                src="/assets/footer-social-3.png"
                alt="icone do pix"
                width={30}
                height={20}
              />
              Compre via WhatsApp
            </a>
            <p className="text-gray-700 mt-4">
              Pagamento realizado no ato da Entrega
            </p>

            {data.disponibilidade === "sim" ? (
              stockNumber !== null && (
                <div className="mt-4 p-4 bg-green-100 text-gray-600 rounded-md text-center w-72">
                  <h2 className="text-lg font-semibold">
                    Quantidade disponível
                  </h2>
                  <p className="text-2xl font-bold">{stockNumber} unidade(s)</p>
                </div>
              )
            ) : (
              <div className="mt-4 p-4 bg-red-500 text-white rounded-md text-center w-72">
                <h2 className="text-lg font-semibold">Produto indisponível</h2>
              </div>
            )}
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
            <h1 className="text-xl font-semibold">
              {data.nome_long} {data.cor}
            </h1>
            <p className="mt-2">{data.descricao}</p>
            {data.altura && data.largura && data.profundidade_aberto && (
              <div className="mt-4">
                <h1 className="text-lg font-semibold">Medidas:</h1>
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
                <h1 className="text-lg font-semibold">Assento:</h1>
                <p>{data.assento}</p>
              </div>
            )}
            {data.encosto && (
              <div className="mt-4">
                <h1 className="text-lg font-semibold">Encosto:</h1>
                <p>{data.encosto}</p>
              </div>
            )}
            {data.estrutura && (
              <div className="mt-4">
                <h1 className="text-lg font-semibold">Características:</h1>
                <p>{data.estrutura}</p>
              </div>
            )}
            {data.braco && (
              <div className="mt-4">
                <h1 className="text-lg font-semibold">Braços:</h1>
                <p>{data.braco}</p>
              </div>
            )}

            <p className="text-gray-600 mt-8">
              * As imagens dos produtos são meramente ilustrativas. As cores
              podem sofrer variações dependendo da luminosidade, tipo de câmera
              ou mesmo da visualização das imagens em dispositivos diversos. A
              Komode Móveis se reserva no direito de cometer alguns erros de
              digitação. A quantidade de produto disponível em estoque pode não
              ser a quantidade atual no estoque, consulte antes um vendedor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
