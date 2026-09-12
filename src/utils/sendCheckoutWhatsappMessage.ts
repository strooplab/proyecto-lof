// @/utils/sendCheckoutWhatsappMessage.ts
import { CartItem } from "@/types/cartItem";
import formatPrice from "@/utils/formatPrice";

export interface CheckoutFormData {
  nombre: string;
  celular: string;
  ciudad: string;
  direccion: string;
  barrio?: string;
  metodo: string;
  nota?: string;
}

// Generar link de WhatsApp con los datos del carrito y del formulario
export const handleWhatsAppCheckout = (
  items: CartItem[],
  subtotal: number,
  formData: CheckoutFormData,
) => {
  let mensaje = "¡Hola! Me gustaría hacer el siguiente pedido desde su tienda LOA:\n\n";

  mensaje += "* Estos son mis datos de envío:*\n";
  mensaje += `• *Nombre:* ${formData.nombre}\n`;
  mensaje += `• *Celular:* ${formData.celular}\n`;
  mensaje += `• *Ciudad:* ${formData.ciudad}\n`;
  mensaje += `• *Dirección:* ${formData.direccion} ${formData.barrio ? `(${formData.barrio})` : ""}\n`;
  mensaje += `• *Método de pago:* ${formData.metodo}\n`;
  if (formData.nota) {
    mensaje += `• *Detalles adicionales:* ${formData.nota}\n`;
  }

  mensaje += "\n*Y estos son los productos que pedí:*\n";
  items.forEach((item) => {
    mensaje += `- *${item.nombre}* (Talla: ${item.talla || "N/A"}, Color: ${item.color || "N/A"}) x${item.cantidad} - ${formatPrice(item.precio * item.cantidad)}\n`;
  });

  mensaje += `\n*Subtotal:* ${formatPrice(subtotal)}\n`;
  mensaje += "Estoy pendiente para coordinar el pago y el envío. ¡Muchisimas gracias!";

  const telefonoNegocio = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const url = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
};
