"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        setIsMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full flex items-center lg:justify-around lg:p-0 justify-between p-4 pr-8 shadow-sm bg-white">
      <div className="lg:py-4">
        <Image
          src={Logo}
          width={320}
          height={36}
          alt="Logo"
          className="h-auto w-[240px] lg:w-[320px]"
        />
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-black hover:text-primary"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Menu (Mobile) */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-full bg-white flex items-center justify-center transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-black hover:text-primary"
        >
          <X size={28} />
        </button>
        <ul className="flex flex-col items-center gap-6">
          <li>
            <a
              href="#inicio"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#story"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              História
            </a>
          </li>
          <li className="flex flex-col gap-4 mt-6">
            <Button
              variant="link"
              className="text-black text-lg hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Área do Cliente
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-2 bg-primary">
                  Entrar em contato <ArrowRight />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Entrar em contato</DialogTitle>
                  <DialogDescription>
                    Deixe aqui suas informações que os especialistas da nossa
                    equipe entrará em contato com você.
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
                        maxLength={280} // Limita o campo a 280 caracteres
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
                      disabled={isLoading} // Desabilita o botão enquanto carrega
                    >
                      {isLoading ? "Enviando..." : "Enviar"}{" "}
                      {/* Texto condicional */}
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
          </li>
        </ul>
      </nav>

      {/* Navigation Menu and Buttons (Desktop Only) */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="lg:flex lg:gap-6">
          <li>
            <a href="#inicio" className="text-md hover:text-primary">
              Início
            </a>
          </li>
          <li>
            <a href="#services" className="text-md hover:text-primary">
              Serviços
            </a>
          </li>
          <li>
            <a href="#story" className="text-md hover:text-primary">
              História
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex lg:items-center">
        <Button variant="link" className="text-black hover:font-bold">
          Área do Cliente
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex gap-2 bg-primary">
              Entrar em contato <ArrowRight />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Entrar em contato</DialogTitle>
              <DialogDescription>
                Deixe aqui suas informações que os especialistas da nossa equipe
                entrará em contato com você.
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
                  message.includes("sucesso") ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
