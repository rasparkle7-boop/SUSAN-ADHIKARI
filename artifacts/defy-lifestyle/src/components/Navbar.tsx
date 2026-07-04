import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/context/SearchContext";

const NAV_LINKS = ["New In", "Men", "Women", "Shirts", "Jeans", "Sale"];

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const { openSearch } = useSearch();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setMobileOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <Link href="/" className="flex items-center" data-testid="link-home">
            <motion.span
              whileHover={{ letterSpacing: "0.15em" }}
              transition={{ duration: 0.3 }}
              className="font-anton text-3xl tracking-wider text-foreground"
            >
              DEFY<span className="text-primary">.</span>
            </motion.span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
                data-testid={`link-nav-${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary"
              onClick={openSearch}
              data-testid="button-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary relative"
              onClick={openCart}
              data-testid="button-cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full flex items-center justify-center text-black text-[10px] font-bold"
                    data-testid="cart-badge"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#0d0d0d] border-r border-white/10 z-[61] flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-anton text-2xl text-white">DEFY<span className="text-primary">.</span></span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="space-y-6">
                {NAV_LINKS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-anton text-3xl text-white/70 hover:text-primary transition-colors uppercase tracking-wide block"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
