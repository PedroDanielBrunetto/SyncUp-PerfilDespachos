"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import axios from "axios";

type Moeda = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

const Cambio = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [dolarData, setDolarData] = useState<Moeda | null>(null);
  const [euroData, setEuroData] = useState<Moeda | null>(null);
  const [yuanData, setYuanData] = useState<Moeda | null>(null);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get<{
          USDBRL: Moeda;
          EURBRL: Moeda;
          CNYBRL: Moeda;
        }>("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL");

        setDolarData(data.USDBRL);
        setEuroData(data.EURBRL);
        setYuanData(data.CNYBRL);
      } catch (error) {
        console.error("Erro ao buscar os dados de câmbio:", error);
      }
    };

    fetch();
  }, []);

  if (!dolarData || !euroData || !yuanData) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="w-full text-center flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-[#1A2631]">Câmbio</h1>
        <h2 className="text-base">Valores retirados do dia: {currentDate}</h2>
      </div>
      <div className="flex xl:flex-row flex-col xl:gap-2 gap-8 justify-around p-8 xl:mx-24 xl:-mt-0 -mt-12 xl:p-0">
        <Card
          TypeMoeda={"Dólar"}
          Valor={parseFloat(dolarData.ask)}
          High={parseFloat(dolarData.high)}
          Low={parseFloat(dolarData.low)}
          VarBid={parseFloat(dolarData.varBid)}
          PctChange={parseFloat(dolarData.pctChange)}
          Bid={parseFloat(dolarData.bid)}
          Ask={parseFloat(dolarData.ask)}
          Timestamp={parseInt(dolarData.timestamp)}
          CreateDate={dolarData.create_date}
        />
        <Card
          TypeMoeda={"Euro"}
          Valor={parseFloat(euroData.ask)}
          High={parseFloat(euroData.high)}
          Low={parseFloat(euroData.low)}
          VarBid={parseFloat(euroData.varBid)}
          PctChange={parseFloat(euroData.pctChange)}
          Bid={parseFloat(euroData.bid)}
          Ask={parseFloat(euroData.ask)}
          Timestamp={parseInt(euroData.timestamp)}
          CreateDate={euroData.create_date}
        />
        <Card
          TypeMoeda={"Yuan Chinês"}
          Valor={parseFloat(yuanData.ask)}
          High={parseFloat(yuanData.high)}
          Low={parseFloat(yuanData.low)}
          VarBid={parseFloat(yuanData.varBid)}
          PctChange={parseFloat(yuanData.pctChange)}
          Bid={parseFloat(yuanData.bid)}
          Ask={parseFloat(yuanData.ask)}
          Timestamp={parseInt(yuanData.timestamp)}
          CreateDate={yuanData.create_date}
        />
      </div>
    </section>
  );
};

export default Cambio;
