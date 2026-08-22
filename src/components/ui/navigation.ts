export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navigation: NavItem[] = [
  { name: "Inicio", href: "/" },
  {
    name: "Colecciones",
    href: "/colecciones",
    children: [
      { name: "Ver todo", href: "/categorias" },
      { name: "Camisas", href: "/categorias/camisas" },
      { name: "Pantalones/Faldas", href: "/categorias/pantalones-faldas" },
      { name: "Vestidos", href: "/categorias/vestidos" },
      { name: "Sobretodos", href: "/categorias/sobretodos" },
      { name: "Accesorios", href: "/categorias/accesorios" },
    ],
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];
