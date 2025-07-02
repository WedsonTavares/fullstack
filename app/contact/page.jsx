"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser"; // Importe o Email.js

const info = [
  { icon: <FaPhoneAlt />, title: "Telefone", descripition: "(16) 992331680" },
  { icon: <FaEnvelope />, title: "Email", descripition: "wedsonsobral@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Endereço", descripition: "Ribeirão Preto - SP" },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid =
    form.firstname && form.lastname && form.email && form.phone && form.service && form.message;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    try {
      // Envia os dados para o backend, salvando no banco de dados
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro no envio");
      console.log("Resposta do Backend:", res); // Veja o retorno do fetch

      const data = await res.json();
      setSuccess(true);
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 4000);

      // Envia o e-mail usando o Email.js após salvar os dados
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Usando variável de ambiente pública
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Usando variável de ambiente pública
          {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Usando variável de ambiente pública
        )
        .then(
          (response) => {
            console.log("Email enviado com sucesso:", response);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 4000);
          },
          (err) => {
            console.error("Erro ao enviar o e-mail:", err);
            setError(true);
            setTimeout(() => setError(false), 4000);
          }
        );
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">vamos trabalhar juntos!</h3>
              <p className="text-white/60">
                Preencha o formulário abaixo e entrarei em contato o mais rápido possível.
              </p>

              {success && (
                <div className="p-4 bg-green-500/10 border border-green-500 text-green-400 rounded-md shadow-sm transition">
                  <p className="text-sm font-medium">
                    ✅ Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500 text-red-400 rounded-md shadow-sm transition">
                  <p className="text-sm font-medium">
                    ❌ Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Nome"
                  value={form.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Sobrenome"
                  value={form.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="w-full ">
                    <SelectLabel>Selecione um serviço</SelectLabel>
                    <SelectItem value="web">Desenvolvimento web</SelectItem>
                    <SelectItem value="app">Desenvolvimento app</SelectItem>
                    <SelectItem value="full">Desenvolvimento FullStack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Digite sua mensagem aqui..."
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40 font-bold"
                disabled={loading || !isFormValid}
              >
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
