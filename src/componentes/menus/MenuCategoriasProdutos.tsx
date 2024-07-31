import Image from "next/image";
import Link from "next/link";

const MenuCategoriasProdutos = () => {
  return (
    <main>
      <div className="bg-[url('/assets/produtos/produtos-bg.jpg')] relative sm:h-[580px] h-[380px] w-full bg-cover bg-center text-white flex flex-col items-center justify-center -mt-12 sm:-mt-48 text-center px-2">
        <h1 className="text-4xl uppercase font-light mt-48">Produtos</h1>
        <p>Confira abaixo todos os produtos disponíveis em nosso estoque</p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 sm:gap-24 p-2 bg-white duration-500">
        {[
          {
            href: "/categorias/Sala de Estar",
            src: "/assets/menu/13.svg",
            text: "Sala de Estar",
          },
          {
            href: "/categorias/Quarto de Solteiro",
            src: "/assets/menu/11.svg",
            text: "Quarto de Solteiro",
          },
          {
            href: "/categorias/Quarto de Casal",
            src: "/assets/menu/12.svg",
            text: "Quarto de Casal",
          },
          {
            href: "/categorias/Cozinha",
            src: "/assets/menu/16.svg",
            text: "Cozinha",
          },
          {
            href: "/categorias/Banheiro",
            src: "/assets/menu/8.svg",
            text: "Banheiro",
          },
          {
            href: "/categorias/Escritorio",
            src: "/assets/menu/10.svg",
            text: "Escritório",
          },
          {
            href: "/categorias/Lavanderia",
            src: "/assets/menu/15.svg",
            text: "Lavanderia",
          },
        ].map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="flex flex-col items-center gap-4 group"
          >
            <Image
              src={category.src}
              alt={category.text}
              width={60}
              height={70}
              className="transition-transform duration-600 group-hover:mt-[-10px]"
            />
            <p className="text-center">{category.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MenuCategoriasProdutos;
