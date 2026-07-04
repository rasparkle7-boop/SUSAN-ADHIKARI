import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  image: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQuantity: (id: string, color: string, size: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const key = `${item.id}-${item.color}-${item.size}`;
      const exists = prev.find((i) => `${i.id}-${i.color}-${i.size}` === key);
      if (exists) {
        return prev.map((i) =>
          `${i.id}-${i.color}-${i.size}` === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string, color: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.color === color && i.size === size)));
  }, []);

  const updateQuantity = useCallback((id: string, color: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id, color, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.color === color && i.size === size ? { ...i, quantity: qty } : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
