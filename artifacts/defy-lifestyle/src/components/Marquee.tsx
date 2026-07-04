import { motion } from "framer-motion";

const phrases = [
  "DEFY LIMITS",
  "REPRESENT NEPAL",
  "NEW DROP LIVE",
  "URBAN STYLE",
  "FREE SHIPPING ON ORDERS OVER $75",
  "NO COMPROMISE",
];

export function Marquee() {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden flex items-center border-y border-primary/20 relative z-20">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1035] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {[...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-anton text-xl tracking-widest uppercase">{phrase}</span>
            <span className="w-2 h-2 rounded-full bg-black/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
