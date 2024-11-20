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
  const [dolar, setDolar] = useState<number>(0);
  const [euro, setEuro] = useState<number>(0);
  const [yuan, setYuan] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get<{
        USDBRL: Moeda;
        EURBRL: Moeda;
        CNYBRL: Moeda;
      }>("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL");

      setDolar(parseFloat(data.USDBRL.ask));
      setEuro(parseFloat(data.EURBRL.ask));
      setYuan(parseFloat(data.CNYBRL.ask));
    };

    fetch();
  }, []);

  return (
    <section className="w-full text-center flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Câmbio</h1>
        <h2 className="text-base">Valores retirados do dia: {currentDate}</h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:gap-48 gap-8 p-8 lg:-mt-0 -mt-12 lg:p-0">
        <Card TypeMoeda="Dólar" Valor={dolar} />
        <Card TypeMoeda="Euro" Valor={euro} />
        <Card TypeMoeda="Yuan Chinês" Valor={yuan} />
      </div>
    </section>
  );
};

export default Cambio;
