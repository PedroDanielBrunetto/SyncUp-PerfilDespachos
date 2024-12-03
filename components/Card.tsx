import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

interface ICardCambio {
  TypeMoeda: string;
  Valor: number;
  High: number;
  Low: number;
  VarBid: number;
  PctChange: number;
  Bid: number;
  Ask: number;
  Timestamp: number;
  CreateDate: string;
}

export default function Card({
  TypeMoeda,
  Valor,
  High,
  Low,
  VarBid,
  PctChange,
  Bid,
  Ask,
  Timestamp,
  CreateDate,
}: ICardCambio) {
  return (
    <div className="flex flex-col bg-[#4167b1] rounded-3xl">
      <div className="px-12 py-16 sm:p-20 sm:pb-12">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
              {TypeMoeda}
            </h2>
            <p className="mt-2 text-sm text-gray-100">
              Fonte: Banco Central do Brasil.
            </p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-white">
                R${Valor.toFixed(2)}
              </span>
              <span className="text-base font-medium text-white"> /hoje </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-6 pb-8 sm:px-8 gap-4">
        <AlertDialog>
          <AlertDialogTrigger className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-base focus-visible:ring-white">
            Ver mais
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Detalhes da Cotação</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="flex flex-col gap-2 text-left">
                  <p>
                    <strong>Máxima do dia:</strong> R${High.toFixed(2)}
                  </p>
                  <p>
                    <strong>Mínima do dia:</strong> R${Low.toFixed(2)}
                  </p>
                  <p>
                    <strong>Variação do Bid:</strong> {VarBid.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Variação Percentual:</strong> {PctChange.toFixed(2)}
                    %
                  </p>
                  <p>
                    <strong>Bid:</strong> R${Bid.toFixed(2)}
                  </p>
                  <p>
                    <strong>Ask:</strong> R${Ask.toFixed(2)}
                  </p>
                  <p>
                    <strong>Timestamp:</strong>{" "}
                    {new Date(Timestamp * 1000).toLocaleString()}
                  </p>
                  <p>
                    <strong>Data de Criação:</strong> {CreateDate}
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogCancel className="mt-4 px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              Fechar
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
        <a
          href="https://www.bcb.gov.br/estabilidadefinanceira/cotacoestodas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          Fonte
        </a>
      </div>
    </div>
  );
}
