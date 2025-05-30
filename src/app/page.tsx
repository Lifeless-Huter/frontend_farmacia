"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(1, { message: "Digite um nome de usuário." }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres." }),
});

export default function Home() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  // Função para lidar com o envio do formulário
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Dados submetidos:", values);
    router.push("/dashboard");
    // Aqui você pode adicionar a lógica de autenticação, como chamar uma API
    // e redirecionar o usuário para a página de dashboard após o login bem-sucedido.
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center px-4 py-8 sm:py-0"
      style={{ backgroundImage: "url('/bg-login.png')" }}
    >
      {/* Texto superior esquerdo */}
      <div className="absolute top-4 left-4 hidden max-w-xs text-left sm:top-8 sm:left-8 sm:block sm:max-w-md">
        <p className="text-xl font-bold sm:text-3xl">
          A BARATEIRA, a farmácia preferida do seu bolso
        </p>
      </div>

      {/* Formulário centralizado */}
      <Form {...form}>
        <div className="flex w-full flex-col items-center sm:w-auto">
          <Image
            src="/logo.png"
            alt="Logo da empresa"
            width={300}
            height={300}
            className="mb-8 w-40 rounded-full sm:w-[300px]"
            priority
          />
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-xs space-y-6 sm:max-w-sm"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="Usuário"
                        className="focus-visible:ring-primary rounded-full border-gray-300 py-6 pl-10 focus-visible:ring-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="px-4 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Senha"
                        className="focus-visible:ring-primary rounded-full border-gray-300 py-6 pl-10 focus-visible:ring-2"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="px-4 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="text-md w-full cursor-pointer rounded-full bg-[var(--color-primary-green)] py-6 font-bold text-white hover:bg-[var(--color-secondary-green)]"
            >
              Entrar
            </Button>
          </form>
        </div>
      </Form>

      {/* Texto inferior direito */}
      <div className="absolute right-4 bottom-4 hidden max-w-xs text-right sm:right-8 sm:bottom-8 sm:block sm:max-w-md">
        <p className="text-xl font-bold sm:text-3xl">
          OBRIGADO PELA PREFERÊNCIA!
        </p>
      </div>
    </div>
  );
}
