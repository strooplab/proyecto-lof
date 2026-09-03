import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { navigation } from "@/data/navigation";
import { MOCK_PRODUCTS } from "@/data/dataProductos";
import CategoriesSlider from "@/components/sections/CategoriesSlider";
import CategoryFilters from "@/components/sections/CategoryFilters";
import Link from "next/link";

interface categoriasPageProps {
  params: Promise<{ categoria: string }>; // [categoria] (slug)
  searchParams: Promise<{ sort?: string; color?: string }>;
}

function getCategoriasInfo(categoria: string) {
  const categoriasItem = navigation.find((item) => item.href === "/categorias");

  // Buscar ruta exacta /categorias/[categoria]
  return categoriasItem?.children?.find((child) => {
    const fHref = child.href.replace(/^\/+/, "");
    return fHref === categoria;
  }); // Si el objeto es null, activa not-found
}

export default async function CategoriaPage({ params, searchParams }: categoriasPageProps) {
  const { categoria } = await params;
  const { sort = "destacados", color } = await searchParams;
  const categorias = getCategoriasInfo(categoria);

  if (!categorias) {
    notFound(); // not-found.tsx
  }
  const categoriasItem = navigation.find((item) => item.href === "/categorias");
  const allCategories = categoriasItem?.children || [];
  let productos = MOCK_PRODUCTS.filter((p) => p.categoria === categoria);

  // Filtro por color
  if (color) {
    const colorBusqueda = color.toLowerCase();
    productos = productos.filter((p) => {
      if (!p.color) return false;
      if (Array.isArray(p.color)) {
        return p.color.some((c) => c.toLowerCase().includes(colorBusqueda));
      }
      return p.color.toLowerCase().includes(colorBusqueda);
    });
  }

  // Filtro por orden
  if (sort === "novedades") {
    // Suponiendo que tienes un campo de fecha o id mayor = más nuevo
    productos.sort((a, b) => b.id - a.id);
  } else if (sort === "precio-asc") {
    productos.sort((a, b) => a.price - b.price);
  } else if (sort === "precio-desc") {
    productos.sort((a, b) => b.price - a.price);
  } else {
    // "destacados" (orden por defecto o métrica principal)
    productos.sort((a, b) => a.id - b.id);
  }

  return (
    <div className="min-h-full">
      <main className="mx-auto mb-16">
        <section className="w-full">
          <div className="h-64 md:h-80 lg:h-96 w-full bg-espresso relative flex items-center">
            <div className="absolute inset-0">
              <Image
                src="https://pub-415cf98523294c368075ea9561ec3752.r2.dev/Development/src/Banner1.jpg"
                alt={categorias.name}
                width={1920}
                height={400}
                priority
                className="h-full w-full object-cover bg-espresso/10 opacity-40"
              />
            </div>

            <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-16 z-10">
              <div className="flex flex-col items-start max-w-6xl w-full mx-auto">
                <div className="mb-1">
                  <Breadcrumb />
                </div>

                <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight text-cream uppercase">
                  {categorias.name}
                </h1>
                <p className="text-cream/80 text-sm md:text-base mt-2">
                  Explora nuestra selección exclusiva de {categorias.name.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-6">
          <CategoriesSlider categorias={allCategories} />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-4">
            <CategoryFilters />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productos.map((p) => {
              const productHref = `${categoria}/${p.href}`.toLowerCase().replace(/\/+/g, "/");
              return (
                <Link
                  key={p.id}
                  href={productHref}
                  className="group relative p-6 border border-espresso/10 rounded-md shadow-xl shadow-black/10 transform transition duration-300 
		            hover:scale-102 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Image
                    alt={p.imageAlt}
                    src={p.imageSrc[0]}
                    width={500}
                    height={500}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 transition duration-300"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{p.name}</h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        {Array.isArray(p.color) ? (
                          p.color.map((col, idx) => (
                            <span key={idx} className="text-xs text-gray-500">
                              {col.replace("-", " ")}
                              {idx < p.color.length - 1 ? " • " : ""}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-500">{p.color}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${p.price.toLocaleString("es-CO")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
