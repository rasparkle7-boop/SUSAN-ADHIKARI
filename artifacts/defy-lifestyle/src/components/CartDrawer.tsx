import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0d0d0d] border-l border-white/10 z-[101] flex flex-col"
            data-testid="cart-drawer"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <span className="font-anton text-2xl tracking-wide text-white">YOUR BAG</span>
                <span className="bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>
              </div>
              <button
                onClick={closeCart}
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="button-close-cart"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center gap-6 py-20"
                >
                  <ShoppingBag className="h-16 w-16 text-white/10" />
                  <div>
                    <p className="font-anton text-3xl text-white/30 uppercase tracking-wide">Your bag is empty</p>
                    <p className="text-gray-600 mt-2 text-sm">Add some items to get started</p>
                  </div>
                  <Button
                    onClick={closeCart}
                    className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none px-8"
                    data-testid="button-continue-shopping"
                  >
                    Continue Shopping
                  </Button>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.color}-${item.size}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 bg-[#151515] p-4 border border-white/5 group"
                      data-testid={`cart-item-${item.id}`}
                    >
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-sm truncate">{item.name}</p>
                        <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                          {item.color} · Size {item.size}
                        </p>
                        <p className="text-primary font-bold mt-1">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-white/10">
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                              className="px-2 py-1 text-gray-400 hover:text-white transition-colors"
                              data-testid={`button-decrease-${item.id}`}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-white text-sm font-bold border-x border-white/10">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                              className="px-2 py-1 text-gray-400 hover:text-white transition-colors"
                              data-testid={`button-increase-${item.id}`}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.color, item.size)}
                            className="text-gray-600 hover:text-red-400 transition-colors ml-auto"
                            data-testid={`button-remove-${item.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">Subtotal</span>
                  <span className="font-anton text-2xl text-white">Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <p className="text-gray-600 text-xs">Taxes and shipping calculated at checkout</p>
                <Button
                  className="w-full bg-primary text-black hover:bg-primary/90 font-anton text-xl uppercase tracking-wider rounded-none py-6"
                  data-testid="button-checkout"
                >
                  Checkout Now
                </Button>
                <Button
                  variant="outline"
                  onClick={closeCart}
                  className="w-full rounded-none border-white/20 text-white hover:bg-white/5 uppercase tracking-wider font-bold"
                  data-testid="button-continue-shopping-bottom"
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
