"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  cnpj: string;
  telefone: string;
  nomeFantasia: string;
  endereco: string;
}

export default function CadastroIndustria() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    cnpj: "",
    telefone: "",
    nomeFantasia: "",
    endereco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const handleClick = (path: string) => {
    router.push(path);
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
          CADASTRAR FORNECEDOR
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* CNPJ */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              CNPJ:
            </label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
              placeholder="00.000.000/0000-00"
              required
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              TELEFONE:
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          {/* Nome Fantasia */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              NOME FANTASIA:
            </label>
            <input
              type="text"
              name="nomeFantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
              placeholder="Nome fantasia da indústria"
              required
            />
          </div>

          {/* Endereço */}
          <div className="flex flex-col">
            <label className="rounded-full px-4 py-2 font-bold text-green-800">
              ENDEREÇO:
            </label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              className="rounded-full border px-4 py-2"
              placeholder="Rua, número, complemento"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-full bg-green-700 px-6 py-2 text-white transition hover:bg-green-800"
          >
            Cadastrar Indústria
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
