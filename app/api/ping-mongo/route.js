import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db().command({ ping: 1 });

    return NextResponse.json({ message: "MongoDB está ativo." });
  } catch (error) {
    console.error("Erro ao pingar Mongo:", error);
    return NextResponse.json({ error: "Erro ao conectar com MongoDB" }, { status: 500 });
  }
}
