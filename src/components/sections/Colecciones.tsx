"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "@/components/ui/ProductCard";
import { MOCK_PRODUCTS } from "@/data/dataProductos";

const CATEGORIES = ["Blusas", "Pantalones", "Faldas"];

export default function ColeccionesSection() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  // Prototipo vista previa de categorías destacadas
  const productosFiltrados = MOCK_PRODUCTS;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-espresso/20 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        {/* Navegación de categorías */}
        <nav className="flex space-x-6 overflow-x-auto w-full sm:w-auto hide-scrollbar order-2 sm:order-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-display text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                activeTab === cat
                  ? "border-b-2 border-espresso text-espresso pb-2"
                  : "font-normal text-espresso/60 hover:text-espresso pb-2 transition-all ease-in-out duration-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Enlace Ver Todo  */}
        <a
          href="/colecciones"
          className="font-sans text-xs font-bold uppercase tracking-widest text-espresso hover:underline order-1 sm:order-2 self-start sm:self-auto"
        >
          Ver todo &rarr;
        </a>
      </div>

      {/* Carrusel de productos */}
      <div className="relative group/swiper">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1.2} // Vista Móvil
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4, spaceBetween: 24 }, // Vista Desktop
          }}
          className="w-full pb-4"
        >
          {productosFiltrados.map((producto) => (
            <SwiperSlide key={producto.id}>
              <ProductCard producto={producto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
