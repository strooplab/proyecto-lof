export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navigation: NavItem[] = [
  { name: "Inicio", href: "/" },
  {
    name: "Categorias",
    href: "/categorias",
    children: [
      { name: "Ver todo", href: "/categorias" },
      { name: "Blusas", href: "/blusas" },
      { name: "Pantalones", href: "/pantalones" },
      { name: "Faldas", href: "/faldas" },
      { name: "Vestidos", href: "/vestidos" },
      { name: "Sobretodos", href: "/sobretodos" },
      { name: "Accesorios", href: "/accesorios" },
      { name: "Calzado", href: "/calzado" },
    ],
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];
