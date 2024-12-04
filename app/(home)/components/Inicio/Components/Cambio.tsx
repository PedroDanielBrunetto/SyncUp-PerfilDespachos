"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import CardPtax from "@/components/CardPtax";

type Moeda = {
  code: string;
  name: string;
  high: string;
  low: string;
  bid: string;
  ask: string;
  pctChange: string;
  timestamp: string;
  create_date: string;
};

type MoedaPtax = {
  cotacaoCompra: number;
  cotacaoVenda: number;
  dataHoraCotacao: string;
};

const fetchPtaxData = async (): Promise<MoedaPtax | null> => {
  try {
    const today = new Date();
    const day = String(today.getUTCDate()).padStart(2, "0");
    const month = String(today.getUTCMonth() + 1).padStart(2, "0");
    const year = today.getUTCFullYear();
    const formattedDate = `${month}-${day}-${year}`;

    const { data } = await axios.get(
      `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formattedDate}'&$format=json`
    );
    return data.value[0] || null;
  } catch (error) {
    console.error("Erro ao buscar dados do PTAX:", error);
    return null;
  }
};

const fetchAwesomeApiData = async (): Promise<{
  euro: Moeda | null;
  dolar: Moeda | null;
}> => {
  try {
    const { data } = await axios.get<{
      EURBRL: Moeda;
      USDBRL: Moeda;
    }>("https://economia.awesomeapi.com.br/last/EUR-BRL,USD-BRL");

    return {
      dolar: data.USDBRL,
      euro: data.EURBRL,
    };
  } catch (error) {
    console.error("Erro ao buscar dados do AwesomeAPI:", error);
    return { euro: null, dolar: null };
  }
};

const Cambio = () => {
  const [dolarPtax, setDolarPtax] = useState<MoedaPtax | null>(null);
  const [moedas, setMoedas] = useState<{
    euro: Moeda | null;
    dolar: Moeda | null;
  }>({ euro: null, dolar: null });

  useEffect(() => {
    const fetchData = async () => {
      const [ptaxData, awesomeApiData] = await Promise.all([
        fetchPtaxData(),
        fetchAwesomeApiData(),
      ]);
      setDolarPtax(ptaxData);
      setMoedas(awesomeApiData);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full text-center flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl text-[#1A2631]">Câmbio</h1>
        <h2 className="text-base">Valores do dia</h2>
      </header>
      <div className="flex flex-wrap gap-8 justify-center p-8">
        {dolarPtax && (
          <CardPtax
            TypeMoeda="Dólar PTAX"
            Compra={dolarPtax.cotacaoCompra}
            Venda={dolarPtax.cotacaoVenda}
            DataHora={dolarPtax.dataHoraCotacao}
          />
        )}
        {Object.entries(moedas)
          .filter(([, moeda]) => moeda !== null)
          .map(([key, moeda]) => (
            <Card
              key={key}
              TypeMoeda={moeda!.name}
              Valor={parseFloat(moeda!.ask)}
              High={parseFloat(moeda!.high)}
              Low={parseFloat(moeda!.low)}
              VarBid={parseFloat(moeda!.pctChange)}
              PctChange={parseFloat(moeda!.pctChange)}
              Bid={parseFloat(moeda!.bid)}
              Ask={parseFloat(moeda!.ask)}
              Timestamp={parseInt(moeda!.timestamp)}
              CreateDate={moeda!.create_date}
            />
          ))}
      </div>
    </section>
  );
};

export default Cambio;
