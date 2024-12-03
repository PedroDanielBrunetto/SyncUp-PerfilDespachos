"use client";

import { useState } from "react";
import Image from "next/image";
import inicioImage from "@/public/inicio/inicioImage.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Dashboard from "./Components/Dashboard";
import Cambio from "./Components/Cambio";
import Motivo from "./Components/Motivo";
import Posicao from "./Components/Posicao";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const Inicio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://wservices-perfildespachos.vercel.app/send-email",
        {
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        }
      );

      if (response.status === 200) {
        setMessage("Mensagem enviada com sucesso!");
      } else {
        setMessage("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setMessage("Erro ao enviar mensagem.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
      }, 1500);
    }
  };

  return (
    <div>
      <section className="xl:w-full xl:justify-center p-8 xl:p-80 xl:-mt-72 flex flex-col xl:flex-row gap-12">
        <div className="xl:flex-1 xl:pt-16">
          <h1 className="text-xl xl:text-5xl font-semibold">
            <span className="text-primary">Seja bem-vindo</span>{" "}
            <span className="text-[#1A2631]">
              somos a Perfil Despachos,
              <br />
            </span>{" "}
            <span className="text-secondary">
              especialistas em
              <br /> Despacho Aduaneiro.
            </span>{" "}
          </h1>
          <div className="pt-4">
            <p className="xl:text-xl">
              Somos uma empresa especializada em comércio exterior, voltada para
              operações marítimas, aéreas, rodoviárias e multimodais, tanto para
              exportações como para importações.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 flex gap-2 bg-primary p-8 text-xl">
                  Entrar em contato <ArrowRight />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Entrar em contato</DialogTitle>
                  <DialogDescription>
                    Deixe aqui suas informações que os especialistas da nossa
                    equipe entrarão em contato com você.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="nome" className="text-right">
                        Nome
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Ex. Pedro Duarte"
                        value={formData.nome}
                        onChange={handleChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Ex. nome@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="mensagem" className="text-right">
                        Mensagem
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Se quiser, envie-nos uma mensagem para iniciarmos com pé direito!"
                        maxLength={280}
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="bg-black hover:bg-gray-900"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando..." : "Enviar"}
                    </Button>
                  </DialogFooter>
                </form>
                {message && (
                  <div
                    className={`mt-4 p-2 text-center text-black ${
                      message.includes("sucesso")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="xl:flex-1 flex justify-center">
          <Image src={inicioImage} alt="Inicio" />
        </div>
      </section>
      <div className="xl:-mt-56">
        <Dashboard />
      </div>
      <div className="pt-12">
        <Cambio />
      </div>
      <div className="xl:pt-32 pt-12">
        <Motivo />
      </div>
      <div className="xl:-mt-56">
        <Posicao />
      </div>
    </div>
  );
};

export default Inicio;
