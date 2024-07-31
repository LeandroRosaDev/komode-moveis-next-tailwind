import Image from "next/image";
import Link from "next/link";

const MenuCategorias = () => {
  return (
    <main>
      <div className="relative h-56 w-full bg-cover bg-center text-black flex flex-col items-center justify-center -mt-48"></div>
      <div className=" sm:gap-24 gap-6 flex justify-around sm:justify-evenly flex-wrap  p-4 duration-500 bg">
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
              className="transition-transform duration-600 group-hover:mt-[-10px] sm:w-[60px] w-14"
            />
            <p className="text-center text-xs sm:text-base">{category.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MenuCategorias;
