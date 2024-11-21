import Image from "next/image";
import truck from "@/public/historia/3d-truck.png";
import aspas from "@/public/historia/aspas.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AreaClienteStory from "./Components/AreaClienteStory";
import Footer from "@/app/components/Footer";

const Historia = () => {
  return (
    <section className="p-8 flex justify-center flex-col items-center">
      <div className="lg:w-[1024px] shadow-lg flex rounded-md lg:flex-row flex-col bg-[#FAFAFA] p-6">
        <div className="lg:w-[600px] flex flex-col gap-2">
          <h1 className="text-2xl">Nossa História</h1>
          <p>
            Desde a nossa fundação, em 1997, o compromisso com a excelência nos
            posicionou como referência no setor de comércio exterior. Começamos
            com uma pequena equipe e grandes sonhos, sempre focados em entender
            as necessidades dos nossos clientes e entregar soluções
            personalizadas.
          </p>
          <p>
            Ao longo dos anos, investimos em tecnologia, inovação e formação
            contínua da nossa equipe, acompanhando as constantes mudanças no
            mercado global. Hoje, temos orgulho de ser parceiros estratégicos de
            diversas empresas que confiam na nossa expertise para alcançar novos
            horizontes.
          </p>
          <div className="flex items-center lg:gap-4 gap-2">
            <Image src={aspas} alt="Aspas" />
            <div className="flex flex-col">
              <span className="text-xs font-medium">
                JOÃO WELLINGTON ISIDIO JANUARIO
              </span>
              <span className="text-xs font-normal">Fundador</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={truck} alt="Truck-Historia" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-12">
        <span className="text-sm text-[#04195B] font-medium">
          Gostou da Perfil?
        </span>
        <Button className="mt-1 flex gap-2 bg-primary p-8 text-xl">
          Entrar em contato <ArrowRight />
        </Button>
      </div>
      <div className="p-12">
        <Footer />
      </div>
      <div>
        <AreaClienteStory />
      </div>
    </section>
  );
};

export default Historia;
