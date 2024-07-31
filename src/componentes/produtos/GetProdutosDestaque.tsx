"use client";
import React, { useState, useEffect } from "react";
import { Produto } from "@/interfaces/Produtos-types";
import Image from "next/image";
import Link from "next/link";
import { getProductsDestaqueAction } from "@/action/produtos/get-produtos-destaque-action";
import LoadingSpinner from "../helpers/Loading";

const GetProdutosDestaque = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await getProductsDestaqueAction();
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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap sm:gap-5 gap-2 justify-center max-w-7xl my-8">
        {produtos.map((produto) => (
          <Link key={produto.id} href={`/produtos/${produto.id}`}>
            <div className="relative w-48 sm:w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 flex flex-col items-center text-center sm:p-4 p-1 group cursor-pointer">
              {produto.fotos && produto.fotos.length > 0 && (
                <div className="relative w-full h-48">
                  <Image
                    src={produto.fotos[1].src}
                    alt={`Imagem de ${produto.nome}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full transition-opacity duration-500 rounded-md group-hover:opacity-30"
                  />
                  <div className="absolute top-2 left-2 bg-red-700 text-white text-xs py-1 px-2 rounded-full font-bold">
                    Frete Grátis
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="bg-red-700 text-white text-lg py-2 px-4 rounded-lg hover:bg-red-800">
                      Ver detalhes
                    </span>
                  </div>
                </div>
              )}
              <div className="text-left w-40 sm:w-60 mt-4">
                <h2 className="sm:text-lg text-sm truncate">{produto.nome}</h2>
                <p className="line-through text-red-600 sm:text-sm text-xs">
                  De: {produto.preco_original}
                </p>
                <p className="sm:text-xl text-sm">
                  Por: {produto.preco} <span className="text-sm">à vista</span>
                </p>
                <p className="text-xs text-gray-600">
                  Ou em até 12x de: {produto.preco_parcelado}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GetProdutosDestaque;
