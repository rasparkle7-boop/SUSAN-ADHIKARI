import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { useSearch } from "@/context/SearchContext";
import { ALL_PRODUCTS } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function SearchModal() {
  const { isOpen, closeSearch, query, setQuery } = useSearch();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});

  const results = query.trim().length > 0
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.colors.some((c) => c.label.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={closeSearch}
          />
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-[101] bg-[#0d0d0d] border-b border-white/10 shadow-2xl"
            data-testid="search-modal"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center gap-4 mb-4">
                <Search className="h-6 w-6 text-primary flex-shrink-0" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories, colours..."
                  className="flex-1 bg-transparent text-white text-xl font-bold placeholder:text-white/20 outline-none border-none"
                  data-testid="input-search"
                />
                <button onClick={closeSearch} className="text-gray-500 hover:text-white transition-colors" data-testid="button-close-search">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {query.trim() === "" && (
                <div className="py-4">
                  <p className="text-gray-600 text-sm uppercase tracking-widest font-bold mb-4">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Shirts", "Jeans", "Tshirts", "Balloon Pants", "Drop Shoulder", "Black", "White"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 border border-white/10 text-gray-400 hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.trim().length > 0 && results.length === 0 && (
                <p className="text-gray-500 py-8 text-center">No results for &quot;{query}&quot;</p>
              )}

              {results.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-h-[60vh] overflow-y-auto">
                  {results.map((p) => {
                    const sizeKey = p.id;
                    const sz = selectedSize[sizeKey] || "M";
                    const firstColor = p.colors[0];
                    return (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#151515] border border-white/5 group cursor-pointer"
                        data-testid={`search-result-${p.id}`}
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <img src={firstColor.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-3">
                          <p className="text-white font-bold text-sm truncate">{p.name}</p>
                          <p className="text-primary text-sm font-bold">Rs. {p.basePrice.toLocaleString()}</p>
                          <button
                            onClick={() => {
                              addItem({
                                id: p.id,
                                name: p.name,
                                price: p.basePrice,
                                color: firstColor.label,
                                size: sz,
                                image: firstColor.image,
                                category: p.category,
                              });
                              closeSearch();
                            }}
                            className="mt-2 w-full bg-primary text-black text-xs font-bold uppercase py-1.5 hover:bg-primary/90 transition-colors"
                            data-testid={`button-add-search-${p.id}`}
                          >
                            Add to Bag
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
