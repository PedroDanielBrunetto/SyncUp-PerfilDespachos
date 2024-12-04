"use client";

import React from "react";

interface ICardPtax {
  TypeMoeda: string;
  Compra: number;
  Venda: number;
  DataHora: string;
}

export default function CardPtax({
  TypeMoeda,
  Compra,
  Venda,
  DataHora,
}: ICardPtax) {
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
            <p className="mt-2 text-sm text-gray-100">
              Fonte: Banco Central do Brasil
            </p>
          </div>
          <div className="mt-6">
            <p>
              <span className="lg:text-4xl text-2xl font-light tracking-tight text-white">
                Compra: R${Compra.toFixed(2)}
              </span>
            </p>
            <p>
              <span className="lg:text-4xl text-2xl font-light tracking-tight text-white">
                Venda: R${Venda.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pb-10 sm:px-8">
        {" "}
        <p className="text-white">
          <strong>Última Atualização:</strong>{" "}
          {new Date(DataHora).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
