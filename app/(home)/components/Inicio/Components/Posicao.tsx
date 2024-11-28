"use client"

import mapa from "@/public/inicio/mapa.png";
import Image from "next/image";

const Posicao = () => {
  return (
    <section className="w-full bg-[#4267B2] p-12">
      <div className="flex flex-col justify-center w-full">
        <div className="lg:px-56 flex flex-col gap-2">
          <h1 className="text-2xl text-white text-center">
            Estratégicamente Localizados no Maior Porto da América Latina
          </h1>
          <h2 className="text-white text-center text-sm">
            Estamos em Santos, no coração do maior porto da América Latina e o
            mais importante do Brasil. Com uma posição estratégica e
            infraestrutura de ponta, o Porto de Santos é a principal porta de
            entrada e saída do comércio exterior brasileiro, movimentando
            bilhões de dólares em mercadorias todos os anos.
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center pt-6">
        <Image src={mapa} width={800} alt="mapa" />
      </div>
    </section>
  );
};

export default Posicao;
