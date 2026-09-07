// @/utils/formatPrice.ts
import { CartItem } from "@/types/cartItem";
import formatPrice from "@/utils/formatPrice";

// Generar link de WhatsApp con los datos digitados en el formulario
export const handleWhatsAppCheckout = (items: CartItem[], subtotal: number) => {
  let mensaje = "¡Hola! 👋 Me gustaría confirmar el siguiente pedido desde la tienda loa:\n\n";

  items.forEach((item) => {
    mensaje += `- *${item.nombre}* (Talla: ${item.talla || "N/A"}, Color: ${item.color || "N/A"}) x${item.cantidad} - ${formatPrice(item.precio * item.cantidad)}\n`;
  });

  mensaje += `\n*Subtotal:* ${formatPrice(subtotal)}\n`;
  mensaje += "Quedo atento/a para coordinar el pago y el envío. ¡Gracias!";

  const telefonoNegocio = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const url = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
};
