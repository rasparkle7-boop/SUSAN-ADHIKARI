import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Kathmandu Grit Hoodie", price: "$79.00", category: "Outerwear", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Utility Cargo Pants", price: "$89.00", category: "Bottoms", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Nomad Bomber Jacket", price: "$129.00", category: "Outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Oversized Heavy Tee", price: "$45.00", category: "T-Shirts", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Defy Strike Sneakers", price: "$119.00", category: "Footwear", image: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Altitude Puffer Vest", price: "$99.00", category: "Outerwear", image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Heritage Varsity Jacket", price: "$149.00", category: "Outerwear", image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Urban Track Suit", price: "$139.00", category: "Sets", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
];

export function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wide text-foreground mb-4">
              Trending Now
            </h2>
            <p className="text-muted-foreground max-w-md">
              The latest drops from our collection. Built for the streets, designed to make a statement.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              data-testid={`card-product-${product.id}`}
            >
              <div className="relative aspect-[4/5] bg-card overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black hover:bg-primary hover:text-black font-bold uppercase tracking-wider rounded-none"
                    data-testid={`button-quick-add-${product.id}`}
                  >
                    Quick Add
                  </Button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-foreground truncate">{product.name}</h3>
                <p className="text-primary font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
