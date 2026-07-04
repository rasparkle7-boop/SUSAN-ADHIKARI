import { motion } from "framer-motion";
import { CheckCircle, Truck, RefreshCcw, Star } from "lucide-react";

const trustItems = [
  { icon: Star, title: "Trending Now" },
  { icon: Star, title: "Best Sellers" },
  { icon: Truck, title: "Fast Delivery" },
  { icon: CheckCircle, title: "New Arrivals" },
  { icon: RefreshCcw, title: "Easy Returns" },
];

export function TrustBar() {
  return (
    <div className="bg-[#111] border-y border-white/5 py-6 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-anton uppercase tracking-wider text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
