import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komode | Sobre",
  description:
    "Saiba um pouco sobre a história da nossa loja, como começamos e como revolucionamos o mercado de móveis",
};

export default function SobrePage() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="bg-[url('/assets/sobre/pag-sobre-bg.webp')] h-[550px] w-full bg-cover bg-center mt-[-200px] text-white text-center flex flex-col items-center justify-center">
        <h1 className="mt-[400px] sm:mt-[200px] text-[2.5rem] uppercase font-light">
          Nossa História
        </h1>
        <p>O início da nossa história</p>
      </div>
      <section className="w-full px-4 lg:px-20 py-8">
        <h1 className="text-4xl font-semibold text-center mb-6">
          O início de tudo
        </h1>
        <h2 className="text-lg text-center mx-auto max-w-3xl">
          Nossa historia sempre foi acompanhada de muita dedicação e esforço,
          trabalhamos duro e nos esforçamos desde o inicio para entregar
          produtos de excelente qualidade, sempre prezando pelo respeito mútuo
          entre nossos colaboradores.
        </h2>
      </section>
      <div className="relative w-full flex flex-col items-center mt-8 gap-20 px-6">
        <div className="absolute w-[4px] h-full bg-red-600 z-0"></div>
        <div className="relative flex flex-wrap items-center justify-center sm:justify-between w-full max-w-7xl text-center bg-white shadow-md">
          <div className="relative flex items-center flex-col sm:flex-row">
            <Image
              src="/assets/sobre/blog-2.webp"
              width={800}
              height={370}
              className="max-w-full h-full"
              alt="Imagem de um ambiente da casa"
            />
            <Image
              src="/assets/sobre/card-1.png"
              width={150}
              height={150}
              className="sm:ml-[-75px] left-[720] transform -mt-20 sm:-mt-0 z-10"
              alt="Card com o ano de 2019"
            />
          </div>
          <div className="relative flex-1 max-w-md  p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold mb-4">
              <span>Como foi o nosso início</span>
            </h1>
            <p>
              No início de nossa jornada, em 2019, a Komode Móveis e Decorados
              nasceu como um sonho, uma pequena semente de esperança plantada em
              solo fértil. Em uma modesta loja, começamos a traçar nossa
              história, movidos pela determinação e paixão em criar móveis que
              transformam ambientes em lares acolhedores. Ao longo do tempo,
              aprendemos que cada peça de mobiliário que produzimos vai além de
              ser um simples objeto. É uma expressão de nossa dedicação, um
              reflexo de nossa criatividade e um testemunho de nossa incessante
              busca pela qualidade. Com cada detalhe meticulosamente planejado e
              cada estofado cuidadosamente selecionado, não construímos apenas
              móveis, mas sim, memórias duradouras.
            </p>
          </div>
        </div>
        <div className="relative flex flex-wrap items-center justify-center sm:justify-between w-full max-w-7xl text-center bg-white shadow-md">
          <div className="relative flex items-center flex-col sm:flex-row">
            <Image
              src="/assets/sobre/blog-3.webp"
              width={800}
              height={380}
              className="max-w-full h-full"
              alt="Imagem de um ambiente da casa"
            />
            <Image
              src="/assets/sobre/card-2.png"
              width={150}
              height={150}
              className="sm:ml-[-75px] left-[720] transform -mt-20 sm:-mt-0 z-10"
              alt="Card com o ano de 2021"
            />
          </div>
          <div className="relative flex-1 max-w-md  p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold mb-4">
              <span>A pandemia</span>
            </h1>
            <p>
              Em 2021, a Komode Móveis e Decorados enfrentou um dos maiores
              desafios de sua trajetória: a pandemia. Em um momento de
              incertezas, mantivemos nosso compromisso com nossos colaboradores
              e clientes, sem reduzir o quadro de funcionários e mantendo o
              mesmo padrão de excelência em nossos estofados. Enfrentamos as
              adversidades com resiliência e inovação, sempre em busca do melhor
              atendimento e da mais alta qualidade em nossos produtos. Cada peça
              continuou a ser uma expressão de nossa dedicação, refletindo a
              mesma criatividade e empenho que nos caracterizam desde o início.
              Assim, reforçamos nossa missão de transformar ambientes em lares
              acolhedores, com a certeza de que juntos, superamos qualquer
              obstáculo.
            </p>
          </div>
        </div>
        <div className="relative flex flex-wrap items-center justify-center sm:justify-between w-full max-w-7xl text-center bg-white shadow-md">
          <div className="relative flex items-center flex-col sm:flex-row">
            <Image
              src="/assets/sobre/blog-4.webp"
              width={800}
              height={370}
              className="max-w-full h-full"
              alt="Imagem de um ambiente da casa"
            />
            <Image
              src="/assets/sobre/card-3.png"
              width={150}
              height={150}
              className="sm:ml-[-75px] left-[720] transform -mt-20 sm:-mt-0 z-10"
              alt="Card com o ano de 2022"
            />
          </div>
          <div className="relative flex-1 max-w-md  p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold mb-4">
              <span>A Fábrica</span>
            </h1>
            <p>
              Após consolidar nossa presença no mercado, em 2022, decidimos dar
              um passo audacioso: a construção de nossa própria fábrica.
              Encaramos este desafio com determinação, trabalho árduo e o
              compromisso inabalável de nossa dedicada equipe. Superamos cada
              obstáculo, transformando nossa visão em realidade. Hoje, a fábrica
              da Komode Móveis e Decorados é o coração pulsante de nossa
              produção, onde qualidade e inovação se encontram em cada peça que
              criamos. Assim, escrevemos mais um capítulo emocionante em nossa
              jornada, com a certeza de que muitos outros virão.
            </p>
          </div>
        </div>
        <div className="relative flex flex-wrap items-center justify-center sm:justify-between w-full max-w-7xl text-center bg-white shadow-md">
          <div className="relative flex items-center flex-col sm:flex-row">
            <Image
              src="/assets/sobre/blog-5.webp"
              width={800}
              height={370}
              className="max-w-full h-full"
              alt="Imagem de um ambiente da casa"
            />
            <Image
              src="/assets/sobre/card-4.png"
              width={150}
              height={150}
              className="sm:ml-[-75px] left-[720] transform -mt-20 sm:-mt-0 z-10"
              alt="Card com o ano de 2024"
            />
          </div>
          <div className="relative flex-1 max-w-md  p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold mb-4">
              <span>O Hoje, 2024 um ano de novidades</span>
            </h1>
            <p>
              Em 2024, a Komode Móveis e Decorados permanece fiel aos seus
              propósitos iniciais, sempre em busca de inovação e excelência. Ao
              longo dos anos, nossa dedicação à qualidade e ao atendimento
              impecável nunca vacilou. Continuamos a transformar ambientes em
              lares acolhedores, com móveis que são uma expressão de nossa
              criatividade e compromisso com a satisfação de nossos clientes. A
              cada nova coleção, renovamos nosso empenho em oferecer produtos
              que aliam design sofisticado e funcionalidade. Nossa trajetória é
              marcada por um contínuo aperfeiçoamento, assegurando que cada peça
              entregue reflita o melhor de nosso trabalho e paixão.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[600px] sm:h-[500px] w-full mt-10 bg-[url('/assets/sobre/paralax-img.webp')] bg-fixed bg-center bg-cover mb-[100px] flex flex-col justify-center items-center px-4 text-white">
        <h1 className="text-3xl font-semibold">KOMODE MÓVEIS</h1>
        <h2 className="max-w-3xl text-center sm:text-xl text-lg mt-4">
          Ao escolher a Komode Móveis e Decorados, você está optando por uma
          empresa que valoriza a excelência, a inovação e a satisfação do
          cliente. Nossa trajetória, marcada por anos de dedicação e evolução,
          reflete nosso compromisso inabalável com a qualidade e o design. Cada
          peça que criamos é um testemunho de nossa paixão em transformar
          ambientes em lares acolhedores e elegantes. Confie na Komode Móveis
          para trazer sofisticação, funcionalidade e conforto ao seu espaço. Com
          nossa experiência e atenção aos detalhes, garantimos que a sua casa
          será um reflexo único de sua personalidade e estilo. A Komode Móveis
          é, sem dúvida, a escolha certa para decorar o seu lar.
        </h2>
      </div>
    </main>
  );
}
