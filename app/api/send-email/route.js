import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import sendgridMail from "@sendgrid/mail";

// Configuração do SendGrid
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY); // Chave de API do SendGrid

const emailUser = process.env.EMAIL_USER; // Seu e-mail de envio

export async function GET() {
  try {
    console.log("Conectando ao banco de dados...");
    const client = await clientPromise;
    const db = client.db("barbearia");
    const collection = db.collection("formulario_portifolio");

    const fiveSecondsAgo = new Date(Date.now() - 5000);
    const pendentes = await collection.find({
      emailSent: false,
      createdAt: { $lte: fiveSecondsAgo },
    }).toArray();

    console.log(`${pendentes.length} pendentes encontrados.`);

    if (pendentes.length === 0) {
      return NextResponse.json({ message: "Nenhum e-mail pendente." });
    }

    for (const item of pendentes) {
      const msg = {
        to: emailUser, // O e-mail que irá receber os dados
        from: "wedsonsobral@gmail.com", // Endereço de e-mail verificado no SendGrid
        subject: "Novo formulário enviado!",
        html: `
          <h2 style="color: #4CAF50; font-size: 24px;">Um Novo Pedido Chegou!!</h2>

          <p style="font-size: 16px;">Você recebeu um novo Pedido:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f9f9f9; padding: 8px;">
              <th style="padding: 12px; text-align: left; font-size: 16px; color: #333; border: 1px solid #ddd;">Campo</th>
              <th style="padding: 12px; text-align: left; font-size: 16px; color: #333; border: 1px solid #ddd;">Detalhes</th>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">Nome</td>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">${item.firstname} ${item.lastname}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">Email</td>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">${item.email}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">Telefone</td>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">${item.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">Serviço</td>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">${item.service}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">Mensagem</td>
              <td style="padding: 12px; font-size: 16px; color: #555; border: 1px solid #ddd;">${item.message}</td>
            </tr>
          </table>

          <p style="font-size: 16px; margin-top: 20px;">
            <strong>Data de envio:</strong> ${new Date(item.createdAt).toLocaleString()}
          </p>

          <hr style="border: 1px solid #ddd; margin: 20px 0;" />

          <p style="font-size: 14px; color: #555;">
            <em>Este é um e-mail automatizado. Por favor, não responda.</em>
          </p>
        `,
      };

      console.log(`Enviando e-mail para ${emailUser} com os dados do formulário de ${item.firstname} ${item.lastname}`);

      try {
        // Envia o e-mail através do SendGrid
        await sendgridMail.send(msg);
        console.log("E-mail enviado com sucesso!");

        // Marcar como enviado no banco
        await collection.updateOne(
          { _id: item._id },
          { $set: { emailSent: true } }
        );
      } catch (error) {
        console.error("Erro ao enviar e-mail para", item.email, error);
      }
    }

    return NextResponse.json({ message: "E-mails processados." });

  } catch (error) {
    console.error("Erro ao enviar e-mails:", error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mails." },
      { status: 500 }
    );
  }
}
