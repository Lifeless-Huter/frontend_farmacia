"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    barcode: "",
    code: "",
    fantasyName: "",
    activePrinciple: "",
  });

  const handleClick = (path: string) => {
    router.push(path);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui basicamente você vai enviar os dados para a API para cadastrar o produto e receber a resposta se deu certo ou não
    // try {
    //   const res = await fetch("/api/products", {
    //     //Aqui vai ser seu endpoint da API
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!res.ok) throw new Error("Erro ao enviar dados");

    //   alert("Produto cadastrado com sucesso!");
    //   setFormData({
    //     barcode: "",
    //     code: "",
    //     fantasyName: "",
    //     activePrinciple: "",
    //   });
    //   toast.success("Produto cadastrado com sucesso!");
    //   console.log(`Produto cadastrado: ${JSON.stringify(formData)}`);
    // } catch (error) {
    //   alert("Erro ao cadastrar produto");
    //   console.log(error);
    // }

    // Simulação de sucesso no cadastro (pode apagar quando integrar com sua API)
    toast.success("Produto cadastrado com sucesso!");
    console.log(`Produto cadastrado: ${JSON.stringify(formData)}`);
    setFormData({
      barcode: "",
      code: "",
      fantasyName: "",
      activePrinciple: "",
    });
  };

  return (
    <>
      <button
        onClick={() => handleClick("/menu")}
        className="fixed left-8 cursor-pointer rounded-full bg-green-700 p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
      >
        <ArrowLeft size={20} color="white" />
      </button>
      <div className="mx-auto my-10 max-w-3xl rounded-3xl bg-[#b6e3c5] p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-green-800">
          CADASTRAR PRODUTOS
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Codigo de Barras */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              CODIGO DE BARRAS:
            </label>
            <input
              type="text"
              name="barcode"
              value={formData.barcode}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
            />
          </div>

          {/* Código */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              CODIGO:
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
            />
          </div>

          {/* Nome Fantasia */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              NOME FANTASIA:
            </label>
            <input
              type="text"
              name="fantasyName"
              value={formData.fantasyName}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
            />
          </div>

          {/* Princípio Ativo */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              PRINCIPIO ATIVO:
            </label>
            <input
              type="text"
              name="activePrinciple"
              value={formData.activePrinciple}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-full bg-green-700 px-6 py-2 text-white transition hover:bg-green-800"
          >
            Cadastrar Produto
          </button>
        </form>
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
    </>
  );
}
