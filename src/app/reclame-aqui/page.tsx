import type { Metadata } from "next";
import PostReclamacao from "@/componentes/reclamacoes/PostReclamacao";

export const metadata: Metadata = {
  title: "Komode | Reclame Aqui",
  description:
    "Nós preservamos a comunicação em primeiro lugar, então disponibilizamos um canal onde os clientes conseguem enviar reclamações!",
};

export default function reclamacaoPage() {
  return (
    <section className="w-full">
      <div className="bg-[url('/assets/reclamacoes/bg-reclamacoes.webp')] h-[550px] w-full bg-cover bg-center mt-[-200px] text-white text-center flex flex-col items-center justify-center">
        <h1 className="mt-[400px] sm:mt-[300px] text-[2.5rem] uppercase font-semibold">
          Reclame aqui
        </h1>
      </div>
      <h1 className="text-center text-3xl m-10">Registre a sua Reclamação </h1>
      <p className="text-center text-xl max-w-2xl m-auto">
        Nós da Komode nos importamos muito com a sua reclamação, por favor
        preencha os campos abaixo para que possamos investigar e resolver a sua
        solicitação o mais rapido possível
      </p>
      <PostReclamacao />
    </section>
  );
}
