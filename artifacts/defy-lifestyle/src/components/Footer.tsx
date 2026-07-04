import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6" data-testid="link-footer-home">
              <span className="font-anton text-4xl tracking-wider text-foreground">
                DEFY<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Raw energy, urban grit, and Himalayan pride fused into street culture. Born in Nepal, worn everywhere.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-youtube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-anton text-xl text-foreground tracking-wide mb-6">SHOP</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/men" className="hover:text-primary transition-colors">Menswear</Link></li>
              <li><Link href="/women" className="hover:text-primary transition-colors">Womenswear</Link></li>
              <li><Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-anton text-xl text-foreground tracking-wide mb-6">SUPPORT</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link href="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-anton text-xl text-foreground tracking-wide mb-6">LOCATIONS</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-foreground font-semibold mb-1">Old Baneshwor</span>
                Kathmandu, Nepal
              </li>
              <li>
                <span className="block text-foreground font-semibold mb-1">Kalanki Khasibazar</span>
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs">
          <p>&copy; {new Date().getFullYear()} DEFY LIFESTYLE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
