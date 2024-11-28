"use client"

import Image from "next/image";
import truck from "@/public/historia/3d-truck.png";
import aspas from "@/public/historia/aspas.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AreaClienteStory from "./Components/AreaClienteStory";
import Footer from "@/app/components/Footer";
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

const Historia = () => {
  return (
    <section className="p-8 flex justify-center flex-col items-center">
      <div className="lg:w-[1024px] shadow-lg flex rounded-md lg:flex-row flex-col bg-[#FAFAFA] p-6">
        <div className="lg:w-[600px] flex flex-col gap-2">
          <h1 className="text-2xl">Nossa História</h1>
          <p>
            Desde a nossa fundação, em 2002, o compromisso com a excelência nos
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
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-1 flex gap-2 bg-primary p-8 text-xl">
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
