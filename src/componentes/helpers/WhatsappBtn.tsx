"use client";
import Image from "next/image";
import Link from "next/link";
import whp from "../../../public/assets/whp-btn.png";

const WhatsappButton = () => {
  return (
    <Link
      href="//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Gostaria de saber mais sobre as promoções disponíveis para mim! Eu vim através do site de vocês!!"
      target="_blank"
      className="fixed bottom-2 right-5 cursor-pointer hover:opacity-80 transition-transform duration-400 transform hover:scale-105 z-20"
    >
      <Image src={whp} alt="Ícone do Whatsapp" width={50} height={50} />
    </Link>
  );
};

export default WhatsappButton;
