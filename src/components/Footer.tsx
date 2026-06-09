import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl text-white">
            Studio<span className="text-gold">Elegance</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-secondary-500 text-sm">
            © 2026 Studio Elegance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
