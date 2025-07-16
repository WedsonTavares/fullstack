import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

function timeoutAfter(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout ao conectar com MongoDB")), ms)
  );
}

function sanitizeString(str, maxLength = 100) {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>?/gm, "").trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Sanitização e validação dos campos
    const firstname = sanitizeString(data.firstname, 50);
    const lastname = sanitizeString(data.lastname, 50);
    const email = sanitizeString(data.email, 100);
    const phone = sanitizeString(data.phone, 30);
    const service = sanitizeString(data.service, 30);
    const message = sanitizeString(data.message, 500);

    if (!firstname || !email || !service || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Dados inválidos ou incompletos." },
        { status: 400 }
      );
    }

    // Conexão com MongoDB com timeout
    const client = await Promise.race([
      clientPromise,
      timeoutAfter(9000),
    ]);

    const db = client.db("barbearia");
    const collection = db.collection("formulario_portifolio");

    // Salva dados no banco
    await collection.insertOne({
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
      emailSent: false,
    });

    return NextResponse.json({
      message: "Formulário enviado com sucesso!",
    });

  } catch (error) {
    // Log detalhado para depuração
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar o formulário.", details: String(error) },
      { status: 500 }
    );
  }
};
