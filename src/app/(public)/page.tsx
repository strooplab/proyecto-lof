"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Button } from "@headlessui/react";
import CategoriesSection from "@/components/sections/Categorias";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full">
      <main className="mx-auto mb-10">
        <section className="min-w-full">
          {/* Landing Page Content */}
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect={"fade"}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            speed={500}
            className="h-200 md:h-300 w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide className="relative h-full w-full">
              <Image
                src="https://pub-415cf98523294c368075ea9561ec3752.r2.dev/Development/src/Model.png"
                alt="image 1"
                fill
                priority
                className="h-full w-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 z-10">
                <div className="w-3/4 text-center space-y-2 md:w-2/4">
                  <h1 className="text-display-xl font-display font-bold tracking-tight text-cream md:text-4xl lg:text-5xl">
                    Lettre d&apos;amour
                  </h1>
                  <h3 className="text-blush font-medium text-heading-md">
                    Vestir como mereces tambien es amor.
                  </h3>
                  <p className="mb-6 text-cream/80 text-body-lg">
                    Apasiona e inspira a quienes amas con lo mejor de la moda.
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button
                      as="a"
                      href="/categorias"
                      className="rounded-lg bg-cream px-5 py-3 font-medium text-espresso hover:bg-cream/80 transition"
                    >
                      Explora
                    </Button>
                    <Button className="rounded-lg border border-cream px-5 py-3 font-medium text-cream hover:bg-cream/10 transition">
                      Contacto
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="relative h-full w-full">
              <Image
                src="https://images.pexels.com/photos/29826122/pexels-photo-29826122.jpeg"
                alt="image 2"
                fill
                className="h-full w-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/50 z-10">
                <div className="w-3/4 pl-12 space-y-2 md:w-2/4 md:pl-20 lg:pl-32">
                  <h1 className="text-3xl font-display tracking-tight font-bold text-cream md:text-4xl lg:text-5xl">
                    A 1994 Dream
                  </h1>
                  <p className="mb-6 text-cream/80 text-body-lg">
                    La experiencia de más de 30 años de trabajo que nos une.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      as="a"
                      href="/categorias"
                      className="rounded-lg bg-cream px-5 py-3 font-medium text-espresso hover:bg-cream/80 transition"
                    >
                      Explora
                    </Button>
                    <Button className="rounded-lg border border-cream px-5 py-3 font-medium text-cream hover:bg-cream/10 transition">
                      Nosotros
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className="relative h-full w-full">
              <Image
                src="https://images.pexels.com/photos/15761459/pexels-photo-15761459.jpeg"
                alt="image 3"
                fill
                className="h-full w-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/50 z-10">
                <div className="w-3/4 pl-12 pb-12 space-y-2 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <h1 className="text-display-xl font-display font-bold text-cream tracking-tight uppercase md:text-4xl lg:text-5xl">
                    Perfeita
                  </h1>
                  <p className="mb-6 text-cream/80 text-body-lg">
                    Diseñamos para todos, para todos los estilos en todos los
                    colores, para cualquiera que se atreve a {""}
                    <span className="font-bold">soñar</span>.
                  </p>{" "}
                  <div className="flex gap-2">
                    <Button
                      as="a"
                      href="/categorias"
                      className="rounded-lg bg-cream px-5 py-3 font-medium text-espresso hover:bg-cream/80 transition"
                    >
                      Explora
                    </Button>
                    <Button className="rounded-lg border border-cream px-5 py-3 font-medium text-cream hover:bg-cream/10 transition">
                      Contacto
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="mx-auto h-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-start w-full px-3 py-6 space-y-4 md:py-12">
            <h1 className="font-display text-display-lg font-bold text-espresso tracking-tight">
              Nuestra tienda
            </h1>
            <div className="flex">
              <h3 className="font-display text-heading-md text-espresso">
                En{" "}
                <Link href="/" className="font-semibold">
                  Lucero Ortega Atelier 1994{" "}
                </Link>
                nos complace presentarte nuestra nueva imagen, un reflejo
                directo de nuestra evolución como Boutique, hacia la creación de
                estilos nuevos, donde la alta costura y la esencia del hoy se
                encuentran. Cada prenda o accesorio lleva consigo una historia
                de más de 30 años de experiencia continua.
              </h3>
            </div>
            <Button className="rounded-lg border border-espresso mt-2 px-5 py-3 font-medium text-espresso hover:bg-espresso/10 transition">
              Quienes somos &rarr;
            </Button>
          </div>
        </section>
        <section className="mx-auto h-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <CategoriesSection />
        </section>
        <section className="mx-auto h-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gold-light/40 px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,bg-cream,transparent)] opacity-10" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl  bg-espresso/10  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl  lg:max-w-4xl">
              <Link
                href="/"
                className="flex flex-col items-center tracking-tight uppercase text-espresso"
              >
                <span className="font-display font-bold text-3xl">
                  LUCERO ORTEGA
                </span>
                <span className="text-xs font-sans tracking-widest px-2.5 py-1 rounded-full bg-mocha/20 font-semibold">
                  Atelier 1994
                </span>
              </Link>
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-espresso/60 sm:text-2xl/9">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    alt=""
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                    width={500}
                    height={500}
                    className="mx-auto size-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-espresso">
                      Lucero Ortega
                    </div>
                    <svg
                      width={3}
                      height={3}
                      viewBox="0 0 2 2"
                      aria-hidden="true"
                      className="fill-mocha/60"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-mocha/60">Diseñadora de modas</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
