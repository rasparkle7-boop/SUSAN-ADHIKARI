import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_PRODUCTS, CATEGORIES, SIZES, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showSizes, setShowSizes] = useState(false);
  const [added, setAdded] = useState(false);

  const color = product.colors[selectedColorIdx];
  const displayPrice = product.isSale && product.salePrice ? product.salePrice : product.basePrice;

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: displayPrice,
      color: color.label,
      size: selectedSize,
      image: color.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group cursor-pointer"
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[3/4] bg-[#111] overflow-hidden mb-4">
        <motion.img
          key={color.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={color.image}
          alt={`${product.name} in ${color.label}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            Sale
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="mb-3">
            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1.5 font-bold">Size</p>
            <div className="flex gap-1.5">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={(e) => { e.stopPropagation(); setSelectedSize(s); }}
                  className={`px-2.5 py-1 text-xs font-bold border transition-colors ${
                    selectedSize === s
                      ? "bg-primary border-primary text-black"
                      : "border-white/30 text-white hover:border-primary hover:text-primary"
                  }`}
                  data-testid={`button-size-${product.id}-${s}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleAdd}
            className={`w-full py-2.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              added ? "bg-green-500 text-white" : "bg-primary text-black hover:bg-primary/90"
            }`}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingBag className="h-4 w-4" />
            {added ? "Added!" : "Add to Bag"}
          </motion.button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-white text-sm leading-snug">{product.name}</h3>
          <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold flex-shrink-0 mt-0.5">{product.category}</span>
        </div>

        <div className="flex items-center gap-2">
          {product.isSale && product.salePrice ? (
            <>
              <span className="text-primary font-bold">Rs. {product.salePrice.toLocaleString()}</span>
              <span className="text-gray-600 line-through text-sm">Rs. {product.basePrice.toLocaleString()}</span>
            </>
          ) : (
            <span className="text-primary font-bold">Rs. {product.basePrice.toLocaleString()}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {product.colors.map((c, i) => (
            <button
              key={c.label}
              title={c.label}
              onClick={() => setSelectedColorIdx(i)}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                selectedColorIdx === i ? "border-primary scale-110" : "border-transparent hover:border-white/30"
              }`}
              style={{ backgroundColor: c.hex }}
              data-testid={`button-color-${product.id}-${c.label}`}
            />
          ))}
          <span className="text-gray-600 text-xs ml-1">{color.label}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-bold mb-3">Full Collection</p>
          <h2 className="font-anton text-5xl md:text-6xl uppercase tracking-wide text-foreground">
            Shop All Styles
          </h2>
        </motion.div>

        <div className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary border-primary text-black"
                  : "border-white/15 text-gray-400 hover:border-primary/50 hover:text-primary"
              }`}
              data-testid={`button-category-${cat}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
