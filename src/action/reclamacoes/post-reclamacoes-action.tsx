"use server";
import { token } from "@/app/api/api";

export async function postReclamacaoAction(formData: FormData) {
  try {
    const response = await fetch(
      "https://apikomode.altuori.com/wp-json/api/reclamacao",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );
  } catch (error) {
    console.error("Erro durante o envio da Reclamação:", error);
    throw error;
  }
}
