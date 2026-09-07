// @/services/categoryService.ts
import { query } from "@/lib/db";
import Categoria from "@/types/category";
import { cacheLife } from "next/cache";

export default async function getCategories(): Promise<Categoria[]> {
  "use cache";
  cacheLife("hours");
  try {
    const categorias = await query<Categoria>(
      `SELECT id, nombre, slug, descripcion
      FROM categorias
      WHERE activo = true
      ORDER BY orden ASC`,
    );
    return categorias;
  } catch (e) {
    console.error("Error trying to fetch categorias: ", e);
    return [];
  }
}
