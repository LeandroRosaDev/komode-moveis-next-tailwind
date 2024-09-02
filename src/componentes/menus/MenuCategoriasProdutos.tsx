import Image from "next/image";
import Link from "next/link";

const MenuCategoriasProdutos = () => {
  return (
    <main>
      <div className="bg-[url('/assets/produtos/produtos-bg.webp')] relative sm:h-[580px] h-[380px] w-full bg-cover bg-center text-white flex flex-col items-center justify-center -mt-12 sm:-mt-48 text-center">
        <h1 className="text-4xl uppercase font-light mt-48">Produtos</h1>
        <p>Confira abaixo todos os produtos disponíveis em nosso estoque</p>
      </div>
      <div className="flex sm:justify-evenly justify-around flex-wrap gap-2 p-2 sm:p-4 bg-white duration-500">
        {[
          {
            href: "/categorias/Sala de Estar",
            src: "/assets/menu/13.svg",
            title: "Sala de estar",
            text: "Icone de um desenho de um sofá representando uma Sala de Estar",
          },
          {
            href: "/categorias/Quarto de Solteiro",
            src: "/assets/menu/11.svg",
            title: "Quarto de Solteiro",
            text: "Icone de um desenho de uma cama de solteiro representando um Quarto de Solteiro",
          },
          {
            href: "/categorias/Quarto de Casal",
            src: "/assets/menu/12.svg",
            title: "Quarto de Casal",
            text: "Icone de um desenho de uma cama de casal representando um Quarto de Casal",
          },
          {
            href: "/categorias/Cozinha",
            src: "/assets/menu/16.svg",
            title: "Cozinha",
            text: "Icone de um desenho de um kit de cozinha representando um Cozinha",
          },
          {
            href: "/categorias/Banheiro",
            src: "/assets/menu/8.svg",
            title: "Banheiro",
            text: "Icone de um desenho de uma pia um espelho e um vaso sanitário representando um Banheiro",
          },
          {
            href: "/categorias/Escritorio",
            src: "/assets/menu/10.svg",
            title: "Escritório",
            text: "Icone de um desenho de uma mesa de escritório representando um Escritório",
          },
        ].map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="flex flex-col items-center gap-4 group mx-4"
          >
            <Image
              src={category.src}
              alt={category.text}
              width={60}
              height={70}
              className="transition-transform duration-600 group-hover:mt-[-10px] sm:w-[60px] w-10"
            />
            <p className="text-center text-xs sm:text-base">{category.title}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MenuCategoriasProdutos;
