// utils/colors.ts
export const COLOR_PALETTE = [
  { slug: "verde", nombre: "Verde", hex: "#22c55e" },
  { slug: "mostaza", nombre: "Mostaza", hex: "#eab308" },
  { slug: "blanco", nombre: "Blanco", hex: "#ffffff" },
  { slug: "rojo", nombre: "Rojo", hex: "#ef4444" },
  { slug: "azul", nombre: "Azul", hex: "#3b82f6" },
  { slug: "azul-claro", nombre: "Azul Claro", hex: "#AABBf6" },
  { slug: "negro", nombre: "Negro", hex: "#000000" },
  { slug: "tierra", nombre: "Tierra", hex: "#b45309" },
  { slug: "beige", nombre: "Beige", hex: "#f5f5dc" },
  { slug: "azul-denim", nombre: "Azul Denim", hex: "#1e3a8a" },
  { slug: "marfil", nombre: "Marfil", hex: "#fffff0" },
] as const;

// Función auxiliar para obtener el hex dado un slug
export const getColorHex = (slug: string) => {
  const found = COLOR_PALETTE.find((c) => c.slug === slug);
  return found ? found.hex : "#CCCCCC"; // DEFAULT COLOR
};
