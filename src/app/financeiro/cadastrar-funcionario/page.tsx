"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CadastrarFuncionarioForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cpf: "",
    telefone: "",
    nome: "",
    numeroOperador: "",
    cargo: "",
    percentualComissao: "",
    senha: "",
  });

  const handleClick = (path: string) => {
    router.push(path);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/funcionarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Resposta do servidor:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => handleClick("/menu")}
        className="fixed left-8 cursor-pointer rounded-full bg-green-700 p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
      >
        <ArrowLeft size={20} color="white" />
      </button>
      <div className="mx-auto mt-7 max-w-4xl rounded-2xl bg-green-100 p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-800">
          CADASTRAR FUNCIONARIO
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block font-semibold text-green-800">CPF:</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-green-800">
                TELEFONE:
              </label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-green-800">
              NOME COMPLETO:
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full rounded-xl border border-green-700 p-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="block font-semibold text-green-800">
                NUMERO OPERADOR:
              </label>
              <input
                type="text"
                name="numeroOperador"
                value={formData.numeroOperador}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-green-800">
                CARGO:
              </label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block font-semibold text-green-800">
                PERCENTUAL DE COMISSÃO:
              </label>
              <input
                type="text"
                name="percentualComissao"
                value={formData.percentualComissao}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-green-800">
                SENHA:
              </label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className="w-full rounded-xl border border-green-700 p-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-green-700 px-6 py-2 text-white hover:bg-green-800 md:w-auto"
          >
            Cadastrar Funcionário
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
