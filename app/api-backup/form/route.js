// app/api/form/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

function timeoutAfter(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout ao conectar com MongoDB")), ms)
  );
}

export async function POST(request) {
  try {
    console.log("📨 Requisição recebida");
    const data = await request.json();

    if (!data.firstname || !data.email || !data.service) {
      return NextResponse.json(
        { error: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    const client = await Promise.race([
      clientPromise,
      timeoutAfter(9000),
    ]);

    const db = client.db("barbearia");
    const collection = db.collection("formulario_portifolio");

    await collection.insertOne({
      ...data,
      createdAt: new Date(),
      emailSent: false,
    });

    console.log("✅ Dados salvos no MongoDB");

    return NextResponse.json({
      message: "Formulário enviado com sucesso!",
    });

  } catch (error) {
    console.error("❌ Erro ao processar:", error);
    return NextResponse.json(
      { error: "Erro interno." },
      { status: 500 }
    );
  }
}
