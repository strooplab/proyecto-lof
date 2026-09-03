"use client";
import Image from "next/image";

const categorias = [
  {
    id: 1,
    name: "Blusas",
    href: "/blusas",
    imageSrc: "https://images.pexels.com/photos/31556442/pexels-photo-31556442.jpeg",
    imageAlt: "Categoria de blusas",
    items: "240",
  },
  {
    id: 2,
    name: "Pantalones",
    href: "/pantalones",
    imageSrc: "https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg",
    imageAlt: "Categoria de pantalones",
    items: "167",
  },
  {
    id: 3,
    name: "Faldas",
    href: "/faldas",
    imageSrc: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg",
    imageAlt: "Categoria de faldas",
    items: "148",
  },
  {
    id: 4,
    name: "Vestidos",
    href: "/vestidos",
    imageSrc: "https://images.pexels.com/photos/19895977/pexels-photo-19895977.jpeg",
    imageAlt: "Categoria de vestidos",
    items: "76",
  },
  {
    id: 5,
    name: "Accesorios",
    href: "/accesorios",
    imageSrc: "https://images.pexels.com/photos/39076756/pexels-photo-39076756.jpeg",
    imageAlt: "Categoria de accesorios",
    items: "367",
  },
  {
    id: 6,
    name: "Sobretodos",
    href: "/sobretodos",
    imageSrc: "https://images.pexels.com/photos/6774570/pexels-photo-6774570.jpeg",
    imageAlt: "Categoria de accesorios",
    items: "58",
  },
  {
    id: 7,
    name: "Calzado",
    href: "/calzado",
    imageSrc: "https://images.pexels.com/photos/26772101/pexels-photo-26772101.jpeg",
    imageAlt: "Categoria de accesorios",
    items: "26",
  },
];

export default function Categorias() {
  return (
    <div className="min-h-full">
      <main className="mx-auto mb-10">
        <section className="min-w-full">
          <div className="h-50 md:h-70 lg:96 w-full bg-espresso relative overflow-hidden">
            <div className="relative h-full w-full">
              <Image
                src="https://pub-415cf98523294c368075ea9561ec3752.r2.dev/Development/src/Banner1.jpg"
                alt="Categorias - Banner"
                width={1920}
                height={100}
                loading="eager"
                className="h-full w-full object-cover bg-espresso/10 opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center mt-6 px-6 sm:px-12 lg:px-16">
                <h1 className="text-4xl md:text-7xl font-sans font-semibold tracking-tight text-cream uppercase">
                  Categorias
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto h-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
          <div className="px-4 mb-10">
            <h2 className="text-display-lg font-display font-bold tracking-tight text-espresso">
              Encuentra tu estilo
            </h2>
            <p className="text-heading-md font-sans text-espresso/60">
              Moda a tu medida que resalta tu figura
            </p>
          </div>
          <div className="mt-6 px-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categorias.map((categoria) => (
              <div key={categoria.id} className="group relative">
                <Image
                  alt={categoria.imageAlt}
                  src={categoria.imageSrc}
                  width={500}
                  height={500}
                  className="aspect-square w-full rounded-md bg-cream object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-body-lg font-sans text-espresso">
                      <a href={categoria.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {categoria.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-body-sm text-espresso/60">+{categoria.items} items</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
