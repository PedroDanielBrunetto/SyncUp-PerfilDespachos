"use client";

import Image from "next/image";
import inicioImage from "@/public/inicio/inicioImage.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Dashboard from "./Components/Dashboard";
import Cambio from "./Components/Cambio";
import Motivo from "./Components/Motivo";
import Posicao from "./Components/Posicao";

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
            <Button className="mt-4 flex gap-2 bg-primary p-8 text-xl">
              Entrar em contato <ArrowRight />
            </Button>
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
