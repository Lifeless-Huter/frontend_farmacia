"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CotacaoDeProdutos = () => {
  const router = useRouter();
  const handleClick = (path: string) => {
    router.push(path);
  };
  return (
    <div className={`relative m-7 flex-1 rounded-xl bg-[#d6f3e6] p-6`}>
      <button
        onClick={() => handleClick("/menu")}
        className="fixed left-10 cursor-pointer rounded-full bg-green-700 p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
      >
        <ArrowLeft size={20} color="white" />
      </button>
      <div className="mt-15 flex flex-col gap-12 rounded-3xl">
        <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
          <p className="text-3xl font-bold tracking-wide text-white">
            DIGITAÇÃO DE FALTAS
          </p>
        </button>

        <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
          <p className="text-3xl font-bold tracking-wide text-white">
            LISTAGEM DE COTAÇÃO
          </p>
        </button>

        <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
          <p className="text-3xl font-bold tracking-wide text-white">
            GERAÇÃO DE PEDIDOS
          </p>
        </button>
      </div>
      <button
        className="fixed right-6 bottom-6 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
        onClick={() => handleClick("/dashboard")}
        aria-label="Botão logo"
      >
        <Image
          width={60}
          height={60}
          src="/logo-bg-white.png"
          alt="Logo"
          className="h-10 w-10 object-contain"
        />
      </button>
    </div>
  );
};

export default CotacaoDeProdutos;
