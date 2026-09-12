// @/utils/sendContactWhatsappMessage.ts

export interface ContactFormData {
  nombre: string;
  email: string | null;
  asunto: string | null;
  mensaje: string;
}

export const handleWhatsappContactForm = (formData: ContactFormData) => {
  let mensaje = `Hola, mi nombre es *${formData.nombre}* `;
  if (formData.email) {
    mensaje += `\nEmail: ${formData.email}`;
  }
  if (formData.asunto) {
    mensaje += `\nAsunto: ${formData.asunto}`;
  }
  mensaje += `\n${formData.mensaje}`;

  const telefonoNegocio = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const url = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
};
