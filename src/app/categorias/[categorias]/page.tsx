"use client";
import { useEffect, useState, useCallback } from "react";
import { PageParams } from "@/interfaces/Produtos-types";
import Link from "next/link";
import Image from "next/image";
import { token } from "@/app/api/api";
import MenuCategoriasProdutos from "@/componentes/menus/MenuCategoriasProdutos";
import PesquisaProdutos from "@/componentes/helpers/PesquisaProdutos";
import FiltroComponent from "@/componentes/helpers/FiltroPesquisa";
import LoadingSpinner from "@/componentes/helpers/Loading";

const CategoriasPage = ({ params }: PageParams) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchProdutos = useCallback(async () => {
    let url = `https://apikomode.altuori.com/wp-json/api/produto?disponibilidade=sim&categoria=${params.categorias}&q=${searchTerm}&_limit=24`;
    Object.keys(filters).forEach((key) => {
      url += `&${key}=${filters[key]}`;
    });

    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }

      const data: any = await response.json();
      if (!data || data.length === 0) {
        throw new Error("Nenhum produto encontrado");
      }

      setProdutos(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params, filters, searchTerm]);

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos]);

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <section className="w-full">
        <MenuCategoriasProdutos />
        <h3 className="text-center mt-4">{error}</h3>

        <h1 className="text-center my-8">
          Mas você pode continuar vendo todos os produtos de:{" "}
          {decodeURIComponent(params.categorias).replace(/%20/g, " ")}
        </h1>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col items-center w-50% h-full justify-center px-2">
            <PesquisaProdutos
              onSearch={(term: string) => setSearchTerm(term)}
            />

            <FiltroComponent
              params={params}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-5 gap-1 justify-center items-start max-w-5xl mb-20 p-3">
            {produtos.map((produto: any) => (
              <div
                key={produto.id}
                className="flex flex-col items-center text-center justify-around relative w-full col-span-1 pb-2 sm:p-1 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 group cursor-pointer"
              >
                {produto.fotos && produto.fotos.length > 0 && (
                  <Link href={`/produtos/${produto.id}`}>
                    <div className="relative w-full h-full ">
                      <Image
                        src={produto.fotos[0].src}
                        alt={`Imagem de ${produto.nome}`}
                        objectFit="cover"
                        className="w-full transition-opacity duration-500 rounded-md group-hover:opacity-30"
                        width={300}
                        height={300}
                      />
                      <div className="absolute top-2 left-2 bg-red-700 text-white text-xs py-1 px-2 rounded-full font-bold">
                        Frete Grátis
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
                  </Link>
                )}
                <div className="text-left w-full h-full p-1">
                  <h2 className="sm:text-lg text-sm truncate">
                    {produto.nome}
                  </h2>
                  <p className="line-through text-red-600 sm:text-sm text-xs">
                    De: {produto.preco_original}
                  </p>
                  <p className="sm:text-xl text-sm flex items-end">
                    Por: {produto.preco}{" "}
                    <span className="text-sm flex ml-1">
                      {" "}
                      no pix{" "}
                      <Image
                        src="/assets/pix.svg"
                        alt="icone do pix"
                        width={20}
                        height={20}
                      />
                    </span>
                  </p>
                  <p className="text-xs text-gray-600">
                    Ou no cartão em até 12x de: {produto.preco_parcelado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full">
      <MenuCategoriasProdutos />
      <h1 className="text-center my-8">
        Exibindo todos os produtos para{" "}
        {decodeURIComponent(params.categorias).replace(/%20/g, " ")}
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col items-center w-50% h-full justify-center px-2">
          <PesquisaProdutos onSearch={(term: string) => setSearchTerm(term)} />
          <FiltroComponent
            params={params}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-5 gap-1 justify-center items-start max-w-5xl mb-20 p-3">
          {produtos.map((produto: any) => (
            <div
              key={produto.id}
              className="flex flex-col items-center text-center justify-around relative w-full col-span-1 pb-2 sm:p-1 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-105 group cursor-pointer"
            >
              {produto.fotos && produto.fotos.length > 0 && (
                <Link href={`/produtos/${produto.id}`}>
                  <div className="relative w-full h-full ">
                    <Image
                      src={produto.fotos[0].src}
                      alt={`Imagem de ${produto.nome}`}
                      objectFit="cover"
                      className="w-full transition-opacity duration-500 rounded-md group-hover:opacity-30"
                      width={300}
                      height={300}
                    />
                    <div className="absolute top-2 left-2 bg-red-700 text-white text-xs py-1 px-2 rounded-full font-bold">
                      Frete Grátis
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
                </Link>
              )}
              <div className="text-left w-full h-full p-1">
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
                      src="/assets/pix.svg"
                      alt="icone do pix"
                      width={20}
                      height={20}
                    />
                  </span>
                </p>
                <p className="text-xs text-gray-600">
                  Ou no cartão em até 12x de: {produto.preco_parcelado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriasPage;
