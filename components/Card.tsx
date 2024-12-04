"use client";

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
  Bid?: number; // Opcional para PTAX
  Ask?: number; // Opcional para PTAX
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
    <div className="flex flex-col bg-[#4167b1] rounded-3xl shadow-lg w-[480px] lg:h-[400px]">
      {" "}
      <div className="flex-1 px-12 py-16 sm:p-20 sm:pb-12">
        {" "}
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
              {TypeMoeda}
            </h2>
            <p className="mt-2 text-sm text-gray-100">Fonte: AwesomeAPI</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-white">
                R${Valor.toFixed(2)}
              </span>
              <span className="text-base font-medium text-white"> /hoje</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-6 pb-8 sm:px-8">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:ring-white text-base">
              Ver mais
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Detalhes da Cotação</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="flex flex-col gap-2 text-left">
                  <div>
                    <strong>Máxima do dia:</strong> R${High.toFixed(2)}
                  </div>
                  <div>
                    <strong>Mínima do dia:</strong> R${Low.toFixed(2)}
                  </div>
                  <div>
                    <strong>Variação:</strong> {VarBid.toFixed(2)}%
                  </div>
                  {Bid !== undefined && (
                    <div>
                      <strong>Bid:</strong> R${Bid.toFixed(2)}
                    </div>
                  )}
                  {Ask !== undefined && (
                    <div>
                      <strong>Ask:</strong> R${Ask.toFixed(2)}
                    </div>
                  )}
                  <div>
                    <strong>Data de Criação:</strong> {CreateDate}
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogCancel className="mt-4 px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              Fechar
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
