import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Komode Móveis ",
  description: "Links",
};

export default function reclamacaoPage() {
  return (
    <section className="w-full absolute z-50 h-full sm:h-screen bg-rose-200 flex flex-col items-center justify-center gap-3">
      <div className="text-center flex flex-col items-center gap-4">
        <Image
          src="/assets/logotipo.png"
          alt="logotipo"
          width={80}
          height={80}
          className="w-14 sm:w-auto rounded-full"
        />
        <h1 className="text-xl font-semibold">Komode Móveis</h1>
        <p className="font-medium">
          Fornecemos móveis de qualidade que <br /> entregam conforto e
          sofisticação
        </p>
        <div className="flex gap-3  ">
          <Link target="_blank" href="https://www.instagram.com/komodemd/">
            <Image
              src="/assets/links/10.svg"
              alt="Instagram Icon"
              width={25}
              height={25}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/komodemoveisedecorados"
          >
            <Image
              src="/assets/links/11.svg"
              alt="Facebook Icon"
              width={25}
              height={25}
            />
          </Link>

          <Link
            href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!"
            target="_blank"
          >
            <Image
              src="/assets/links/13.svg"
              alt="icone do pix"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className="bg-[url('/assets/bg-link.webp')] bg-cover bg-center w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] text-end rounded-3xl p-4 hover:scale-105 duration-200">
        <Link
          className="w-full h-full flex items-end font-bold text-xl "
          href="/"
        >
          <h1 className=" text-white">Acesse nosso site</h1>{" "}
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          target="_blank"
          href="https://www.instagram.com/komodemd/"
          className="flex items-center w-[300px] sm:w-[500px] justify-start bg-rose-100 rounded-[300px] p-2 text-lg font-medium hover:bg-rose-300 duration-200"
        >
          <Image
            src="/assets/logotipo.png"
            alt="logotipo"
            width={50}
            height={50}
            className=" rounded-full mr-20 sm:mr-40"
          />{" "}
          <h1>Instagram</h1>
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/komodemoveisedecorados"
          className="flex items-center w-[300px] sm:w-[500px] justify-start bg-rose-100 rounded-[300px] p-2 text-lg font-medium hover:bg-rose-300 duration-200"
        >
          <Image
            src="/assets/logotipo.png"
            alt="logotipo"
            width={50}
            height={50}
            className=" rounded-full mr-20 sm:mr-40"
          />{" "}
          <h1>Facebook</h1>
        </Link>
        <Link
          target="_blank"
          href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!"
          className="flex items-center w-[300px] sm:w-[500px] justify-start bg-rose-100 rounded-[300px] p-2 text-lg font-medium hover:bg-rose-300 duration-200"
        >
          <Image
            src="/assets/logotipo.png"
            alt="logotipo"
            width={50}
            height={50}
            className=" rounded-full mr-20 sm:mr-40"
          />{" "}
          <h1>Whatsapp</h1>
        </Link>
      </div>
    </section>
  );
}
