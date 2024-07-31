import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const PesquisaProdutos = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex  sm:flex-row justify-center items-center mx-4 mb-2 gap-2 ">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar por nome"
        className="border p-2 rounded-md w-full sm:w-auto"
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 text-white py-2 px-4 rounded transition duration-100 hover:bg-red-700 focus:outline-none focus:shadow-outline w-full sm:w-auto"
      >
        Pesquisar
      </button>
    </div>
  );
};

export default PesquisaProdutos;
