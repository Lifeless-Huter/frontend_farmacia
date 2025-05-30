"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const handleClick = (itemIndex: number) => {
    router.push(`/menu?item=${itemIndex}`);
  };
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center px-4 py-8 sm:py-0"
      style={{ backgroundImage: "url('/bg-initial-screen.png')" }}
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <button
          onClick={() => handleClick(0)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-1.png"
            alt="Tela de vendas"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-red)] group-hover:underline">
            Tela de vendas
          </p>
        </button>
        <button
          onClick={() => handleClick(1)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-2.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-green)] group-hover:underline">
            Produtos e serviços
          </p>
        </button>
        <button
          onClick={() => handleClick(2)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-3.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-red)] group-hover:underline">
            Controle de estoque
          </p>
        </button>
        <button
          onClick={() => handleClick(3)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-4.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-green)] group-hover:underline">
            Cotação online
          </p>
        </button>
        <button
          onClick={() => handleClick(4)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-5.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-red)] group-hover:underline">
            Controle de vendas
          </p>
        </button>
        <button
          onClick={() => handleClick(5)}
          className="group flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-105 focus:outline-none"
        >
          <Image
            src="/menu-item-6.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="mb-1 rounded-4xl transition duration-300"
            priority
          />
          <p className="text-center text-2xl font-bold text-[var(--color-primary-green)] group-hover:underline">
            Apoio financeiro
          </p>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
