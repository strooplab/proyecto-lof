import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-espresso text-foreground min-h-screen">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-24 px-8 sm:items-start gap-3">
        {/* Cabecera con branding */}
        <div className="flex flex-col items-start justify-between gap-3">
          <span className="font-display text-3xl font-bold tracking-tight text-cream">
            LUCERO ORTEGA
          </span>
          <span className="text-xs font-sans uppercase tracking-widest px-2.5 py-1 rounded-full bg-blush text-espresso font-semibold">
            Atelier 1994
          </span>
        </div>

        {/* Sección central de bienvenida */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-12">
          <h1 className="max-w-xl text-display-xl font-display text-blush font-bold">
            Elegancia a tu alcance, lista para{" "}
            <span className="text-gold decoration-gold-light underline-offset-8">
              tu tienda
            </span>
          </h1>
          <p className="max-w-md text-body-lg text-sand leading-relaxed">
            Tu entorno en Next.js y Tailwind v4 está configurado con la paleta
            de colores Lof y fuentes elegantes. Comienza a diseñar tu landing
            page.
          </p>{" "}
          {/* Este texto es generado mientras construyo el landing page */}
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full sm:w-auto">
          <Link
            href="/catalogo"
            className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-espresso px-6 text-cream transition-all hover:bg-gold-dark shadow-card"
          >
            Explorar Catálogo
          </Link>
          <Link
            href="/login"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-sand px-6 text-cream transition-all hover:bg-gold-dark hover:text-expresso shadow-card"
          >
            Panel Administrativo
          </Link>
        </div>
      </main>
    </div>
  );
}
