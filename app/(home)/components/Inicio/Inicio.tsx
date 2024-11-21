"use client";

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

const Inicio = () => {
  return (
    <div>
      <section className="lg:w-full lg:justify-center p-8 lg:p-80 lg:-mt-56 flex flex-col lg:flex-row gap-12">
        <div className="lg:flex-1 lg:pt-16">
          <h1 className="text-xl lg:text-5xl font-semibold">
            <text className="text-primary">Seja bem-vindo</text>{" "}
            <text className="text-[#1A2631]">
              somos a Perfil Despachos,
              <br />
            </text>{" "}
            <text className="text-secondary">
              especialistas em despacho.
            </text>{" "}
          </h1>
          <div className="pt-4">
            <p className="lg:text-xl">
              Somos especializados em soluções ágeis e eficientes para o
              comércio exterior. Com uma equipe altamente qualificada,
              oferecemos suporte completo para que sua empresa realize operações
              internacionais com tranquilidade e segurança.
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
                    equipe entrará em contato com você.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ex. Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Ex. nome@email.com"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="mensagem" className="text-right">
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Se quiser, envie-nos uma mensagem para iniciarmos com pé direito!"
                      maxLength={280} // Limita o campo a 280 caracteres
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-black hover:bg-gray-900">
                    Enviar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="lg:flex-1">
          <Image src={inicioImage} alt="Inicio" />
        </div>
      </section>
      <div className="lg:-mt-56">
        <Dashboard />
      </div>
      <div className="pt-12">
        <Cambio />
      </div>
      <div className="lg:pt-32 pt-12">
        <Motivo />
      </div>
      <div className="lg:-mt-56">
        <Posicao />
      </div>
    </div>
  );
};

export default Inicio;
