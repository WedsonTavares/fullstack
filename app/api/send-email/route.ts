import { NextResponse } from "next/server";

// Vercel Cron invoca este endpoint via GET no horário definido em vercel.json
// Ajuste a lógica aqui para realizar o envio de e-mails conforme necessário.
export async function GET() {
  try {
    // TODO: Adicionar lógica real de envio (ex.: SendGrid, Nodemailer)
    // Por enquanto, retornamos 200 OK para evitar falhas no deploy.
    return NextResponse.json({ ok: true, message: "Cron ativo" }, { status: 200 });
  } catch (error) {
    console.error("Erro em /api/send-email:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
