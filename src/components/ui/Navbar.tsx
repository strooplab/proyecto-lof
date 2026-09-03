"use client";
import { useState, useEffect, Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePanel } from "@/components/context/PanelContext";
import { navigation } from "@/data/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeDrawer, openDrawer } = usePanel();
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Si la página abre en estado scroll
    window.addEventListener("scroll", handleScroll, { passive: true }); // passive: true Mejora la velocidad de render de la animación
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Algunas páginas tienen un banner decorativo, si no lo tiene la navbar estará sobre un fondo blanco
  const isNoBannerPage = pathname.split("/").length > 2 && !pathname.startsWith("/categorias");

  const effectiveScrolled = isScrolled || isNoBannerPage;

  const navBg = effectiveScrolled
    ? "bg-cream text-espresso shadow-sm backdrop-blur-md"
    : "bg-transparent text-cream";

  const linkHover = effectiveScrolled
    ? "hover:border-espresso hover:text-espresso"
    : "hover:border-cream hover:text-cream";

  const linkSelected = effectiveScrolled ? "border-espresso" : "border-cream";

  const iconButtonHover = effectiveScrolled
    ? "hover:bg-espresso/5 active:bg-espresso/20"
    : "hover:bg-cream/5 active:bg-cream/20";

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 p-3 ${navBg} `} // Nav Scroll Behavior
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center rounded-md sm:hidden sm:inset-auto sm:mr-6 sm:pl-0">
            {/* Mobile Menu Button */}
            <Button
              className="absolute inset-y-0 left-0 items-center justify-center"
              as="button"
              onClick={() => openDrawer("Menu")}
              aria-expanded={activeDrawer === "Menu"}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Abrir menú principal</span>
              {/* Menu Icon */}
              <span className="relative inline-flex items-center justify-center rounded-md focus:outline-none">
                <Transition
                  as={Fragment}
                  show={activeDrawer !== "Menu"}
                  enter="transition-all duration-200 ease-in-out"
                  enterFrom="opacity-0 rotate-90 scale-75"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transition-all duration-200 ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100"
                  leaveTo="opacity-0 rotate-90 scale-75"
                >
                  <span
                    className={classNames(
                      "material-symbols-outlined text-2xl rounded-md p-2 leading-none transition-all ease-in-out duration-200",
                      iconButtonHover,
                    )}
                  >
                    menu
                  </span>
                </Transition>
                <Transition
                  as={Fragment}
                  show={activeDrawer === "Menu"}
                  enter="transition-all duration-200 ease-in-out"
                  enterFrom="opacity-0 rotate-90 scale-75"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transition-all duration-200 ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100"
                  leaveTo="opacity-0 rotate-90 scale-75"
                >
                  <span
                    className={classNames(
                      "material-symbols-outlined text-2xl rounded-md p-2 leading-none",
                      iconButtonHover,
                    )}
                  >
                    close
                  </span>
                </Transition>{" "}
              </span>
            </Button>
          </div>
          {/* </Link> */}
          {/* Local */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="font-display text-3xl font-bold md:text-4xl tracking-tight uppercase"
              >
                <span className="inline sm:hidden">LOA</span>
                <span className="hidden sm:inline">LOA</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name} className="relative group rounded-md text-right">
                      <div
                        className={classNames(
                          "inline-flex gap-2 items-center border-b px-3 py-2 font-sans text-body-lg transition-all ease-in-out duration-200 cursor-pointer",
                          linkHover,
                          pathname === item.href
                            ? classNames("font-semibold", linkSelected)
                            : "border-transparent hover:font-semibold",
                        )}
                      >
                        {item.name}
                        <span className="material-symbols-outlined text-sm fill-cream transition-all ease-in-out duration-200 group-hover:rotate-180">
                          expand_more
                        </span>
                      </div>
                      <nav className="absolute hidden group-hover:block origin-top-right w-48 pt-2 z-50">
                        <div className="bg-cream shadow-lg shadow-cream/40 divide-y divide-espresso/10 rounded-md overflow-hidden">
                          {item.children.map((child) => {
                            const isCurrent = pathname === child.href;
                            return (
                              <Button
                                as="a"
                                key={child.name}
                                href={child.href}
                                className={classNames(
                                  isCurrent
                                    ? "text-body-lg font-bold text-cream bg-mocha"
                                    : "text-espresso hover:bg-mocha/20 hover:text-espresso/80",
                                  "group/item flex w-full items-center px-4 py-3 font-sans text-body-lg transition-all ease-in-out duration-200",
                                )}
                              >
                                {child.name}
                              </Button>
                            );
                          })}
                        </div>
                      </nav>
                    </div>
                  ) : (
                    <Button
                      as="a"
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? classNames("font-semibold", linkSelected)
                          : classNames("border-transparent hover:font-semibold", linkHover),
                        "border-b px-4 py-2 font-sans text-body-lg transition-all ease-in-out duration-200",
                      )}
                    >
                      {item.name}
                    </Button>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:gap-4">
            <Button
              as="button"
              onClick={() => openDrawer("Buscar")}
              aria-expanded={activeDrawer === "Buscar"}
              className={classNames(
                "relative inline-flex items-center justify-center rounded-md p-2 transition-all duration-200 ease-in-out",
                iconButtonHover,
              )}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Buscar</span>
              <span className="material-symbols-outlined text-2xl leading-none">search</span>
            </Button>
            <div className="flex items-center justify-center">
              <Button
                as="button"
                onClick={() => openDrawer("Carrito")}
                aria-expanded={activeDrawer === "Carrito"}
                className={classNames(
                  "relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none transition-all duration-200 ease-in-out",
                  iconButtonHover,
                )}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Carrito</span>
                <span className="material-symbols-outlined text-2xl leading-none">
                  shopping_cart
                </span>
              </Button>
              <p className="flex text-sans text-body-sm xl:text-heading-md">3</p>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
