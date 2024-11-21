import Image from "next/image";
import syncup from "@/public/syncup_logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary rounded-lg shadow-md rounded-b-lg lg:w-auto w-[280px]">
      <footer className="flex flex-col lg:flex-row justify-center p-8 lg:p-20 items-center gap-8">
        <div className="lg:w-1/3">
          <nav>
            <h1 className="text-center text-white text-xl font-medium mb-4">
              Perfil Despachos
            </h1>
            <ul className="flex flex-col items-center space-y-2 lg:space-y-4">
              <li>
                <a
                  href="#inicio"
                  className="text-md text-white hover:underline"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-md text-white hover:underline"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a href="#story" className="text-md text-white hover:underline">
                  História
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center">
          <h1 className="text-white mb-4">Desenvolvido por:</h1>
          <Link href={"https://syncupbrasil.tech/"}>
            <Image
              src={syncup}
              width={200}
              alt="SyncUp Brasil"
              className="mx-auto"
            />
          </Link>
        </div>
      </footer>
      <div className="bg-primary pb-6 rounded-b-lg">
        <p className="text-white text-center text-sm md:text-base">
          Endereço: R. Martim Affonso, 38 - Centro, Santos - SP, 11010-060
        </p>
        <p className="text-white text-center text-sm md:text-base">
          Telefone: (13) 3223-5064
        </p>
        <p className="text-white text-center text-xs pt-2">
          Copyright © 2025 Perfil Despachos CNPJ: 05.631.543/0001-20
        </p>
      </div>
    </div>
  );
};

export default Footer;
