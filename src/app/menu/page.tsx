"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useMenuSelectStore } from "@/store/menuSelectStore";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { selectedMenu, setSelectedMenu } = useMenuSelectStore();

  useEffect(() => {
    const itemParam = searchParams.get("item");
    if (itemParam) {
      setSelectedMenu(itemParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedMenu]);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("item", selectedMenu.toString());
    router.replace(`/menu?${currentParams.toString()}`);
  }, [selectedMenu, router]);

  const isRedBackground = ["0", "2", "4"].includes(selectedMenu);
  const mainBgColor = isRedBackground ? "bg-[#ffa5a5]" : "bg-[#d6f3e6]";

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen bg-[var(--color-bg)]">
      {/* Menu Lateral fixo */}
      <div className="flex w-[100px] flex-col items-center gap-6 bg-white py-6 shadow-md">
        {[
          "/menu-item-1.png",
          "/menu-item-2.png",
          "/menu-item-3.png",
          "/menu-item-4.png",
          "/menu-item-5.png",
          "/menu-item-6.png",
        ].map((src, index) => {
          const isActive = selectedMenu === index.toString();
          return (
            <div
              key={index}
              onClick={() => setSelectedMenu(index.toString())}
              className="relative cursor-pointer transition hover:scale-110"
            >
              {isActive && (
                <div className="absolute top-1/2 left-[-10px] h-6 w-2 -translate-y-1/2 rounded bg-[#38c77f]" />
              )}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full transition ${
                  isActive ? "bg-[#a0f0c5]" : "bg-[#d6f3e6]"
                }`}
              >
                <Image
                  src={src}
                  alt={`icon-${index}`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Área Principal (vermelha) */}
      <div className={`relative m-7 flex-1 rounded-xl ${mainBgColor} p-6`}>
        {/* Conteúdo condicional com base no menu selecionado */}
        {selectedMenu === "0" && (
          <>
            <div className="text-xl font-semibold text-red-800">
              Tela de vendas
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button
                onClick={() => handleClick("/vendas/pdv")}
                className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  TELA DE VENDAS - PDV
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  TELA DE VENDAS - TOTEM
                </p>
              </button>
            </div>
          </>
        )}
        {selectedMenu === "1" && (
          <>
            <div className="text-xl font-semibold text-green-800">
              Produtos e serviços
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button
                onClick={() => handleClick("/produtos/produtos")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  PRODUTOS
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  DEFINIÇÃO DE PROMOÇÕES
                </p>
              </button>

              <button
                onClick={() => handleClick("/produtos/cadastro")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  CADASTRAR PRODUTO
                </p>
              </button>
            </div>
          </>
        )}
        {selectedMenu === "2" && (
          <>
            <div className="text-xl font-semibold text-red-800">
              Controle de estoque
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  ENTRADA DE NOTAS FISCAIS
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  GERENCIAMENTO DE ESTOQUE
                </p>
              </button>
            </div>
          </>
        )}
        {selectedMenu === "3" && (
          <>
            <div className="text-xl font-semibold text-green-800">
              Cotação online
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button
                onClick={() => handleClick("/cotacao/cotacao-de-produtos")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  COTAÇÃO DE PRODUTOS
                </p>
              </button>

              <button
                onClick={() => handleClick("/cotacao/cadastrar-fornecedor")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  CADASTRAR FORNECEDOR
                </p>
              </button>

              <button
                onClick={() => handleClick("/cotacao/cadastrar-vendedor")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  CADASTRAR VENDEDOR
                </p>
              </button>
            </div>
          </>
        )}
        {selectedMenu === "4" && (
          <>
            <div className="text-xl font-semibold text-red-800">
              Controle de vendas
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  VENDAS DIÁRIAS/SEMANAIS
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#ff6161] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#fd4040] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  CONTROLE DE PAGAMENTO
                </p>
              </button>
            </div>
          </>
        )}
        {selectedMenu === "5" && (
          <>
            <div className="text-xl font-semibold text-green-800">
              Apoio financeiro
            </div>
            <div className="mt-5 flex flex-col gap-12 rounded-3xl">
              <button
                onClick={() => handleClick("/financeiro/cadastrar-funcionario")}
                className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]"
              >
                <p className="text-3xl font-bold tracking-wide text-white">
                  CADASTRO DE FUNCIONÁRIO
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  CONTROLE DE COMISSÕES
                </p>
              </button>

              <button className="w-full cursor-pointer rounded-3xl bg-[#4ce79f] p-7 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#2bc17b] active:scale-[0.98]">
                <p className="text-3xl font-bold tracking-wide text-white">
                  APOIO CONTÁBIL
                </p>
              </button>
            </div>
          </>
        )}

        {/* Logo no canto inferior direito */}
        <button
          className="fixed right-10 bottom-10 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
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
    </div>
  );
};

export default Dashboard;
