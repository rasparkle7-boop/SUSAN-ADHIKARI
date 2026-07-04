import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="text-foreground" data-testid="button-mobile-menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center" data-testid="link-home">
          <span className="font-anton text-3xl tracking-wider text-foreground">
            DEFY<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {["New In", "Men", "Women", "Accessories", "Sale", "Lookbook"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-nav-${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary" data-testid="button-search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative" data-testid="button-cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
          </Button>
        </div>
      </div>
    </header>
  );
}
