import { Button } from "@headlessui/react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { MOCK_PRODUCTS } from "@/data/dataProductos";
import ProductSwiper from "@/components/sections/ProductSwiper";
import { getColorHex, COLOR_PALETTE } from "@/utils/colors";

interface productoPageProps {
  params: Promise<{ categoria: string; producto: string }>; // [producto] (slug)
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function ProductoPage({ params }: productoPageProps) {
  const { categoria, producto } = await params;
  const productoItem = MOCK_PRODUCTS.find((p) => p.href === producto && p.categoria === categoria);
  if (!productoItem) {
    notFound();
  }

  return (
    <div className="min-h-full">
      <main className="mx-auto pt-18">
        <section className="mx-auto max-w-2xl px-6 lg:px-12 mt-6 lg:max-w-7xl">
          <div className="mb-4">
            <Breadcrumb />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 mb-12">
            <ProductSwiper images={productoItem.imageSrc} productoName={productoItem.name} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-espresso">
                {productoItem.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Información del producto</h2>
                <p className="text-3xl tracking-tight text-espresso font-semibold">
                  ${productoItem.price.toLocaleString("es-CO")}
                </p>
              </div>

              <form className="mt-6">
                {/* Selector de Colores */}
                {productoItem.color && productoItem.color.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-espresso">Color</h3>
                    <fieldset aria-label="Elige un color" className="mt-4">
                      <div className="flex items-center gap-x-3">
                        {productoItem.color.map((colSlug, index) => {
                          // Busqueda de color
                          const colorObj = COLOR_PALETTE.find((c) => c.slug === colSlug);
                          const colorName = colorObj ? colorObj.nombre : colSlug;
                          const hexValue = getColorHex(colSlug);

                          return (
                            <label
                              key={index}
                              title={colorName}
                              className="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-espresso/20"
                            >
                              <input
                                type="radio"
                                name="color"
                                defaultChecked={index === 0}
                                value={colSlug}
                                aria-label={colorName}
                                className="size-8 appearance-none rounded-full border border-black/10 checked:ring-2 checked:ring-espresso checked:ring-offset-2 cursor-pointer transition-all"
                                style={{
                                  backgroundColor: hexValue,
                                }}
                              />
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  </div>
                )}

                {/* Selector de Tallas */}
                {productoItem.talla && productoItem.talla.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-espresso">Talla</h3>
                      <a
                        href="#size-guide"
                        className="text-sm font-medium text-espresso/70 hover:text-espresso underline underline-offset-4"
                      >
                        Guía de tallas
                      </a>
                    </div>

                    <fieldset aria-label="Elige una talla" className="mt-4">
                      <div className="grid grid-cols-4 gap-3">
                        {productoItem.talla.map((size, index) => (
                          <label
                            key={index}
                            aria-label={size}
                            className="group relative flex items-center justify-center rounded-md border border-espresso/20 bg-cream/50 p-3 text-sm font-medium text-espresso uppercase cursor-pointer hover:bg-espresso/5 has-checked:border-espresso has-checked:bg-espresso has-checked:text-cream transition-all"
                          >
                            <input
                              type="radio"
                              name="size"
                              defaultChecked={index === 0}
                              value={size}
                              className="absolute inset-0 appearance-none focus:outline-none cursor-pointer"
                            />
                            <span>{size}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}

                {/* Botón de Agregar a la bolsa */}
                <Button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-terracota px-8 py-3 text-base font-medium text-cream hover:bg-espresso/90 focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2 transition-colors shadow-md"
                >
                  Añadir a la bolsa
                </Button>
              </form>

              {/* Descripción y Detalles del producto */}
              <div className="mt-10 border-t border-espresso/10 pt-10">
                <h3 className="text-sm font-medium text-espresso">Descripción</h3>
                <div className="mt-4 space-y-6 text-sm text-espresso/80 leading-relaxed">
                  <p>{productoItem.imageAlt}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-espresso/10 pt-8">
                <h3 className="text-sm font-medium text-espresso">Detalles</h3>
                <div className="mt-4 space-y-4 text-sm text-espresso/70">
                  <p>• Elaborado con materiales de alta calidad.</p>
                  <p>• Diseño exclusivo enfocado en resaltar tu figura.</p>
                  <p>• Lavado en frío recomendado para mayor durabilidad.</p>
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
      </main>
    </div>
  );
}
