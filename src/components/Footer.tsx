import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import footerLogo from '../assets/logo-footer.png';
import { WhatsappIcon } from '../icons/whatsapp';
import { fadeInUp, staggerContainer, viewport } from '../lib/motion';

const WHATSAPP_NUMBER = '201039529116';

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
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: WhatsappIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/build.art.interior?igsi=cTQ2OHZpcXp1dHBu&utm_source=qr',
    icon: Instagram,
  },
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
            <Link to="/" aria-label="Home" className="relative block h-12 w-36 overflow-hidden sm:w-40 lg:h-14 lg:w-48">
              <img
                src={footerLogo}
                alt="Build Art"
                className="absolute left-1/2 top-1/2 h-[240%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
              />
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
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +20 10 3952 9116
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/build.art.interior?igsi=cTQ2OHZpcXp1dHBu&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  @build.art.interior
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-[4px] border border-white/10 lg:mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="aspect-[16/6] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3435.8814155891146!2d31.018781675573422!3d30.55265427467166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMzJzA5LjYiTiAzMcKwMDEnMTYuOSJF!5e0!3m2!1sen!2seg!4v1788735887389!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Build Art location"
              className="h-full w-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 border-t border-white/10 pt-8"
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
