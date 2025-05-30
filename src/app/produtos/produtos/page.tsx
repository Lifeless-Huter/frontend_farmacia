"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  precoCompra: number;
  precoVenda: number;
  margem: number;
  precoOferta: number;
  codigoBarras: string;
  estoque: number;
  ultimaCompra: string;
  industria: string;
  imagem?: string;
};

const Produtos: React.FC = () => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null,
  );

  // Simulação de dados
  //Aqui é onde vocês irao integrar com a API real para buscar os produtos
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const dadosSimulados: Produto[] = [
        {
          id: 1,
          nome: "Paracetamol 750mg - 20 Comp - Tylenol",
          precoCompra: 20.99,
          precoVenda: 20.99,
          margem: 20,
          precoOferta: 20.99,
          codigoBarras: "1234567890123",
          estoque: 400,
          ultimaCompra: "2025-05-10",
          industria: "FARMS-FARMA",
        },
        {
          id: 2,
          nome: "Paracetamol 750mg - 20 Comp - Neo Qu",
          precoCompra: 20.99,
          precoVenda: 20.99,
          margem: 20,
          precoOferta: 20.99,
          codigoBarras: "9876543210987",
          estoque: 200,
          ultimaCompra: "2025-05-10",
          industria: "FARMS-FARMA",
        },
        {
          id: 3,
          nome: "Paracetamol 750mg - 20 Comp - Medquí",
          precoCompra: 20.99,
          precoVenda: 20.99,
          margem: 20,
          precoOferta: 20.99,
          codigoBarras: "4561237894561",
          estoque: 300,
          ultimaCompra: "2025-05-10",
          industria: "FARMS-FARMA",
        },
      ];
      setProdutos(dadosSimulados);
      setProdutoSelecionado(dadosSimulados[0]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleClick = (path: string) => {
    router.push(path);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fff6eb]">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-[#ff5f74]" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fff6eb] p-6">
      {/* Lista de produtos */}
      <div className="rounded-3xl bg-[#a2dfc6] p-4">
        <div className="mb-4 flex items-center gap-4">
          <span className="cursor-pointer" onClick={() => handleClick("/menu")}>
            <ArrowLeft size={20} />
          </span>
          <div className="font-semibold text-black">PRODUTOS</div>
        </div>

        {/* Cabeçalhos */}
        <div className="mb-2 flex items-center justify-between px-4 text-sm font-bold text-black">
          <span className="max-w-[60%]">NOME</span>
          <div className="flex items-center gap-6">
            <span className="w-20 text-center">COMPRA</span>
            <span className="w-20 text-center">VENDA</span>
          </div>
        </div>

        <div className="space-y-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              onClick={() => setProdutoSelecionado(produto)}
              className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#b7f0d6] p-4 hover:bg-[#9edcc1]"
            >
              <div className="max-w-[60%] text-lg font-semibold text-black">
                {produto.nome}
              </div>
              <div className="flex items-center gap-6 text-black">
                <span className="w-20 rounded-full bg-[#a2dfc6] px-4 py-2 text-center text-sm">
                  R$ {produto.precoCompra.toFixed(2).replace(".", ",")}
                </span>
                <span className="w-20 rounded-full bg-[#a2dfc6] px-4 py-2 text-center text-sm">
                  R$ {produto.precoVenda.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalhes do produto selecionado */}
      {produtoSelecionado && (
        <div className="mt-6 grid flex-grow grid-cols-3 gap-4 overflow-hidden">
          {/* Preço Normal e Oferta */}
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[#ff5f74] p-6 text-center text-black">
            <div className="p-7">
              <div className="mb-2 font-semibold">PREÇO NORMAL</div>
              <div className="mb-4 text-2xl font-bold">
                R$ {produtoSelecionado.precoVenda.toFixed(2).replace(".", ",")}
              </div>

              <div className="mb-2 font-semibold">MARGEM APLICADA</div>
              <div className="mb-6 rounded-full border border-black px-6 py-2 text-center font-bold">
                {produtoSelecionado.margem}%
              </div>

              <div className="mb-2 font-semibold">PREÇO OFERTA</div>
              <div className="text-2xl font-bold">
                R$ {produtoSelecionado.precoOferta.toFixed(2).replace(".", ",")}
              </div>
            </div>
          </div>

          {/* Código de Barras e Estoque */}
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[#a2dfc6] p-6 text-center text-black">
            <div className="p-7">
              <div className="mb-6">
                <div className="mb-1 font-semibold">CÓDIGO DE BARRAS</div>
                <div className="inline-block rounded-full border border-black px-6 py-2">
                  {produtoSelecionado.codigoBarras}
                </div>
              </div>

              <div>
                <div className="mb-1 font-semibold">ESTOQUE</div>
                <div className="inline-block rounded-full border border-black px-6 py-2">
                  {produtoSelecionado.estoque} UN
                </div>
              </div>
            </div>
          </div>

          {/* Última Compra, Indústria, Preço Compra */}
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[#ff5f74] p-6 text-center text-black">
            <div className="p-7">
              <div className="mb-6">
                <div className="mb-1 font-semibold">ÚLTIMA COMPRA</div>
                <div className="text-2xl font-bold">
                  {new Date(
                    produtoSelecionado.ultimaCompra,
                  ).toLocaleDateString()}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-1 font-semibold">INDÚSTRIA</div>
                <div className="inline-block rounded-full border border-black px-6 py-2">
                  {produtoSelecionado.industria}
                </div>
              </div>

              <div>
                <div className="mb-1 font-semibold">PREÇO DE COMPRA</div>
                <div className="text-xl font-bold">
                  R${" "}
                  {produtoSelecionado.precoCompra.toFixed(2).replace(".", ",")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default Produtos;
