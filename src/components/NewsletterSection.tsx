import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewport } from '../lib/motion';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <section id="contact" className="relative bg-page">
      <div className="site-container py-16 pb-10 lg:py-24 lg:pb-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            className="font-body text-[clamp(1.75rem,4vw,48px)] font-medium leading-[1.15] text-nav-dark"
            variants={fadeInUp}
          >
            Subscribe to Our Newsletter for Design Insights
          </motion.h2>

          <motion.p
            className="mt-6 font-body text-base font-medium leading-[145%] text-nav-muted lg:mt-8 lg:text-lg"
            variants={fadeInUp}
          >
            Be the first to discover trends, inspirations, and special offers as we bring the
            world of design directly to your inbox.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 translate-y-1/2">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="site-container">
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col overflow-hidden rounded-[4px] border border-nav-dark/10 bg-page shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] sm:flex-row sm:items-stretch"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="h-14 flex-1 border-0 border-nav-dark/10 bg-page px-5 font-body text-base font-medium text-nav-dark placeholder:text-nav-muted/70 focus:outline-none sm:border-r lg:h-[60px] lg:px-6 lg:text-lg"
              />
              <button
                type="submit"
                className="h-14 shrink-0 rounded-none bg-nav-dark px-10 font-body text-lg font-semibold text-white transition-colors duration-200 hover:bg-nav-dark/90 lg:h-[60px] lg:min-w-[176px] lg:text-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
