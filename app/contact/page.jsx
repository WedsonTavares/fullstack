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
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function isValidEmail(email) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

  const isFormValid =
    form.firstname.trim().length > 1 &&
    form.lastname.trim().length > 1 &&
    isValidEmail(form.email) &&
    form.phone.trim().length > 7 &&
    form.service.trim().length > 1 &&
    form.message.trim().length > 5;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
    setSubmitted(false);
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
    setTouched({ ...touched, service: true });
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);
    setSubmitted(true);

    // Validação extra antes do envio
    if (!isFormValid) {
      setError(true);
      setLoading(false);
      return;
    }

    let emailSent = false;
    let dbSaved = false;

    // Tenta enviar o e-mail via EmailJS
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          firstname: form.firstname.trim(),
          lastname: form.lastname.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service.trim(),
          message: form.message.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      emailSent = true;
    } catch (err) {
      emailSent = false;
    }

    // Sempre tenta salvar no MongoDB
    try {
      await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.firstname.trim(),
          lastname: form.lastname.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service.trim(),
          message: form.message.trim(),
        }),
      });
      dbSaved = true;
    } catch (err) {
      dbSaved = false;
    }

    // Feedback para o usuário
    if (emailSent && dbSaved) {
      setSuccess(true);
      setTouched({});
      setSubmitted(false);
    } else {
      setError(true);
    }
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 4000);
    setLoading(false);
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
                {(touched.firstname || submitted) && !success && form.firstname.trim().length <= 1 && (
                  <span className="text-xs text-red-400">Digite seu nome.</span>
                )}
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Sobrenome"
                  value={form.lastname}
                  onChange={handleChange}
                />
                {(touched.lastname || submitted) && !success && form.lastname.trim().length <= 1 && (
                  <span className="text-xs text-red-400">Digite seu sobrenome.</span>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {(touched.email || submitted) && !success && !isValidEmail(form.email) && (
                  <span className="text-xs text-red-400">Digite um e-mail válido.</span>
                )}
                <Input
                  type="text"
                  name="phone"
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {(touched.phone || submitted) && !success && form.phone.trim().length <= 7 && (
                  <span className="text-xs text-red-400">Digite seu telefone completo.</span>
                )}
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
              {(touched.service || submitted) && !success && form.service.trim().length <= 1 && (
                <span className="text-xs text-red-400">Selecione um serviço.</span>
              )}

              <Textarea
                className="h-[200px]"
                placeholder="Digite sua mensagem aqui..."
                name="message"
                value={form.message}
                onChange={handleChange}
              />
              {(touched.message || submitted) && !success && form.message.trim().length <= 5 && (
                <span className="text-xs text-red-400">Digite uma mensagem mais detalhada.</span>
              )}

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
