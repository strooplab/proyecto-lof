// @/components/services/CategoriasPreview.tsx
import { getTopCategories, getProductsByCategory } from "@/services/previewProductsService";
import Preview from "@/components/sections/CategoriasPreviewClient";

export default async function CategoriasPreview() {
  // Top 5 categorias
  const categorias = await getTopCategories(3);

  if (!categorias || categorias.length === 0) {
    return null;
  }

  // Top 5 productos por categoria
  const productos = await getProductsByCategory(categorias[0].slug, 5);

  return <Preview initialCategories={categorias} initialProducts={productos} />;
}
