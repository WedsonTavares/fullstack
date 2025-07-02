import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {

  tls: true, // Forçar o uso de SSL/TLS
  tlsAllowInvalidCertificates: true, // Permitir certificados inválidos (caso necessário)
};

let client;
let clientPromise;

if (!uri) {
  throw new Error("MONGODB_URI não definida no .env");
}

if (process.env.NODE_ENV === "development") {
  // Em desenvolvimento, reutiliza a conexão do MongoDB
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, cria uma nova conexão
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// A exportação de clientPromise será usada nas rotas para acessar o MongoDB
export default clientPromise;
