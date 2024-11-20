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
      <section className="lg:w-full lg:justify-center p-4 lg:p-80 lg:-mt-72 flex flex-col lg:flex-row gap-12 items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 p-4">
          <div className="flex flex-col gap-2 max-w-80 pt-6">
            <Image src={logistica} alt="logistica" />
            <h1 className="text-black font-semibold">Logística integrada</h1>
            <p className="text-[#04195B]">
              Planejamento e execução do transporte internacional, garantindo a
              entrega dentro do prazo.
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-80 pt-6">
            <Image src={money} alt="logistica" />
            <h1 className="text-black font-semibold">Despacho Aduaneiro</h1>
            <p className="text-[#04195B]">
              Acompanhamento do processo junto à Receita Federal e demais órgãos
              reguladores para liberação da mercadoria.
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-80 pt-6">
            <Image src={world} alt="logistica" />
            <h1 className="text-black font-semibold">Registro da Declaração</h1>
            <p className="text-[#04195B]">
              Preenchimento e envio da Declaração de Importação (DI) ou
              Declaração de Exportação (DU-E).
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-80 pt-6">
            <Image src={money} alt="logistica" />
            <h1 className="text-black font-semibold">Controle Tributário</h1>
            <p className="text-[#04195B]">
              Cálculo e acompanhamento do pagamento de tributos, como ICMS, IPI
              e PIS/COFINS.
            </p>
          </div>
        </div>
        <div className="lg:flex-2">
          <Image src={clientePerfil} width={560} alt="cliente" />
        </div>
      </section>
    </div>
  );
};

export default Motivo;
