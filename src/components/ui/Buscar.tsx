"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Description,
  Button,
} from "@headlessui/react";
import ProductCard, { Producto } from "@/components/ui/ProductCard";
import { usePanel } from "@/components/context/PanelContext";

// Datos de ejemplo
const productos: Producto[] = [
  {
    id: "1a2b3c4d-5e6f",
    name: "Blusa vinotinto manga corta",
    href: "blusa-vinotinto-manga-corta",
    color: ["Vinotinto", "Negro"],
    talla: ["S", "M", "L"],
    price: 45000,
    quantity: "10",
    imageSrc: [
      "https://images.pexels.com/photos/9558584/pexels-photo-9558584.jpeg",
    ],
    imageAlt: "Blusa vinotinto manga corta de tela suave",
  },
  {
    id: "2b3c4d5e-6f7g",
    name: "Vestido midi de lino",
    href: "vestido-midi-lino",
    color: ["Crema", "Azul"],
    talla: ["XS", "S", "M"],
    price: 120000,
    quantity: "5",
    imageSrc: [
      "https://images.pexels.com/photos/7532776/pexels-photo-7532776.jpeg",
    ],
    imageAlt: "Vestido midi de lino fresco",
  },
];
export default function Buscar() {
  const [busqueda, setBusqueda] = useState("");
  const { activeDrawer, closeDrawer } = usePanel();
  const isOpen = activeDrawer === "Buscar";
  const resultados = productos.filter(
    (p) =>
      p.name?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.price?.toString().includes(busqueda.toLowerCase()),
  );

  return (
    <>
      <Dialog open={isOpen} onClose={closeDrawer} className="relative z-50">
        {/* Dialog z-50 sobre cualquier elemento (esto pasa en todos los paneles) */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out
        data-closed:opacity-0"
        />
        {/* Panel de búsqueda con input autofocus */}
        <div className="fixed inset-0 overflow-y-auto px-4 py-16 sm:py-24">
          <div className="flex min-h-full items-start justify-center">
            <DialogPanel
              transition
              className="w-full max-w-lg transform overflow-hidden rounded-md bg-cream p-6 text-left align-middle 
                shadow-xl shadow-blue-gray-900/5 transition-all duration-300 ease-in-out
                data-closed:translate-y-4 data-closed:opacity-0 sm:duration-500"
            >
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
                <div className="flex flex-col">
                  <DialogTitle className="text-heading-lg font-sans font-medium text-espresso">
                    Buscar
                  </DialogTitle>
                  <Description className="text-body-lg text-espresso/60">
                    El producto que buscas aparecerá rápidamente aquí.
                  </Description>
                </div>
                <Button
                  as="button"
                  onClick={closeDrawer}
                  aria-label="Cerrar carrito"
                  aria-expanded={activeDrawer === "Carrito"}
                  className="p-1 text-espresso/80 hover:text-espresso"
                >
                  <span className="material-symbols-outlined text-2xl leading-none">
                    close
                  </span>
                </Button>
              </div>
              <div className="w-full max-w-md px-4 mt-2 font-sans">
                <Field>
                  <Label className="text-body-xl font-medium text-espresso/80">
                    Buscar producto
                  </Label>
                  <Input
                    name="Buscar"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Ej: 'Blusa vinotinto manga corta'"
                    className="mt-3 block w-full rounded-md border-none bg-white px-3 py-2 
                    text-body-sm text-espresso focus: outline-1 focus:outline-terracota placeholder:text-espresso/60"
                    autoFocus
                  ></Input>
                </Field>
              </div>
              {/* Resultados de la búsqueda */}
              <div className="mt-4 max-h-100 overflow-y-auto px-4">
                {busqueda.length > 0 ? (
                  // Si el usuario ha escrito algo, evaluamos los resultados
                  resultados.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
                      {resultados.map((p) => (
                        <ProductCard key={p.id} producto={p} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-espresso/60 text-center py-6">
                      Sin resultados para: {busqueda}
                    </p>
                  )
                ) : (
                  // Si el input está vacío, simplemente no mostramos nada (o un mensaje sugerente)
                  <p></p>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
