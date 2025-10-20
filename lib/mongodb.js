import { MongoClient } from "mongodb";

const options = {
  // Forçar o uso de SSL/TLS quando apropriado (ajuste conforme seu ambiente)
  tls: true,
  tlsAllowInvalidCertificates: true,
};

let _client;
let _clientPromise;

function createClientPromise(uri) {
  if (process.env.NODE_ENV === "development") {
    // Reutiliza a promise global em desenvolvimento para evitar múltiplas conexões
    if (!global._mongoClientPromise) {
      _client = new MongoClient(uri, options);
      global._mongoClientPromise = _client.connect();
    }
    return global._mongoClientPromise;
  }

  _client = new MongoClient(uri, options);
  return _client.connect();
}

// Exporta uma função que obtém o clientPromise quando chamado.
// Isso evita lançar um erro durante import (que quebra o processo de build). A responsabilidade
// de garantir que MONGODB_URI esteja definida fica para o momento em que a conexão for realmente necessária.
export function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    // Retorna uma Promise rejeitada com uma mensagem clara quando usada sem configurar a variável
    return Promise.reject(new Error("MONGODB_URI não definida no .env"));
  }

  if (!_clientPromise) {
    _clientPromise = createClientPromise(uri);
  }

  return _clientPromise;
}

// For backward compatibility, export default the getClientPromise function itself.
// This way importing default won't evaluate a promise at import time and won't throw.
export default getClientPromise;
