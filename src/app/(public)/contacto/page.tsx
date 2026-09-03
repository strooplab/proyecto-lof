import Image from "next/image";

export default function ContactoPage() {
  return (
    <div className="min-h-full">
      <main className="mx-auto mb-16">
        {/* BANNER PRINCIPAL CON BREADCRUMB */}
        <section className="w-full">
          <div className="h-50 md:h-70 lg:h-96 w-full bg-espresso relative overflow-hidden">
            <Image
              src="https://pub-415cf98523294c368075ea9561ec3752.r2.dev/Development/src/Banner1.jpg"
              alt="Contacto - Banner"
              width={1920}
              height={400}
              priority
              className="h-full w-full object-cover bg-espresso/10 opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center mt-6 px-6 sm:px-12 lg:px-16">
              <h1 className="text-4xl md:text-7xl font-sans font-semibold tracking-tight text-cream uppercase">
                Contacto
              </h1>
            </div>
          </div>
        </section>

        {/* SECCIÓN PRINCIPAL: INFORMACIÓN Y FORMULARIO */}
        <section className="mx-auto max-w-7xl px-6 lg:px-12 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Información de contacto y canales */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-espresso/60 font-semibold">
                  Hablemos
                </span>
                <h2 className="text-3xl font-sans font-bold tracking-tight text-espresso mt-1">
                  Ponte en contacto con nuestro equipo
                </h2>
                <p className="text-espresso/70 text-sm mt-3 leading-relaxed">
                  ¿Tienes preguntas sobre tallas, envíos o disponibilidad? Completa el formulario o
                  comunícate directamente a través de nuestros canales oficiales.
                </p>
              </div>

              <div className="space-y-6 border-t border-espresso/10 pt-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center text-espresso shrink-0 mt-1">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">Correo electrónico</h3>
                    <p className="text-sm text-espresso/70 mt-0.5">soporte@tu-marca.com</p>
                  </div>
                </div>

                {/* Teléfono / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center text-espresso shrink-0 mt-1">
                    <span className="material-symbols-outlined text-xl">phone</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">WhatsApp y Teléfono</h3>
                    <p className="text-sm text-espresso/70 mt-0.5">+57 (300) 000-0000</p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center text-espresso shrink-0 mt-1">
                    <span className="material-symbols-outlined text-xl">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-espresso">Horarios de atención</h3>
                    <p className="text-sm text-espresso/70 mt-0.5">
                      Lunes a Viernes: 9:00 a.m. – 6:00 p.m.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario de Contacto */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-espresso/10 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-medium text-espresso uppercase tracking-wider mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-md border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-espresso uppercase tracking-wider mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full rounded-md border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="asunto"
                    className="block text-xs font-medium text-espresso uppercase tracking-wider mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    placeholder="¿Sobre qué nos quieres contactar?"
                    className="w-full rounded-md border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs font-medium text-espresso uppercase tracking-wider mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full rounded-md border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-espresso px-8 py-3.5 text-base font-medium text-cream hover:bg-espresso/90 focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2 transition-colors shadow-md cursor-pointer"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
