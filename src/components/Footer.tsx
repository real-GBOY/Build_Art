import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.svg';
import { fadeInUp, staggerContainer, viewport } from '../lib/motion';

const serviceLinks = [
  { label: 'Lighting Design', href: '/#services' },
  { label: 'Interior Design', href: '/#services' },
  { label: 'Outdoor Design', href: '/#services' },
  { label: 'Office Design', href: '/#services' },
];

const quickLinks = [
  { label: 'About Us', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/' },
  { label: 'Contact Us', href: '/#contact' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Footer() {
  return (
    <footer id="support" className="relative bg-nav-dark text-white">
      <div className="site-container pb-16 pt-[calc(2.5rem+3.5rem)] sm:pb-16 sm:pt-[calc(2.5rem+1.75rem)] lg:pb-20 lg:pt-[calc(3rem+30px)]">
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="sm:col-span-2 lg:col-span-1" variants={fadeInUp}>
            <Link to="/" aria-label="Home">
              <img src={logo} alt="" className="h-10 w-auto brightness-0 invert lg:h-12" />
            </Link>

            <p className="mt-6 max-w-sm font-body text-sm font-medium leading-[160%] text-white/70 lg:text-base">
              Step into a world where interior design is meticulously crafted to bring together
              timeless elegance and cutting-edge modern innovation.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="font-body text-base font-semibold uppercase tracking-wide text-white lg:text-lg">
              Our Services
            </h3>
            <ul className="mt-6 space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="font-body text-base font-semibold uppercase tracking-wide text-white lg:text-lg">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="font-body text-base font-semibold uppercase tracking-wide text-white lg:text-lg">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-4 font-body text-sm font-medium leading-[160%] text-white/70 lg:text-base">
              <li>123 Design Avenue, Suite 400, New York, NY 10001</li>
              <li>
                <a href="tel:+12345678900" className="transition-colors duration-200 hover:text-white">
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@studioelegance.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  hello@studioelegance.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-white/10 pt-8 lg:mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="space-y-2 text-center font-body text-sm font-medium text-white/50">
            <p>© {new Date().getFullYear()} Build Art. All rights reserved.</p>
            <p>Developed By JINX</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
