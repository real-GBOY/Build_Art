import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const navLinks = [
  { name: 'Home', href: '#home', active: true },
  { name: 'Services', href: '#services', active: false },
  { name: 'Contact', href: '#contact', active: false },
  { name: 'Support', href: '#support', active: false },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="site-container relative flex items-center py-4 lg:py-5">
        <a href="#home" className="relative z-10 shrink-0" aria-label="Home">
          <img src={logo} alt="" className="h-10 w-auto lg:h-12 lg:w-[177px]" />
        </a>

        <div className="absolute inset-x-0 hidden items-center justify-center gap-10 xl:gap-[60px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-body text-[22px] font-semibold leading-normal transition-colors duration-200 ${
                link.active ? 'text-nav-dark' : 'text-nav-muted hover:text-nav-dark'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#signup"
          className="relative z-10 ml-auto hidden h-12 w-[176px] shrink-0 items-center justify-center rounded-[4px] bg-nav-dark font-body text-[20px] font-semibold text-white transition-colors duration-200 hover:bg-nav-dark/90 lg:flex"
        >
          Sign Up
        </a>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="relative z-10 ml-auto p-2 text-nav-dark lg:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-nav-dark/10 bg-white lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 font-body text-lg font-semibold ${
                    link.active ? 'text-nav-dark' : 'text-nav-muted'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex h-[60px] w-full items-center justify-center rounded-[4px] bg-nav-dark font-body text-[20px] font-semibold text-white"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
