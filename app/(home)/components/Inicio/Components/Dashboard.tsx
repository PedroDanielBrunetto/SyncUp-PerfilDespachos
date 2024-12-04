"use client";

import Image from "next/image";
import quinze from "@/public/numeros/15+.png";
import dezmil from "@/public/numeros/10,000+.png";
import cinquenta from "@/public/numeros/50+.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center bg-[#F2FAFF] p-10 lg:p-20 gap-10 lg:gap-20">
      <div className="flex flex-col items-center">
        {/* <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          10.000+
        </h1> */}
        <Image src={dezmil} alt="10,000+" />
        <p className="text-sm text-[#6D6D6D] lg:pt-[8px] pt-2 text-center">
          Documentos emitidos
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          500+
        </h1> */}
        <Image src={cinquenta} alt="50+" />
        <p className="text-sm text-[#6D6D6D] lg:pt-[14px] pt-2 text-center">
          Clientes atendidos
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          50+
        </h1> */}
        <Image src={quinze} alt="15+" />
        <p className="text-sm text-[#6D6D6D] lg:pt-[14px] pt-2 text-center">
          Despachos mensais
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
