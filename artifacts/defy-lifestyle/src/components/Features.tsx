import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShieldCheck, Flame, Globe2, Clock, RotateCcw, Zap } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Constructed with high-grade heavyweight fabrics built to endure the streets." },
  { icon: Flame, title: "Authentic Street Style", desc: "Unapologetic designs that refuse to blend in. Stand out from the crowd." },
  { icon: Globe2, title: "Nepal Made", desc: "Proudly designed and manufactured in the heart of the Himalayas." },
  { icon: Zap, title: "Limited Edition Drops", desc: "Exclusive capsule collections. Once they're gone, they're gone forever." },
  { icon: Clock, title: "Express Delivery", desc: "Fast shipping nationwide and worldwide so you can rock it sooner." },
  { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free 14-day exchange policy. Shop with absolute confidence." },
];

export function Features() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-6xl text-foreground uppercase tracking-wider mb-6">
            The DEFY Standard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just make clothes; we build armor for the modern urban nomad. Every piece represents our core pillars of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-full"
            >
              <div className="relative h-full rounded-xl border border-white/10 bg-[#111] p-8 overflow-hidden group">
                <GlowingEffect 
                  disabled={false} 
                  glow={true} 
                  variant="default"
                  spread={40}
                  inactiveZone={0.6}
                  proximity={64}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-anton tracking-wide text-2xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
