"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="flex flex-col justify-center items-center w-full z-50 absolute">
      <ul className="flex justify-end gap-4 w-4/5 mt-12 mb-2">
        <li>
          <Link
            target="_blank"
            href="https://www.facebook.com/komodemoveisedecorados"
          >
            <Image
              src="/assets/icon/menu-icon-1.svg"
              alt="icone social"
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5521978991540&text=Ol%C3%A1%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20as%20promo%C3%A7%C3%B5es%20dispon%C3%ADveis%20para%20mim!%20Eu%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs!!"
          >
            <Image
              src="/assets/icon/menu-icon-2.svg"
              alt="icone social"
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.instagram.com/komodemd">
            <Image
              src="/assets/icon/menu-icon-3.svg"
              alt="icone social"
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
      <div
        className="flex gap-12 uppercase items-center p-1 justify-between w-4/5 border-t border-white"
        ref={menuRef}
      >
        <Link href="/">
          <Image
            src="/assets/logotipo2.png"
            alt="logotipo"
            width={80}
            height={80}
            className="w-14 sm:w-auto rounded-full"
          />
        </Link>
        <div className="relative">
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul
            className={`desktopMenu text-white ${
              menuOpen ? "open" : ""
            } flex gap-8`}
          >
            <li>
              <Link href="/">Início</Link>
            </li>
            <li className="relative subMenu">
              <p className="cursor-pointer">Produtos</p>
              <ul className="secondMenu flex-col hidden absolute">
                <li>
                  <Link href="/categorias/Sala de Estar"> Sala de Estar </Link>
                </li>
                <li>
                  <Link href="/categorias/Quarto de Casal">
                    Quarto de Casal
                  </Link>
                </li>
                <li>
                  <Link href="/categorias/Quarto de Solteiro">
                    Quarto de Solteiro
                  </Link>
                </li>
                <li>
                  <Link href="/categorias/Cozinha"> Cozinha </Link>
                </li>
                <li>
                  <Link href="/categorias/Lavanderia"> Lavanderia </Link>
                </li>
                <li>
                  <Link href="/categorias/Escritorio"> Escritorio </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          width: 30px;
          height: 25px;
          z-index: 10;
        }

        .bar1,
        .bar2,
        .bar3 {
          width: 100%;
          height: 4px;
          background-color: white;
          margin: 4px 0;
          transition: 0.4s;
        }

        .hamburger.open .bar1 {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.open .bar2 {
          opacity: 0;
        }

        .hamburger.open .bar3 {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        @media (max-width: 680px) {
          .hamburger {
            display: block;
          }

          .desktopMenu {
            display: none;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            top: 40px;
            right: 0px;
            background-color: #c91b0b;
            border-radius: 4px;
            padding: 10px;
            width: 200px;
          }

          .desktopMenu.open {
            display: flex;
          }

          .menuSocialContainer {
            display: none;
          }

          .secondMenu {
            position: absolute;
            left: -201px;
          }

          .menu {
            margin-top: 5rem;
          }

          .menu img {
            margin-top: 1rem;
            width: 50%;
            height: 50%;
          }
        }

        .desktopMenu a {
          display: inline-block;
          position: relative;
        }

        .desktopMenu a:after {
          content: "";
          display: block;
          height: 2px;
          width: 0px;
          background: #c91b0b;
          margin-top: 4px;
          transition: 0.3s;
          position: absolute;
        }

        .desktopMenu a:hover:after {
          width: 100%;
        }

        .secondMenu {
          background-color: #c91b0b;
          padding: 1rem;
          display: none;
          flex-direction: column;
          position: absolute;
          gap: 1rem;
          min-width: 200px;
          border-radius: 4px;
        }

        .subMenu:hover .secondMenu {
          display: flex;
        }
      `}</style>
    </nav>
  );
}
