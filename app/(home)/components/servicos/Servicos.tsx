"use client";

import caminhao from "@/public/servicos/caminhao.png";
import doc from "@/public/servicos/doc.jpg";
import navio from "@/public/servicos/navio.png";
import Image from "next/image";

const Servicos = () => {
  return (
    <section className="p-8 bg-[#EFF4F6]">
      <div>
        <h1 className="text-center text-2xl text-[#1A2631] font-semibold">
          Nossos Serviços
        </h1>
      </div>
      <div className="flex flex-col items-center pt-12 gap-8 lg:gap-12">
        <article className="flex flex-col items-center lg:flex-row lg:gap-12 gap-4 max-w-[1024px]">
          <Image src={caminhao} width={600} alt="caminhão" />
          <div>
            <h2 className="text-lg text-[#1A2631]">Transporte de Carga</h2>
            <p className="text-sm">
              O transporte de carga é uma parte essencial da cadeia logística
              global, garantindo que mercadorias sejam movimentadas de maneira
              eficiente e segura entre diferentes pontos do planeta. Seja por
              via marítima, aérea ou terrestre, os serviços de transporte de
              carga desempenham um papel crucial na economia global,
              possibilitando a distribuição de produtos de diversos setores
              industriais.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center lg:flex-row lg:gap-12 gap-4 max-w-[1024px]">
          <div>
            <h2 className="text-lg text-[#1A2631]">Despacho Aduaneiro</h2>
            <p className="text-sm">
              O despacho aduaneiro é um processo fundamental para a liberação de
              mercadorias importadas ou exportadas em conformidade com as
              regulamentações internacionais e locais. Envolve a preparação de
              documentação necessária, o pagamento de impostos e tarifas, e a
              inspeção das mercadorias pelas autoridades aduaneiras.
              Profissionais especializados em despacho aduaneiro garantem que
              todos os requisitos legais sejam atendidos, minimizando riscos e
              evitando atrasos.
            </p>
          </div>
          <Image
            src={doc}
            width={420}
            className="rounded-[20px]"
            alt="Documentos"
          />
        </article>
        <article className="flex flex-col items-center lg:flex-row lg:gap-12 gap-4 max-w-[1024px]">
          <Image src={navio} width={420} alt="Navio" />
          <div>
            <h2 className="text-lg text-[#1A2631]">Importação e Exportação</h2>
            <p className="text-sm">
              A importação e exportação são processos essenciais para o comércio
              internacional. A importação envolve trazer produtos ou mercadorias
              de outros países para atender à demanda local, abrangendo etapas
              como negociação com fornecedores estrangeiros, transporte,
              desembaraço aduaneiro e entrega. Já a exportação consiste em
              enviar bens ou serviços produzidos internamente para mercados
              externos, contribuindo para o crescimento econômico e a geração de
              receita. Ambas as práticas permitem a diversificação de produtos,
              o acesso a tecnologias ou recursos não disponíveis localmente e a
              expansão de mercados para as empresas, fortalecendo as relações
              comerciais globais.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Servicos;
