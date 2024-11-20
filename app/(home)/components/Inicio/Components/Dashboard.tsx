"use client";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center bg-[#F2FAFF] p-10 lg:p-20 gap-10 lg:gap-20">
      <div className="flex flex-col items-center">
        <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          10.000+
        </h1>
        <p className="text-sm text-[#6D6D6D] mt-2 text-center">
          Documentos emitidos
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          500+
        </h1>
        <p className="text-sm text-[#6D6D6D] mt-2 text-center">
          Clientes atendidos
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-transparent bg-gradient-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-4xl lg:text-6xl font-semibold text-center">
          50+
        </h1>
        <p className="text-sm text-[#6D6D6D] mt-2 text-center">
          Despachos mensais
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
