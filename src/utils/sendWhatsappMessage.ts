export default function whatsapp() {
  try {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const defaultMessage = "¡Hola! 👋, me gustaría recibir más información sobre las prendas.";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  } catch (e) {
    console.error("error trying to send whatsapp message: ", e);
  }
}
