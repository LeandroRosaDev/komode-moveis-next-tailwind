import { useState, useEffect } from "react";

interface FiltroProps {
  params: { categorias: string };
  onFilterChange: (filters: Record<string, string>) => void;
}

const FiltroComponent = ({ params, onFilterChange }: FiltroProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const globalFilters = {
    situacao: ["destaque", "promocao", "queima de estoque"],
    cor: ["marrom", "preto", "vermelho", "azul", "terracota", "verde", "Bege"],
    disponibilidade: ["sim", "não"],
    rangedevalor: [
      "499",
      "999",
      "1499",
      "1999",
      "2499",
      "2999",
      "3999",
      "4999",
    ],
    largura: ["1.80", "2.00", "2.30", "2.50", "2.70", "2.90"],
  };

  const categoryFilters: Record<string, string[]> = {
    "Sala de Estar": [
      "Sofá Retrátil",
      "Sofá Canto",
      "Sofá 2 e 3 lugares",
      "Poltronas",
      "Estante",
      "Painel",
      "Armario",
      "Mesa de Jantar",
      "Poltronas",
    ],
    Cozinha: ["Kit de Cozinha", "balcao de cozinha", "mesa de alumínio"],
    Banheiro: ["Armário de banheiro"],
    "Quarto de Casal": [
      "Cama de Casal",
      "Guarda Roupa Casal",
      "Base de Casal",
      "Colchão de Casal",
    ],
    "Quarto de Solteiro": [
      "Cama de Solteiro",
      "Guarda Roupa Solteiro",
      "Base de Solteiro",
      "Colchao de Solteiro",
    ],
    Lavanderia: ["Multiuso"],
  };

  useEffect(() => {
    const categoryKey = decodeURIComponent(params.categorias).replace(
      /%20/g,
      " "
    );
    if (categoryKey in categoryFilters) {
      setAvailableFilters(categoryFilters[categoryKey]);
    } else {
      setAvailableFilters([]);
    }
  }, [params.categorias]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[key] === value) {
        delete newFilters[key];
      } else {
        newFilters[key] = value;
      }
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <section className="w-full md:w-64 h-full p-4 bg-gray-100 rounded-lg shadow-md mb-2">
      <h1 className="mb-4 text-lg font-semibold">Filtros:</h1>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-between sm:flex-col flex-row gap-2 ">
        <div>
          <h2 className="mb-2 text-base font-semibold">Produtos:</h2>
          {isMobile ? (
            <select
              className="w-full border border-gray-300 rounded-md bg-gray-100 p-2"
              value={filters.sub_categoria || ""}
              onChange={(e) =>
                handleFilterChange("sub_categoria", e.target.value)
              }
            >
              <option value="">Selecione uma categoria</option>
              {availableFilters.map((subCategoria) => (
                <option key={subCategoria} value={subCategoria}>
                  {subCategoria}
                </option>
              ))}
            </select>
          ) : (
            availableFilters.map((subCategoria) => (
              <label
                key={subCategoria}
                className="flex items-center mb-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={filters.sub_categoria === subCategoria}
                  onChange={() =>
                    handleFilterChange("sub_categoria", subCategoria)
                  }
                  className="mr-2"
                />
                {subCategoria}
              </label>
            ))
          )}
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold">Largura:</h2>
          {isMobile ? (
            <select
              className="w-full border border-gray-300 rounded-md bg-gray-100 p-2"
              value={filters.largura || ""}
              onChange={(e) => handleFilterChange("largura", e.target.value)}
            >
              <option value="">Selecione uma largura</option>
              {globalFilters.largura.map((largura) => (
                <option key={largura} value={largura}>
                  {largura} m
                </option>
              ))}
            </select>
          ) : (
            globalFilters.largura.map((largura) => (
              <label key={largura} className="flex items-center mb-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.largura === largura}
                  onChange={() => handleFilterChange("largura", largura)}
                  className="mr-2"
                />
                {largura} m
              </label>
            ))
          )}
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold">Promoção:</h2>
          {isMobile ? (
            <select
              className="w-full border border-gray-300 rounded-md bg-gray-100 p-2"
              value={filters.situacao || ""}
              onChange={(e) => handleFilterChange("situacao", e.target.value)}
            >
              <option value="">Selecione uma situação</option>
              {globalFilters.situacao.map((situacao) => (
                <option key={situacao} value={situacao}>
                  {situacao.charAt(0).toUpperCase() + situacao.slice(1)}
                </option>
              ))}
            </select>
          ) : (
            globalFilters.situacao.map((situacao) => (
              <label key={situacao} className="flex items-center mb-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.situacao === situacao}
                  onChange={() => handleFilterChange("situacao", situacao)}
                  className="mr-2"
                />
                {situacao.charAt(0).toUpperCase() + situacao.slice(1)}
              </label>
            ))
          )}
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold">Cor:</h2>
          {isMobile ? (
            <select
              className="w-full border border-gray-300 rounded-md bg-gray-100 p-2"
              value={filters.cor || ""}
              onChange={(e) => handleFilterChange("cor", e.target.value)}
            >
              <option value="">Selecione uma cor</option>
              {globalFilters.cor.map((cor) => (
                <option key={cor} value={cor}>
                  {cor.charAt(0).toUpperCase() + cor.slice(1)}
                </option>
              ))}
            </select>
          ) : (
            globalFilters.cor.map((cor) => (
              <label key={cor} className="flex items-center mb-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.cor === cor}
                  onChange={() => handleFilterChange("cor", cor)}
                  className="mr-2"
                />
                {cor.charAt(0).toUpperCase() + cor.slice(1)}
              </label>
            ))
          )}
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold">Disponibilidade:</h2>
          {isMobile ? (
            <select
              className="w-full border border-gray-300 rounded-md bg-gray-100 p-2"
              value={filters.disponibilidade || ""}
              onChange={(e) =>
                handleFilterChange("disponibilidade", e.target.value)
              }
            >
              <option value="">Selecione a disponibilidade</option>
              {globalFilters.disponibilidade.map((disponibilidade) => (
                <option key={disponibilidade} value={disponibilidade}>
                  Em estoque: {disponibilidade}
                </option>
              ))}
            </select>
          ) : (
            globalFilters.disponibilidade.map((disponibilidade) => (
              <label
                key={disponibilidade}
                className="flex items-center mb-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={filters.disponibilidade === disponibilidade}
                  onChange={() =>
                    handleFilterChange("disponibilidade", disponibilidade)
                  }
                  className="mr-2"
                />
                Em estoque: {disponibilidade}
              </label>
            ))
          )}
        </div>
        <div>
          <h2 className="mb-2 text-base font-semibold">Range de Valor:</h2>
          <div className="flex flex-wrap gap-2">
            <select
              className="border border-gray-300 rounded-md bg-gray-100 p-2 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-outline"
              value={filters.rangedevalor || ""}
              onChange={(e) =>
                handleFilterChange("rangedevalor", e.target.value)
              }
            >
              <option value="">Selecione um valor</option>
              {globalFilters.rangedevalor.map((rangedevalor) => (
                <option key={rangedevalor} value={rangedevalor}>
                  Até R${rangedevalor}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={handleClearFilters}
        className="block mt-4 px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-colors duration-300 w-full"
      >
        Limpar Filtros
      </button>
    </section>
  );
};

export default FiltroComponent;
