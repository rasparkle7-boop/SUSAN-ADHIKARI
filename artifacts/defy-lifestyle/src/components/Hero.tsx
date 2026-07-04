import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
          alt="Streetwear Fashion Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block py-1 px-3 border border-primary/50 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-primary/10 backdrop-blur-sm">
            Season 04 Collection
          </span>
        </motion.div>

        <motion.h1 
          className="font-anton text-6xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Defying<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">Limits</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Raw energy, urban grit, and Himalayan pride. The new drop is live. 
          Limited quantities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button 
            size="lg" 
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-anton text-xl px-12 py-8 tracking-wider uppercase transition-transform hover:scale-105"
            data-testid="button-shop-drop"
          >
            Shop The Drop
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
