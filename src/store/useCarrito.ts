// @/store/useCarrito.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartState } from "@/types/cartItem";

export const useCarrito = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // Añadir item o aumentar cantidad del item existente en el carrito
      addItem: (newItem) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.id === newItem.id &&
              item.talla === newItem.talla &&
              item.color === newItem.color,
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].cantidad += newItem.cantidad;
            return { items: updatedItems };
          }

          return { items: [...state.items, newItem] };
        });
      },

      // Eliminar de carrito
      removeItem: (id, talla, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.talla === talla && item.color === color),
          ),
        }));
      },

      // Aumentar cantidad del producto a pedir
      updateCantidad: (id, talla, color, cantidad) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.talla === talla && item.color === color
              ? { ...item, cantidad: Math.max(1, cantidad || 0) }
              : item,
          ),
        }));
      },

      // Vaciar carrito
      clearCart: () => set({ items: [] }),

      // Obtener el total de productos en el carrito
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.cantidad, 0);
      },

      // Calcular total acumulado ($)
      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.precio * item.cantidad, 0);
      },
    }),
    {
      name: "loa-cart-storage",
    },
  ),
);
