import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komode | Contato",
  description:
    "Converse com nossos especialistas que estão sempre prontos para te atender durante qualquer momento do dia!",
};

export default function ContatoPage() {
  return (
    <section className="w-full ">
      <div className="bg-[url('/assets/contato/bg-contato.webp')] w-full h-[750px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center mt-[-200px]">
        <h1 className="sm:mt-[250px] mt-[200px] text-[2.5rem] uppercase font-light">
          Contato
        </h1>
        <p>Fale conosco</p>
      </div>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:mt-[-100px] mt-[-200px] bg-white rounded-t-lg sm:w-[80%] w-[90%]">
          <div className="flex justify-center flex-wrap sm:py-12 py-4 sm:gap-20 gap-4 w-full">
            <div className="flex flex-col items-center sm:gap-8 gap-2 text-center w-[250px]">
              <Image
                src="/assets/contato/contato-icon-3.png"
                width={60}
                height={60}
                alt="Ícone de GPS"
              />
              <h2 className="text-xl font-semibold">
                Onde Nós <br /> Estamos
              </h2>
              <p>
                Rua Píres do Rio, 509 - Éden, <br /> São joão de meriti - RJ
              </p>
            </div>
            <div className="flex flex-col items-center sm:gap-8 gap-2 text-center w-[250px]">
              <Image
                src="/assets/contato/contato-icon-1.png"
                width={60}
                height={60}
                alt="ìcone de um telefone"
              />
              <h2 className="text-xl font-semibold">
                Entre em <br /> Contato
              </h2>
              <p>
                T +55 21 9 7899-1540 <br />
              </p>
            </div>
            <div className="flex flex-col items-center sm:gap-8 gap-2 text-center w-[250px]">
              <Image
                src="/assets/contato/contato-icon-2.png"
                width={60}
                height={60}
                alt="Ícone de um relógio"
              />
              <h2 className="text-xl font-semibold">
                Horário de <br /> funcionamento
              </h2>
              <p>
                Seg - Sex: 8 am - 17 pm <br /> Sáb 8 am - 12 pm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-600 text-white p-6 sm:12 gap-5 sm:w-[80%] w-[90%] rounded-b-lg mb-[100px]">
          <h1 className="text-2xl">ENVIE-NOS UMA MENSAGEM</h1>
          <p>
            Agradeçemos o seu contato, atendemos normalmente de segunda a sexta
            de 08:00 as 17:00 <br /> E no sábado de 08:00 as 12:00, em caso de
            dúvidas ou reclamações basta enviar-nos uma mensagem
          </p>

          <Link
            href="/reclame-aqui"
            className="bg-transparent border border-white py-2 px-4 uppercase hover:bg-white hover:text-black duration-200"
          >
            MENSAGEM
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.834775885669!2d-43.396623!3d-22.786993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996569cf804ddb%3A0xbf605c5e51e6ef5c!2sAL%20M%C3%B3veis%20e%20Estofados!5e0!3m2!1spt-BR!2sus!4v1714429604688!5m2!1spt-BR!2sus"
          width="100%"
          height="450"
          loading="lazy"
          className="w-full"
          title="Mapa com a localização da nossa loja"
        ></iframe>
      </section>
    </section>
  );
}
