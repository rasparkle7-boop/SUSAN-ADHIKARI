import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/Spotlight";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Shield, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";

function PromoBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary p-12 md:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-black/10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          <p className="text-black/60 font-bold tracking-widest uppercase text-sm mb-2">Limited Time</p>
          <h3 className="font-anton text-5xl md:text-7xl text-black uppercase mb-4 leading-none">
            50% OFF
          </h3>
          <p className="text-black/70 font-bold tracking-widest uppercase mb-8">Mid-Season Clearance</p>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase tracking-wider font-bold border-2 px-10 py-6 text-base">
            Shop Sale
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#111] p-12 md:p-20 flex flex-col justify-center items-center text-center border-l border-white/5 relative overflow-hidden group"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #D4A853 0px, #D4A853 1px, transparent 0px, transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="relative z-10">
          <p className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2">Members Only</p>
          <h3 className="font-anton text-5xl md:text-7xl text-white uppercase mb-4 leading-none">
            Early<br /><span className="text-primary">Access</span>
          </h3>
          <p className="text-gray-400 font-bold tracking-widest uppercase mb-8">New drops before everyone else</p>
          <Button className="bg-primary text-black hover:bg-primary/90 rounded-none uppercase tracking-wider font-bold px-10 py-6 text-base">
            Join The List
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function ShopTheLook() {
  const images = [
    { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop", label: "Street Look 01" },
    { src: "https://images.unsplash.com/photo-1617331713243-7f32e92c42ec?q=80&w=800&auto=format&fit=crop", label: "Street Look 02" },
    { src: "https://images.unsplash.com/photo-1512353087810-258cb228ce9c?q=80&w=800&auto=format&fit=crop", label: "Street Look 03" },
    { src: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop", label: "Street Look 04" },
  ];

  return (
    <section className="py-24 bg-[#060606]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary uppercase tracking-widest text-sm font-bold mb-3">Editorial</p>
            <h2 className="font-anton text-5xl uppercase text-foreground">Shop The Look</h2>
          </motion.div>
          <Button variant="outline" className="mt-6 md:mt-0 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-wider uppercase px-8">
            View Lookbook
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map(({ src, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative group overflow-hidden cursor-pointer bg-card"
              style={{ aspectRatio: i % 3 === 0 ? "3/5" : "3/4" }}
            >
              <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-anton text-xl uppercase tracking-wide">{label}</p>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">View Look</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SizingGuide() {
  const sizes = [
    { size: "M", chest: '38"', waist: '30"', length: '28"' },
    { size: "L", chest: '40"', waist: '32"', length: '29"' },
    { size: "XL", chest: '42"', waist: '34"', length: '30"' },
    { size: "2XL", chest: '44"', waist: '36"', length: '31"' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-b border-white/5">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary uppercase tracking-widest text-sm font-bold mb-3">Fit Guide</p>
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-white mb-4">Find Your Size</h2>
          <p className="text-gray-500 mb-8">All styles available in M · L · XL · 2XL</p>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 mx-auto text-primary font-bold uppercase tracking-widest text-sm hover:text-primary/80 transition-colors"
            data-testid="button-toggle-size-guide"
          >
            {open ? "Hide Guide" : "View Size Chart"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              ▼
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-8"
          >
            <div className="border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary">
                    {["Size", "Chest", "Waist", "Length"].map((h) => (
                      <th key={h} className="py-3 px-4 text-black font-bold uppercase tracking-wider text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((row, i) => (
                    <motion.tr
                      key={row.size}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: open ? 1 : 0 }}
                      transition={{ delay: open ? i * 0.1 : 0 }}
                      className="border-t border-white/5 hover:bg-white/3 transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-primary">{row.size}</td>
                      <td className="py-3 px-4 text-gray-400">{row.chest}</td>
                      <td className="py-3 px-4 text-gray-400">{row.waist}</td>
                      <td className="py-3 px-4 text-gray-400">{row.length}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { icon: Shield, label: "Secure Payment", sub: "100% Safe Checkout" },
    { icon: Clock, label: "24/7 Support", sub: "We're Here to Help" },
    { icon: RotateCcw, label: "30 Day Returns", sub: "Easy & Hassle Free" },
    { icon: Star, label: "Premium Quality", sub: "Nepal's Best Streetwear" },
  ];

  return (
    <section className="py-12 bg-[#0d0d0d] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-full h-full" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{label}</p>
                <p className="text-gray-600 text-xs">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreLocations() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Our Outlets</p>
              <h2 className="font-anton text-5xl md:text-7xl uppercase text-foreground mb-6 leading-none">
                Find Us In<br /><span className="text-primary">The Streets</span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-md text-lg">
                Visit our flagship stores to experience the full collection in person. Exclusive in-store drops and try-ons available.
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                { name: "Old Baneshwor", area: "Kathmandu, Bagmati Province, Nepal" },
                { name: "Kalanki Khasibazar", area: "Kathmandu, Bagmati Province, Nepal" },
              ].map((store, i) => (
                <motion.div
                  key={store.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 6 }}
                  className="bg-[#111] p-8 border border-white/5 flex gap-6 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-anton text-3xl text-white tracking-wide mb-2">{store.name}</h4>
                    <p className="text-gray-400 mb-4">{store.area}</p>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-primary text-sm font-bold uppercase tracking-widest">Open Today · 10AM - 8PM</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-muted border border-white/10 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop"
              alt="Store Interior"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-anton text-4xl text-white/20 uppercase">Kathmandu</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
  };

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-anton text-5xl md:text-7xl text-black uppercase mb-4">Join The Movement</h2>
          <p className="text-black/70 font-bold mb-10 max-w-lg mx-auto">
            Get early access to drops, exclusive offers, and raw street culture straight to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-anton text-3xl text-black uppercase tracking-wider"
            >
              Welcome to the movement.
            </motion.div>
          ) : (
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-0" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-white border-2 border-black p-4 text-black placeholder:text-black/40 focus:outline-none font-bold tracking-wider"
                required
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-black/90 rounded-none px-10 py-7 font-anton text-xl uppercase tracking-wider border-2 border-black border-l-0"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <SearchModal />
      <Hero />
      <Marquee />
      <TrustBar />
      <Products />
      <SizingGuide />
      <PromoBanners />
      <Spotlight />
      <ShopTheLook />
      <Features />
      <TrustBadges />
      <StoreLocations />
      <Newsletter />
      <Footer />
    </div>
  );
}
