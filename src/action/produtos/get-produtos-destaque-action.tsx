"use server";
import { token } from "@/app/api/api";
export async function getProductsDestaqueAction() {
  const response = await fetch(
    "https://apikomode.altuori.com/wp-json/api/produto?disponibilidade=sim&_limit=16&situacao=queima",
    {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  return { data };
}
