"use client";

import { useState } from "react";
import Image from "next/image";
import { postReclamacaoAction } from "@/action/reclamacoes/post-reclamacoes-action";

const PostReclamacao = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event: any) => {
    const form = event.target.form;
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const tipoReclamacao = form.tipo_reclamacao.value.trim();
    const reclamacao = form.reclamacao.value.trim();

    if (nome && email && telefone && tipoReclamacao && reclamacao) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        window.location.reload();
      }, 5000);
    }
  };

  return (
    <>
      <form
        action={postReclamacaoAction}
        className="max-w-2xl mx-auto my-8 p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-sm "
        method="POST"
      >
        <h2 className="text-center text-2xl text-red-600 mb-5">
          Formulário de Reclamação
        </h2>
        <div className="mb-4">
          <label htmlFor="nome" className="block mb-2 font-bold text-gray-700">
            Nome:
          </label>
          <input
            placeholder="Insira seu nome"
            name="nome"
            id="nome"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
            E-mail:
          </label>
          <input
            placeholder="Insira seu E-mail"
            name="email"
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="telefone"
            className="block mb-2 font-bold text-gray-700"
          >
            Telefone:
          </label>
          <input
            placeholder="Insira um número para contato"
            name="telefone"
            id="telefone"
            type="tel"
            className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipo_reclamacao"
            className="block mb-2 font-bold text-gray-700"
          >
            Tipo de Reclamação:
          </label>
          <select
            id="tipo_reclamacao"
            name="tipo_reclamacao"
            className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            <option value="">Selecione um tipo</option>
            <option value="Garantia">Garantia</option>
            <option value="Pagamento">Pagamento</option>
            <option value="Entrega">Entrega</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="reclamacao"
            className="block mb-2 font-bold text-gray-700"
          >
            Reclamação:
          </label>
          <textarea
            placeholder="Conte-nos sobre a sua reclamação"
            name="reclamacao"
            id="reclamacao"
            className="w-full p-2 border border-gray-300 rounded focus:border-red-600 focus:outline-none focus:ring focus:ring-red-300 h-32 resize-vertical"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
          onClick={handleClick}
        >
          Enviar
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-96 text-center">
            <span
              className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h1 className="text-xl font-bold">Komode Móveis</h1>
            <p className="mt-20">
              Sua reclamação foi registrada com sucesso, agradecemos pelo
              feedback!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostReclamacao;
