"use client"

import Image from "next/image";
import areaClienteStory from "@/public/historia/areaClienteLogin.png";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const AreaClienteStory = () => {
  return (
    <article className="bg-white p-6 flex justify-between items-center lg:flex-row flex-col w-screen -mb-36">
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-start lg:pl-80">
        <Image
          src={areaClienteStory}
          alt="Login"
          width={424}
          className=""
        />
      </div>

      <div className="lg:w-1/2 w-full flex flex-col items-start lg:items-end lg:text-right gap-4 lg:pr-80">
        <h2 className="text-black text-lg">
          Já é nosso cliente? Acesse nosso sistema para acompanhar a situação de
          suas demandas.
        </h2>
        <Button className="bg-secondary hover:bg-red-800 flex items-center gap-2">
          Área do Cliente <LogIn />
        </Button>
      </div>
    </article>
  );
};

export default AreaClienteStory;
