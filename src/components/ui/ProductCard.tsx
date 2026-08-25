import Image from "next/image";
export type Producto = {
  id: string;
  name: string;
  href: string;
  color: string[];
  talla: string[];
  price: number;
  quantity: string;
  imageSrc: string[];
  imageAlt: string;
};

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-cream/50 object-cover group-hover:opacity-80 lg:aspect-auto lg:h-80 border border-espresso/10">
        <Image
          src={producto.imageSrc[0]} // Si tiene muchas imagenes para el card solo se usa una
          alt={producto.imageAlt}
          width={500}
          height={500}
          className="size-full object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-sans font-medium text-espresso">
            <a href={`/productos/${producto.href}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {producto.name}
            </a>
          </h3>
          {/* Primer color */}
          <p className="mt-1 text-sm text-espresso/60">{producto.color[0]}</p>
        </div>
        {/* Formato moneda */}
        <p className="text-sm font-medium text-espresso">
          ${producto.price.toLocaleString("es-CO")}
        </p>
      </div>
    </div>
  );
}
