"use client";

import { ArrowLeft, Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export default function TelaDeVendas() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data: Product[] = [
        {
          id: "412414234513",
          name: "Paracetamol 750mg – 20 Comp – Tylenol",
          quantity: 1,
          unitPrice: 38.99,
        },
        {
          id: "423423345156",
          name: "Paracetamol 750mg – 20 Comp – Neo Química – Genérico",
          quantity: 2,
          unitPrice: 14.99,
        },
        {
          id: "428900985156",
          name: "Paracetamol 750mg – 20 Comp – Medquímica – Genérico",
          quantity: 2,
          unitPrice: 11.9,
        },
      ];

      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  const total = products.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0,
  );

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fff6eb] p-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between rounded-full bg-[#ff5f74] p-4 text-xl font-semibold text-black">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer" onClick={() => handleClick("/menu")}>
            <ArrowLeft size={20} />
          </span>
          <span>ITENS – {products.length.toString().padStart(2, "0")}</span>
        </div>
        <span>PDV 02 – LUIZ FELIPE</span>
      </div>

      {/* Main content */}
      <div className="mt-4 flex flex-1 gap-4 overflow-hidden">
        {/* Products column */}
        <div className="relative flex-1 overflow-auto rounded-3xl bg-[#b7f0d6] p-4">
          {loading ? (
            <div className="bg-opacity-80 absolute inset-0 z-10 flex items-center justify-center bg-[#b7f0d6]">
              <Loader className="h-12 w-12 animate-spin text-[#ff5f74]" />
            </div>
          ) : (
            <>
              <div className="mb-2 flex justify-between font-bold">
                <span>PRODUTOS</span>
                <div className="flex gap-8">
                  <span>UN</span>
                  <span>VAL. UN</span>
                </div>
              </div>

              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  className="mb-4 flex cursor-pointer items-center justify-between rounded-2xl border border-gray-400 p-3"
                >
                  <div className="max-w-[60%] text-sm font-medium">
                    {product.name}
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="w-8 rounded-full bg-[#a2dfc6] text-center">
                      {product.quantity}
                    </span>
                    <span>{product.unitPrice.toFixed(2)}</span>
                    <span>
                      {(product.unitPrice * product.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Summary column */}
        <div className="flex w-[30%] flex-col gap-2 overflow-y-auto">
          {selectedProduct ? (
            <>
              <div className="rounded-full bg-[#a2dfc6] px-4 py-2 text-center font-semibold">
                {selectedProduct.id}
              </div>
              <div className="rounded-xl bg-[#a2dfc6] px-4 py-2 text-sm">
                {selectedProduct.name}
              </div>
              <div className="rounded-xl bg-[#a2dfc6] px-4 py-2 text-sm">
                Quantidade: {selectedProduct.quantity}
              </div>
              <div className="rounded-xl bg-[#a2dfc6] px-4 py-2 text-sm">
                Preço UN:{" "}
                {selectedProduct.unitPrice.toFixed(2).replace(".", ",")}
              </div>
            </>
          ) : (
            <div className="rounded-xl bg-[#ffdada] px-4 py-2 text-center text-sm">
              Selecione um produto
            </div>
          )}

          <div className="mt-4 text-xl font-semibold">TOTAL:</div>
          <div className="rounded-3xl bg-[#ff5f74] px-4 py-6 text-center text-4xl font-bold">
            R$ {total.toFixed(2).replace(".", ",")}
          </div>

          <button className="mt-4 w-full rounded-3xl bg-[#ff5f74] px-6 py-4 text-center font-semibold">
            FINALIZAR COMPRA
          </button>

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
      </div>
    </div>
  );
}
