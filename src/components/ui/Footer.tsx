import { Button } from "@headlessui/react";

const footerNavList = [
  {
    label: "Colecciones",
    items: [
      {
        label: "Camisas",
        href: "#",
      },
      {
        label: "Pantalones/Faldas",
        href: "#",
      },
      {
        label: "Accesorios",
        href: "#",
      },
      {
        label: "Vestidos",
        href: "#",
      },
      {
        label: "Sobretodos",
        href: "#",
      },
    ],
  },
  {
    label: "Local",
    items: [
      {
        label: "Nosotros",
        href: "#",
      },
      {
        label: "Contacto",
        href: "#",
      },
    ],
  },

  {
    label: "Social",
    items: [
      {
        label: "X",
        href: "#",
      },
      {
        label: "LinkedIn",
        href: "#",
      },
      {
        label: "Facebook",
        href: "#",
      },
      {
        label: "Instagram",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-12 md:pt-16">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <nav>
          <div className="flex flex-col items-start justify-between pb-10">
            <a
              href="#"
              className="flex flex-col items-start tracking-tight uppercase text-cream"
            >
              <span className="font-display font-bold text-3xl">
                LUCERO ORTEGA
              </span>
              <span className="text-xs font-sans tracking-widest px-2.5 py-1 rounded-full bg-cream/40 font-semibold">
                Atelier 1994
              </span>
            </a>
          </div>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {footerNavList.map((category) => (
              <li key={category.label}>
                <h4 className="text-sm font-semibold text-quaternary">
                  {category.label}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item.label} className="flex">
                      <Button
                        as="a"
                        color="link-gray"
                        href={item.href}
                        className="max-h-5 gap-1"
                      >
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
          <span className="h-7 w-min" />
          <p className="text-sm text-quaternary">
            © 1994-2026 Lucero Ortega Atelier. Todos los derechos reservados. ·
            Hecho por <a href="https://stroopdev.vercel.app">Juan D. García</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
