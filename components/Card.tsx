interface ICardCambio {
  TypeMoeda: String;
  Valor: Number;
}

export default function Card({ TypeMoeda, Valor }: ICardCambio) {
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
      <div className="flex px-6 pb-8 sm:px-8">
        <a
          aria-describedby="tier-starter"
          className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-base focus-visible:ring-white"
          href="https://www.bcb.gov.br/estabilidadefinanceira/cotacoestodas"
        >
          Fonte
        </a>
      </div>
    </div>
  );
}
