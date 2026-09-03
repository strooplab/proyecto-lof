import { Button } from "@headlessui/react";
import Link from "next/link";

const footerNavList = [
  {
    label: "Categorias",
    items: [
      {
        label: "Blusas",
        href: "#",
      },
      {
        label: "Pantalones",
        href: "#",
      },
      {
        label: "Faldas",
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
    <footer className="flex w-full bg-espresso py-12 md:pt-16">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <nav>
          <div className="flex flex-col items-start justify-between pb-10">
            <Link
              href="/"
              className="flex flex-col items-start tracking-tight uppercase text-cream"
            >
              <span className="font-display font-bold text-3xl">
                LUCERO ORTEGA
              </span>
              <span className="text-xs font-sans tracking-widest px-2.5 py-1 rounded-full bg-cream/40 font-semibold">
                Atelier 1994
              </span>
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {footerNavList.map((category) => (
              <li key={category.label}>
                <h4 className="text-sm font-semibold text-quaternary text-cream">
                  {category.label}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item.label} className="flex">
                      <Button
                        as="a"
                        color="link-gray"
                        href={item.href}
                        className="max-h-5 gap-1 text-cream"
                      >
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start mt-6 gap-2">
            <div className="flex gap-2 items-center justify-center">
              <span className="material-symbols-outlined text-2xl p-2 text-cream leading-none">
                Alternate_Email
              </span>
              <a className="font-sans text-body-sm text-cream">
                luceroortegam45@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="material-symbols-outlined text-2xl p-2 text-cream leading-none">
                Mobile
              </span>
              <a
                href="https://wa.me/+573152180631"
                className="font-sans text-body-sm text-cream "
              >
                3152180631
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="material-symbols-outlined text-2xl p-2 text-cream  leading-none">
                Location_On
              </span>
              <a
                href="https://maps.app.goo.gl/zp6qmv1XKMGxmF8Q7"
                className="font-sans text-body-sm text-cream "
              >
                Calle 42 #43-47 Palmira, Valle del Cauca
              </a>
            </div>
          </div>
        </nav>
        <div className="mt-8 flex flex-col justify-between border-t border-cream pt-8 md:mt-16 md:flex-row md:items-center">
          <span className="h-auto w-min" />
          <p className="text-sm text-quaternary text-cream">
            © 1994-2026 Lucero Ortega Atelier. Todos los derechos reservados. ·
            Hecho por{" "}
            <a
              href="https://stroopdev.vercel.app"
              className="text-blush underline"
            >
              Juan D. García
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
