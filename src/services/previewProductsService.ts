// @/services/previewProductsService.ts
import { query } from "@/lib/db";
import { cacheLife } from "next/cache";
import { Categoria, Producto } from "@/types/productPreview";

/**
 * Primeras tres categorías para visualizador rápido del landing page
 */
export async function getTopCategories(limit: number = 3): Promise<Categoria[]> {
  "use cache";
  cacheLife("hours");
  try {
    const categorias = await query<Categoria>(
      `SELECT id, nombre, slug, orden
      FROM categorias 
      WHERE activo = true
      ORDER BY orden ASC
      LIMIT $1`,
      [limit],
    );
    return categorias;
  } catch (e) {
    console.error("Error fetching top categories: ", e);
    return [];
  }
}

/**
 * Contiene 5 productos destacados o en su defecto los últimos 5 productos
 * agregados de la categoría.
 */
export async function getProductsByCategory(slug: string, limit: number = 5): Promise<Producto[]> {
  "use cache";
  cacheLife("hours");
  try {
    const productos = await query<Producto>(
      `SELECT 
          p.id, p.categoria_id, p.nombre, p.slug, p.descripcion, p.precio,
          p.descuento, p.stock, p.imagenes, p.dimensiones, p.destacado,
          cat.slug AS categoria_slug,
          COALESCE(
              json_agg(DISTINCT jsonb_build_object('nombre', c.nombre, 'slug', c.slug, 'hex', c.hex)) 
              FILTER (WHERE c.id IS NOT NULL), '[]'
          ) AS colores,
          COALESCE(
              array_agg(DISTINCT t.nombre) FILTER (WHERE t.id IS NOT NULL), '{}'
          ) AS tallas
       FROM productos p
       INNER JOIN categorias cat ON p.categoria_id = cat.id
       LEFT JOIN producto_colores pc ON p.id = pc.producto_id
       LEFT JOIN colores c ON pc.color_id = c.id
       LEFT JOIN producto_tallas pt ON p.id = pt.producto_id
       LEFT JOIN tallas t ON pt.tallas_id = t.id
       WHERE cat.slug = $1 AND p.visible = true 
       GROUP BY p.id, cat.slug
       ORDER BY p.destacado DESC, p.creado_en DESC
       LIMIT $2`,
      [slug, limit],
    );
    return productos;
  } catch (e) {
    console.error(`Error fetching products for category ${slug}:`, e);
    return [];
  }
}
