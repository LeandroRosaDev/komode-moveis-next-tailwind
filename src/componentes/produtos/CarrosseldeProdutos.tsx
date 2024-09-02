// src/app/components/CarrosseldeProdutos.tsx

"use client";

import GetProdutosDestaque from "./GetProdutosDestaque";
import GetProdutosPromocao from "./GetProdutosPromocao";
import { useEffect, useRef } from "react";

export function CarrosseldeProdutos() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;

    if (marquee1) {
      marquee1.classList.add("animate-marquee-left");
    }
    if (marquee2) {
      marquee2.classList.add("animate-marquee-right");
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 py-20 sm:py-22 p-3">
        <GetProdutosDestaque />
      </div>
      <div className="absolute top-0 left-0 w-full bg-red-600 text-white overflow-hidden">
        <div
          ref={marquee1Ref}
          className="whitespace-nowrap flex animate-marquee-left"
        >
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white overflow-hidden">
        <div
          ref={marquee2Ref}
          className="whitespace-nowrap flex animate-marquee-right"
        >
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
          <h1 className="inline-block p-4 text-xl uppercase">
            Produtos em queima de estoque
          </h1>
        </div>
      </div>
    </section>
  );
}
