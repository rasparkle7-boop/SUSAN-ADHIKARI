import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/Spotlight";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import refImg from "@assets/Screenshot_2026-07-04_at_15.19.40_1783159722943.png";

function PromoBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-primary p-12 md:p-20 flex flex-col justify-center items-center text-center">
        <h3 className="font-anton text-4xl md:text-5xl text-black uppercase mb-4">Mid-Season Sale</h3>
        <p className="text-black/80 font-bold tracking-widest uppercase mb-8">Up to 50% Off Select Styles</p>
        <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase tracking-wider font-bold border-2">
          Shop Sale
        </Button>
      </div>
      <div className="bg-[#111] p-12 md:p-20 flex flex-col justify-center items-center text-center border-l border-white/5">
        <h3 className="font-anton text-4xl md:text-5xl text-white uppercase mb-4">Worldwide Drop</h3>
        <p className="text-gray-400 font-bold tracking-widest uppercase mb-8">Free Shipping on Orders over $75</p>
        <Button className="bg-white text-black hover:bg-gray-200 rounded-none uppercase tracking-wider font-bold">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

function ShopTheLook() {
  const images = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617331713243-7f32e92c42ec?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512353087810-258cb228ce9c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-anton text-5xl uppercase text-foreground mb-4">Shop The Look</h2>
            <p className="text-muted-foreground max-w-md">Editorial Archives. The latest fits and styles from our community.</p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-wider uppercase">
            View Lookbook
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[3/4] group overflow-hidden cursor-pointer bg-card"
            >
              <img src={src} alt="Lookbook" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold uppercase tracking-wider rounded-none">
                  View Look
                </Button>
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
            <h2 className="font-anton text-5xl md:text-7xl uppercase text-foreground mb-6 leading-none">
              Find Us In<br/><span className="text-primary">The Streets</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md text-lg">
              Visit our flagship stores to experience the collection in person. Exclusive in-store drops available.
            </p>
            
            <div className="space-y-6">
              <div className="bg-[#111] p-8 border border-white/5 flex gap-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-anton text-3xl text-white tracking-wide mb-2">Old Baneshwor</h4>
                  <p className="text-gray-400 mb-4">Kathmandu, Bagmati Province, Nepal</p>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">Open Today • 10AM - 8PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#111] p-8 border border-white/5 flex gap-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-anton text-3xl text-white tracking-wide mb-2">Kalanki Khasibazar</h4>
                  <p className="text-gray-400 mb-4">Kathmandu, Bagmati Province, Nepal</p>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">Open Today • 10AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-[4/3] bg-muted border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop" 
              alt="Store Interior" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <img src={refImg} alt="Reference" className="w-32 h-auto opacity-50 hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-anton text-5xl md:text-7xl text-black uppercase mb-6">Join The Movement</h2>
        <p className="text-black/80 font-bold mb-10 max-w-lg mx-auto">
          Subscribe to get early access to exclusive drops, secret sales, and raw street culture straight to your inbox.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-white border-2 border-black p-4 text-black placeholder:text-black/50 focus:outline-none font-bold tracking-wider"
            required
          />
          <Button type="submit" className="bg-black text-white hover:bg-black/90 rounded-none px-10 py-7 font-anton text-2xl uppercase tracking-wider border-2 border-black border-l-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBar />
      <Products />
      <PromoBanners />
      <Spotlight />
      <ShopTheLook />
      <Features />
      <StoreLocations />
      <Newsletter />
      <Footer />
    </div>
  );
}
