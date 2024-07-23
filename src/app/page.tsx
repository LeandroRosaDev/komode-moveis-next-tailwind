"use client";
import { ButtonBack } from "@/componentes/helpers/BtnBack";
import MenuCategorias from "@/componentes/menus/MenuCategorias";
import GetProdutosDestaque from "@/componentes/produtos/GetProdutosDestaque";

export default function Home() {
  return (
    <main>
      <MenuCategorias />
      <GetProdutosDestaque />
    </main>
  );
}
