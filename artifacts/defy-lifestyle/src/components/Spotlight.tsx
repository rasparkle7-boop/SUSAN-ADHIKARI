import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Spotlight() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#050505] my-24">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop" 
          alt="Urban Nomad SS26" 
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 border border-primary text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-black/50 backdrop-blur-sm">
          Collection Spotlight
        </span>
        <h2 className="font-anton text-6xl md:text-8xl tracking-tight text-white uppercase leading-[0.9] mb-6">
          URBAN NOMAD SS26
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mx-auto mb-10 font-medium">
          A tribute to the restless. Heavy fabrics, relaxed fits, and technical details built for the concrete jungle.
        </p>
        <Button 
          size="lg" 
          className="rounded-none bg-white text-black hover:bg-primary hover:text-black font-anton text-xl px-12 py-8 tracking-wider uppercase transition-colors"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
}
