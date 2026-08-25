import { Producto } from "@/components/ui/ProductCard";

export const MOCK_PRODUCTS: Producto[] = [
  {
    id: "1",
    name: "Blusa Gloria Verde",
    href: "blusa-gloria-verde",
    color: ["Verde"],
    talla: ["S", "M", "L"],
    price: 90000,
    quantity: "10",
    imageSrc: [
      "https://pub-415cf98523294c368075ea9561ec3752.r2.dev/Development/src/Model.png",
    ],
    imageAlt: "Blusa Gloria Verde a rayas",
  },
  {
    id: "2",
    name: "Blusa Beatriz Mustard",
    href: "blusa-beatriz-mustard",
    color: ["Mostaza"],
    talla: ["M", "L"],
    price: 95000,
    quantity: "5",
    imageSrc: [
      "https://images.pexels.com/photos/15211900/pexels-photo-15211900.jpeg",
    ],
    imageAlt: "Blusa Beatriz color mostaza",
  },
  {
    id: "3",
    name: "Blusa Alba Lino",
    href: "Blusa-alba-lino",
    color: ["Blanco"],
    talla: ["S", "M"],
    price: 97000,
    quantity: "8",
    imageSrc: [
      "https://images.pexels.com/photos/29826122/pexels-photo-29826122.jpeg",
    ],
    imageAlt: "Blusa de lino blanco",
  },
  {
    id: "4",
    name: "Pantalón Pastel Blush",
    href: "pantalon-pastel-blush",
    color: ["Tierra"],
    talla: ["S", "M", "L"],
    price: 120000,
    quantity: "12",
    imageSrc: [
      "https://images.pexels.com/photos/15761459/pexels-photo-15761459.jpeg",
    ],
    imageAlt: "Pantalón sastre color blush",
  },
];
