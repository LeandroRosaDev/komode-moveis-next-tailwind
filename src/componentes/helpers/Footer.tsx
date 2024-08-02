import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <section className="flex flex-col w-4/5 justify-around items-center mx-auto pt-16 gap-16">
        <div className="flex sm:justify-between justify-center text-center  items-center gap-24 w-full flex-wrap">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase text-red-600">
              Visite nosso show room
            </h1>
            <p className="text-gray-100">
              Rua Pires do rio nº509 São João de Meriti, RJ
            </p>
            <p className="text-gray-100">
              Seg - De: 08 as: 18 pm | Sáb: 08 am - 12 pm
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              target="_blank"
              className="buttonTransparent flex items-center gap-2 text-white border p-4 text-center hover:text-black hover:bg-white duration-500"
              href="https://www.google.com/maps/place/AL+M%C3%B3veis+e+Estofados/@-22.7869933,-43.3969211,21z/data=!4m20!1m13!4m12!1m4!2m2!1d-43.3946624!2d-22.7835904!4e1!1m6!1m2!1s0x99643b2a103ebb:0xd822b89acf0de156!2sjm+rodrigues!2m2!1d-43.3967886!2d-22.7872351!3m5!1s0x996569cf804ddb:0xbf605c5e51e6ef5c!8m2!3d-22.7869932!4d-43.3966233!16s%2Fg%2F11fltq5wrn?entry=ttu"
            >
              <Image
                src="/assets/icon/location.svg"
                width={20}
                height={20}
                alt="Icone que respresenta um gps indicando uma localização"
              />
              Encontre-nos
            </Link>
            <div className="flex gap-2">
              <Image
                src="/assets/icon/Phone.svg"
                width={30}
                height={30}
                alt="Icone de um telefone"
              />
              <a
                href="tel:+5521978991540"
                className="text-red-600 text-xl font-bold"
              >
                (21)9 7899-1540
              </a>
            </div>
          </div>
        </div>
        <hr className="w-full text-white opacity-30" />
        <div className="flex sm:justify-between justify-center text-center sm:text-start items-center gap-12 sm:gap-24 w-full flex-wrap">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl uppercase text-red-600">Encontre Aqui</h1>
            <Link className="text-gray-100 font-semibold" href="/">
              Inicio
            </Link>
            <Link className="text-gray-100 font-semibold" href="/produtos">
              Produtos
            </Link>
            <Link className="text-gray-100 font-semibold" href="/produtos">
              Categorias
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl uppercase text-red-600">Links Diretos</h1>
            <Link className="text-gray-100 font-semibold" href="/sobre">
              Sobre
            </Link>
            <Link className="text-gray-100 font-semibold" href="/contato">
              Contato
            </Link>
            <Link className="text-gray-100 font-semibold" href="/duvidas">
              Dúvidas
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl uppercase text-red-600">
              Política da loja
            </h1>
            <Link className="text-gray-100 font-semibold" href="/politicas">
              Trocas
            </Link>
            <Link className="text-gray-100 font-semibold" href="/politicas">
              Garantia
            </Link>
            <Link className="text-gray-100 font-semibold" href="/reclame-aqui">
              Reclame Aqui
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 p-2 bg-black text-white mt-4">
        <div className="flex gap-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/komodemoveisedecorados"
          >
            <Image
              src="/assets/footer-social-1.png"
              alt="Ícone do facebook"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-400"
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/komodemd/">
            <Image
              src="/assets/footer-social-2.png"
              alt="Ícone do Instagram"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-400"
            />
          </Link>
          <Link
            target="_blank"
            href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!"
          >
            <Image
              src="/assets/footer-social-3.png"
              alt="Ícone do whatsapp"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-400"
            />
          </Link>
        </div>
        <div className="flex flex-col text-center">
          <p>Todos os direitos reservados.</p>
          <p>
            Esta é uma empresa do{" "}
            <Link
              href="https://altuori.com/"
              className="font-bold"
              target="_blank"
            >
              Grupo Altuori
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
