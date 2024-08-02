import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komode | Dúvidas",
  description: "Retire todas as dúvidas sobre nossos serviços nesta seção!",
};

export default function DuvidasPage() {
  return (
    <section className="w-full">
      <div className="bg-[url('/assets/duvidas/duvidas-bg.webp')] h-[500px] w-full bg-cover bg-center mt-[-200px] text-white text-center flex flex-col items-center justify-center">
        <h1 className=" mt-[350px] text-3xl sm:text-5xl uppercase font-light">
          Dúvidas Frequentes
        </h1>
        <p>Retire todas as suas dúvidas abaixo</p>
      </div>

      <div className="flex flex-col items-center gap-16 my-24 px-6">
        <div className="flex flex-col lg:flex-row max-w-5xl gap-4 rounded-lg overflow-hidden">
          <Image
            src="/assets/duvidas-img-1.webp"
            width={1080}
            height={650}
            alt="Imagem de uma entrega"
            className="w-[600px] h-[400px] rounded-lg"
          />
          <div className="bg-white shadow-md text-center rounded-lg p-6 flex-1">
            <h2 className="text-2xl font-semibold mb-4">Prazo de Entrega</h2>
            <p className="text-gray-500 text-sm mb-4">
              A Komode móveis tem a entrega mais rápida do mercado
            </p>
            <p className="text-gray-700 font-medium">
              Na Komode Móveis e Decorados, entendemos a importância de receber
              seus móveis com rapidez e eficiência. Por isso, temos o
              compromisso de entregar nossos produtos em até 7 dias úteis. Nosso
              processo logístico é cuidadosamente planejado para garantir que
              você receba suas peças dentro do prazo estabelecido, sem
              comprometer a qualidade. Priorizamos a pontualidade e a satisfação
              do cliente, assegurando uma experiência de compra tranquila e
              confiável. Com a Komode Móveis, você pode confiar que seus novos
              móveis chegarão rapidamente, prontos para transformar seu lar com
              estilo e conforto.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-5xl gap-4 rounded-lg overflow-hidden">
          <Image
            src="/assets/duvidas-img-2.webp"
            width={1080}
            height={650}
            alt="Imagem de coleta de assinatura"
            className="w-[600px] h-[400px] rounded-lg lg:hidden"
          />
          <div className="bg-white shadow-md text-center rounded-lg p-6 flex-1">
            <h2 className="text-2xl font-semibold mb-4">Prazo de Garantia</h2>
            <p className="text-gray-500 text-sm mb-4">
              A Garantia do seu produto é assegurada por nós!
            </p>
            <p className="text-gray-700 font-medium">
              Na Komode Móveis e Decorados, prezamos pela qualidade e
              durabilidade de nossos produtos, oferecendo uma garantia de 90
              dias para sua tranquilidade. Durante este período, qualquer
              defeito de fabricação será reparado sem custo adicional. No
              entanto, é importante destacar que não cobrimos danos decorrentes
              de mau uso. Após os primeiros 7 dias da compra, caso haja
              necessidade de reparos, seu produto será encaminhado para nossa
              assistência técnica especializada. Estamos comprometidos em
              proporcionar um excelente atendimento, garantindo que seus móveis
              mantenham-se em perfeito estado por muito tempo.
            </p>
          </div>
          <Image
            src="/assets/duvidas-img-2.webp"
            width={1080}
            height={650}
            alt="Imagem de coleta de assinatura"
            className="w-[600px] h-[400px] rounded-lg hidden lg:flex"
          />
        </div>

        <div className="flex flex-col lg:flex-row max-w-5xl gap-4 rounded-lg overflow-hidden">
          <Image
            src="/assets/duvidas-img-3.webp"
            width={600}
            height={400}
            alt="Imagem de um pagamento no cartão"
            className="w-[600px] h-[400px] rounded-lg"
          />
          <div className="bg-white shadow-md text-center rounded-lg p-6 flex-1">
            <h2 className="text-2xl font-semibold mb-4">Pagamento</h2>
            <p className="text-gray-500 text-sm mb-4">
              O pagamento aqui é somente no momento da entrega!
            </p>
            <p className="text-gray-700 font-medium">
              Na Komode Móveis e Decorados, facilitamos a realização do seu
              sonho de ter um lar acolhedor e elegante. Aceitamos pagamentos em
              até 12 vezes sem juros no cartão, proporcionando flexibilidade e
              comodidade para você. Além disso, o pagamento é realizado apenas
              no momento da entrega, garantindo segurança e confiança em sua
              compra. Queremos que sua experiência com a Komode Móveis seja
              agradável e livre de preocupações, desde a escolha dos móveis até
              a sua chegada ao seu lar. Com nossa política de pagamento, fica
              ainda mais fácil transformar seu ambiente com peças de alta
              qualidade e design sofisticado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
