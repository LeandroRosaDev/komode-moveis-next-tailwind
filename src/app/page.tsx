"use client";
import ModalFreteGratis from "@/componentes/helpers/ModalPopUp";
import { SlideHome } from "@/componentes/helpers/Slide";
import MenuCategorias from "@/componentes/menus/MenuCategorias";
import { CarrosseldeProdutos } from "@/componentes/produtos/CarrosseldeProdutos";
import GetProdutosDestaque from "@/componentes/produtos/GetProdutosDestaque";
import GetProdutosPromocao from "@/componentes/produtos/GetProdutosPromocao";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <ModalFreteGratis />

      {/* Background principal */}
      <SlideHome />
      {/* Tarja vermelha */}
      <div className="w-full bg-red-700 text-white flex justify-center items-center text-xs uppercase flex-wrap gap-2 py-4">
        <div className="flex items-center sm:gap-4 gap-2 px-4 text-center">
          <h1>Todos os produtos com frete grátis para todo o Rio de Janeiro</h1>
          <Image
            src="/assets/8.svg"
            alt="Icone de um caminhão"
            width={50}
            height={50}
          />
        </div>
        <div className="sm:flex hidden items-center sm:gap-4 gap-2 px-4 text-center">
          <h1>Pagamento em até 12x sem juros no cartão</h1>
          <Image
            src="/assets/9.svg"
            alt="Icone de um cartão"
            width={50}
            height={50}
          />
        </div>
        <div className="sm:flex hidden items-center sm:gap-4 gap-2 px-4 text-center">
          <h1>E você só vai pagar na hora da entrega</h1>
          <Image
            src="/assets/10.svg"
            alt="Icone de entrega"
            width={50}
            height={50}
          />
        </div>
      </div>

      <MenuCategorias />

      {/* Produtos em promocao */}
      <section className="flex flex-col items-center justify-center my-16 p-3">
        <h1 className="text-4xl font-bold text-center mb-4">
          Produtos em Promoção
        </h1>
        <h2 className="text-2xl text-center mb-8">
          Venha conferir nossos produtos em promoção
        </h2>
        <GetProdutosPromocao />
      </section>

      {/* Categorias populares */}
      <section className="mt-16">
        <div className="flex justify-center bg-black w-full overflow-hidden">
          <Link
            href="/categorias/sala de estar"
            className="relative flex flex-col justify-center items-center text-white text-center h-[450px] sm:h-[750px] w-full sm:w-1/2 lg:w-1/4 bg-[url('/assets/categorias-img-1.webp')] bg-cover group overflow-hidden transition-transform duration-500 ease-in-out hover:z-10 hover:scale-110"
          >
            <Image
              src="/assets/categoria-icon-1.png"
              alt="Icone de um sofá"
              width={100}
              height={100}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <p>Sala de Estar</p>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h1 className="text-xl font-semibold">
                Os melhores móveis para a sua sala de estar
              </h1>
              <p className="text-sm">
                Venha conferir os melhores móveis para decorar a sua sala de
                estar!
              </p>
            </div>
          </Link>
          <Link
            href="/categorias/quarto de solteiro"
            className="relative flex flex-col justify-center items-center text-white text-center h-[450px] sm:h-[750px] w-full sm:w-1/2 lg:w-1/4 bg-[url('/assets/categorias-img-2.webp')] bg-cover group overflow-hidden transition-transform duration-500 ease-in-out hover:z-10 hover:scale-110"
          >
            <Image
              src="/assets/categoria-icon-2.png"
              alt="Icone de uma cama"
              width={100}
              height={100}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <p>Quarto</p>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h1 className="text-xl font-semibold">
                Os melhores móveis para o seu quarto
              </h1>
              <p>Venha mobiliar seu quarto com os melhores móveis!</p>
            </div>
          </Link>
          <Link
            href="/categorias/escritorio"
            className="relative flex flex-col justify-center items-center text-white text-center h-[450px] sm:h-[750px] w-full sm:w-1/2 lg:w-1/4 bg-[url('/assets/categorias-img-3.webp')] bg-cover group overflow-hidden transition-transform duration-500 ease-in-out hover:z-10 hover:scale-110"
          >
            <Image
              src="/assets/categoria-icon-3.png"
              alt="Icone de um escritório"
              width={100}
              height={100}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <p>Escritório</p>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h1 className="text-xl font-semibold">
                Os melhores móveis para o seu escritório
              </h1>
              <p>
                Venha conferir os melhores móveis de escritório para a sua casa!
              </p>
            </div>
          </Link>
          <Link
            href="/categorias/banheiro"
            className="relative flex flex-col justify-center items-center text-white text-center h-[450px] sm:h-[750px] w-full sm:w-1/2 lg:w-1/4 bg-[url('/assets/categorias-img-4.webp')] bg-cover group overflow-hidden transition-transform duration-500 ease-in-out hover:z-10 hover:scale-110"
          >
            <Image
              src="/assets/categoria-icon-4.png"
              alt="Icone de um banheiro"
              width={100}
              height={100}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <p>Banheiro</p>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h1 className="text-xl font-semibold">
                Os melhores móveis para o seu banheiro
              </h1>
              <p>Que tal um banheiro dos sonhos? Aqui você pode!</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Produtos em destaque */}
      <CarrosseldeProdutos />

      {/* Nossa História */}
      <section className="relative h-auto bg-[url('/assets/sobre-bg.webp')] bg-fixed bg-center bg-cover flex items-center justify-center text-center text-white py-16 px-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
          <p className="text-lg sm:text-xl">
            Nossa história se inicia em 2019, quando decidimos abrir nossa
            primeira loja. Localizada em São João de Meriti nossa loja hoje em
            outro endereço nos trouxe a sabedoria e a experiência de como lidar
            com o público e sempre atender com muito carinho nossos clientes.
          </p>
          <Link
            href="/sobre"
            className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-red-700 transition-colors duration-500"
          >
            Veja a nossa história completa
          </Link>
        </div>
      </section>

      {/* Dúvidas */}
      <section className="flex flex-col items-center justify-center my-16">
        <h1 className="text-4xl font-bold text-center mb-4">Dúvidas</h1>
        <h2 className="text-2xl text-center mb-8">
          Tirem suas principais dúvidas conosco
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/duvidas"
            className="relative flex flex-col items-center justify-center bg-white overflow-hidden transition-transform duration-500 rounded-2xl  ease-in-out h-[330px] w-[90%] sm:w-[400px] group shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <Image
              src="/assets/duvidas-img-1.webp"
              alt="Imagem de entregas"
              objectFit="cover"
              width={200}
              height={200}
              className="absolute top-0 left-0 w-full h-full z-0 border border-red-700 rounded-2xl"
            />
            <h1 className="relative z-10 text-2xl p-4 bg-red-700 bg-opacity-70 text-white font-semibold w-full text-center ">
              Qual o tempo de entrega?
            </h1>
            <span className="absolute bottom-[-70px] w-1/2 py-2 bg-red-700 text-white rounded-lg transition-all duration-500 group-hover:bottom-4 text-center z-10">
              Veja Mais
            </span>
          </Link>
          <Link
            href="/duvidas"
            className="relative flex flex-col items-center justify-center bg-white overflow-hidden transition-transform duration-500 ease-in-out h-[330px] w-[90%] sm:w-[400px] rounded-2xl group shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <Image
              src="/assets/duvidas-img-2.webp"
              alt="Imagem de um contrato"
              objectFit="cover"
              width={200}
              height={200}
              className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl border border-red-700"
            />
            <h1 className="relative z-10 text-2xl p-4 bg-red-700 bg-opacity-70 text-white font-semibold w-full text-center">
              Qual o prazo de garantia?
            </h1>
            <span className="absolute bottom-[-70px] w-1/2 py-2 bg-red-700 text-white rounded-lg transition-all duration-500 group-hover:bottom-4 text-center z-10">
              Veja Mais
            </span>
          </Link>
          <Link
            href="/duvidas"
            className="relative flex flex-col items-center justify-center bg-white overflow-hidden transition-transform duration-500 ease-in-out h-[330px] w-[90%] sm:w-[400px] rounded-2xl group shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <Image
              src="/assets/duvidas-img-3.webp"
              alt="Imagem de um cartão"
              objectFit="cover"
              width={200}
              height={200}
              className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl border border-red-700"
            />
            <h1 className="relative z-10 text-2xl p-4 bg-red-700 bg-opacity-70 text-white font-semibold w-full text-center">
              O pagamento é na entrega?
            </h1>
            <span className="absolute bottom-[-70px] w-1/2 py-2 bg-red-700 text-white rounded-lg transition-all duration-500 group-hover:bottom-4 text-center z-10">
              Veja Mais
            </span>
          </Link>
        </div>
      </section>

      {/* Sigam-nos no Instagram */}
      <section className="flex flex-col items-center justify-center mt-16 pt-4 bg-white">
        <h1 className="text-4xl font-light text-center mb-4 uppercase mx-1">
          Sigam-nos no Instagram
        </h1>
        <h2 className="text-2xl text-center mb-8">
          <a target="blank" href="https://www.instagram.com/komodemd/">
            @komodemd
          </a>
        </h2>
        <div className="w-full flex justify-center bg-black">
          <div className="flex justify-center items-center flex-wrap w-full  overflow-hidden">
            <Image
              src="/assets/social-img.webp"
              alt="Imagens de cômodos"
              width={1920}
              height={700}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
