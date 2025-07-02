// lib/webhook.js
import crypto from "crypto";

export function verifyWebhookSignature(signature, payload) {
  const secret = process.env.WEBHOOK_SECRET; // A chave secreta que você configurou
  const hash = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(payload))
    .digest("hex");

  return hash === signature;
}
