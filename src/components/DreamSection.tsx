import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import sectionImage from '../../assets/imgs/Image 1.jpg';
import { fadeInUp, slideInLeft, staggerContainer, viewport } from '../lib/motion';

const accordionItems = [
  {
    title: 'Living Room — Interior Design',
    content:
      'Create warm, inviting living spaces tailored to your lifestyle with thoughtful layouts, refined finishes, and furniture that balances comfort with style.',
  },
  {
    title: 'Commercial Interior Design',
    content:
      'Design professional environments that reflect your brand identity and enhance productivity, leaving a lasting impression on clients and teams alike.',
  },
];

export function DreamSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-page">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24">
          <motion.div
            className="overflow-hidden rounded-[4px] lg:h-full"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              src={sectionImage}
              alt="Bright modern interior with natural light"
              className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2
              className="font-body text-[clamp(2.25rem,5vw,80px)] font-medium leading-[1.05] text-nav-dark"
              variants={fadeInUp}
            >
              Designing Your Dream With Brilliance
            </motion.h2>

            <motion.p
              className="mt-8 max-w-xl font-body text-lg font-medium leading-[145%] text-nav-muted lg:mt-10 lg:text-2xl"
              variants={fadeInUp}
            >
              Elevate your spaces with bespoke interior designs that reflect your unique style and
              aspirations, crafted with precision and brilliance for an unforgettable living
              experience.
            </motion.p>

            <motion.div className="mt-10 lg:mt-12" variants={fadeInUp}>
              {accordionItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.title} className="border-t border-nav-dark/15 last:border-b">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="font-body text-lg font-semibold text-nav-dark lg:text-xl">
                        {item.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {isOpen ? (
                          <Minus className="h-6 w-6 shrink-0 text-nav-dark" strokeWidth={1.5} />
                        ) : (
                          <Plus className="h-6 w-6 shrink-0 text-nav-dark" strokeWidth={1.5} />
                        )}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 font-body text-base font-medium leading-[145%] text-nav-muted lg:text-lg">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            <motion.a
              href="#contact"
              className="mt-10 inline-flex h-[60px] w-[176px] items-center justify-center rounded-[4px] bg-nav-dark font-body text-xl font-semibold text-white transition-colors duration-200 hover:bg-nav-dark/90 lg:mt-12"
              variants={fadeInUp}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
