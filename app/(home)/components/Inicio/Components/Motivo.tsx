"use client";

import clientePerfil from "@/public/inicio/clientePerfil.png";
import logistica from "@/public/inicio/logistica.png";
import money from "@/public/inicio/money.png";
import world from "@/public/inicio/world.png";
import Image from "next/image";

const Motivo = () => {
  return (
    <div>
      <h1 className="text-4xl text-[#1A2631] text-center">
        Por que ser cliente <text className="text-[#4D65FF]">Perfil?</text>
      </h1>
      <section className="xl:w-full xl:justify-center p-4 xl:p-80 xl:-mt-72 flex flex-col items-center">
        <div className="grid xl:grid-cols-2 grid-cols-1 p-4 gap-0 xl:gap-10">
          {[
            {
              image: logistica,
              alt: "Log",
              title: "Logística integrada",
              text: "Planejamento e execução do transporte internacional, garantindo a entrega dentro do prazo.",
            },
            {
              image: money,
              alt: "Despacho",
              title: "Despacho Aduaneiro",
              text: "Acompanhamento do processo junto à Receita Federal e demais órgãos reguladores para liberação da mercadoria.",
            },
            {
              image: world,
              alt: "DUE",
              title: "Operações de Embarque",
              text: "Reserva de praça em navios de sua preferência, ou naqueles que atendam as exigências de segurança e regularidade.",
            },
            {
              image: money,
              alt: "Controle Tributário",
              title: "Controle Tributário",
              text: "Cálculo e acompanhamento do pagamento de tributos, como ICMS, IPI e PIS/COFINS.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 xl:p-6 mb-6 xl:mb-0 border-b border-gray-200 last:border-b-0 xl:border-b-0"
            >
              <Image src={item.image} alt={item.alt} width={64} height={64} />
              <h1 className="text-black font-semibold mt-2">{item.title}</h1>
              <p className="text-[#04195B] mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <div>
          <Image src={clientePerfil} alt="cliente" />
        </div>
      </section>
    </div>
  );
};

export default Motivo;
