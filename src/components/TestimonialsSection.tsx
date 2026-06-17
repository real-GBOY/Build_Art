import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sectionImage from '../../assets/imgs/Image 1.jpg';
import { fadeInUp, slideInLeft, staggerContainer, viewport } from '../lib/motion';

const testimonials = [
  {
    quote:
      'Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!',
    name: 'Sophie Carter',
    location: 'New York, USA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!',
    name: 'James Bennett',
    location: 'Toronto, Canada',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'They took the time to understand our vision and translated it into a design that perfectly reflects our style. The result is a beautiful, functional space.',
    name: 'Annette Black',
    location: 'California, USA',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      'Throughout the process, they remained responsive, professional, and committed to delivering exceptional results. We are thrilled with the final outcome.',
    name: 'Jacob Jones',
    location: 'London, UK',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    quote:
      'Our office redesign completely transformed how our team works. The space feels open, inspiring, and perfectly aligned with our brand identity.',
    name: 'Emily Larson',
    location: 'Chicago, USA',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    quote:
      'From color palettes to furniture selection, every detail felt intentional. The final result exceeded what we imagined for our family home.',
    name: 'Michael Chen',
    location: 'Vancouver, Canada',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    quote:
      'The team balanced aesthetics and practicality beautifully. Our kitchen and dining area now feel like the heart of the home.',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    quote:
      'We loved how clearly they communicated each stage of the project. The finished bedrooms are elegant, cozy, and truly personal.',
    name: 'Daniel Ruiz',
    location: 'Madrid, Spain',
    avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
];

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(24);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isInstant, setIsInstant] = useState(false);

  activeIndexRef.current = activeIndex;

  useLayoutEffect(() => {
    const updateSizes = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const styles = getComputedStyle(viewport);
      const measuredGap =
        parseFloat(styles.getPropertyValue('--carousel-gap')) ||
        (window.innerWidth >= 1024 ? 32 : 24);

      const isSingleCard = window.innerWidth < 640;
      const count = isSingleCard ? 1 : 2;
      const width = isSingleCard
        ? viewport.offsetWidth
        : (viewport.offsetWidth - measuredGap) / count;

      setVisibleCount(count);
      setGap(measuredGap);
      setCardWidth(width);
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const slides = [...testimonials, ...testimonials.slice(0, visibleCount)];
  const stepSize = cardWidth + gap;

  const goToPrevious = () => {
    if (isInstant || !cardWidth) return;

    if (activeIndexRef.current === 0) {
      setIsInstant(true);
      setActiveIndex(testimonials.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsInstant(false);
          setActiveIndex(testimonials.length - 1);
        });
      });
      return;
    }

    setActiveIndex((index) => index - 1);
  };

  const goToNext = () => {
    if (isInstant || !cardWidth) return;

    setActiveIndex((index) => {
      if (index >= testimonials.length - 1) {
        return testimonials.length;
      }

      return index + 1;
    });
  };

  const handleAnimationComplete = () => {
    if (activeIndexRef.current === testimonials.length) {
      setIsInstant(true);
      setActiveIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsInstant(false));
      });
    }
  };

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(testimonials.length - visibleCount, 0)));
  }, [visibleCount]);

  return (
    <section className="overflow-hidden bg-white">
      <div className="site-container py-16 lg:py-24">
        <div className="relative">
          <motion.div
            className="relative z-0 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%] lg:pb-[72px]"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative z-0 h-[400px] overflow-hidden rounded-[4px] sm:h-[480px] lg:h-full">
              <img
                src={sectionImage}
                alt="Elegant interior living space"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="relative z-40 mt-6 flex gap-4 lg:absolute lg:bottom-0 lg:left-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goToPrevious}
              disabled={isInstant || !cardWidth}
              className="pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-[4px] border border-nav-dark/15 bg-white text-nav-dark transition-colors duration-200 hover:border-nav-dark hover:bg-nav-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goToNext}
              disabled={isInstant || !cardWidth}
              className="pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-[4px] border border-nav-dark/15 bg-white text-nav-dark transition-colors duration-200 hover:border-nav-dark hover:bg-nav-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </motion.div>

          <motion.div
            className="relative z-20 mt-10 lg:mt-0 lg:pl-[32%]"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2
              className="text-start font-body text-[clamp(2rem,3.5vw,56px)] font-medium leading-[1.1] text-nav-dark lg:ml-[15%] lg:max-w-[85%]"
              variants={fadeInUp}
            >
              What Our Customers Say
            </motion.h2>

            <motion.div
              ref={viewportRef}
              className="mt-8 overflow-hidden [--carousel-gap:1.5rem] lg:mt-12 lg:[--carousel-gap:2rem]"
              variants={fadeInUp}
            >
              <motion.div
                className="flex"
                style={{ gap }}
                animate={{ x: cardWidth ? -activeIndex * stepSize : 0 }}
                transition={
                  isInstant
                    ? { duration: 0 }
                    : { duration: 0.45, ease: [0.4, 0, 0.2, 1] }
                }
                onAnimationComplete={handleAnimationComplete}
              >
                {slides.map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    style={{ width: cardWidth || undefined }}
                    className={`relative flex min-h-[380px] shrink-0 flex-col rounded-[2px] border-[6px] border-white bg-nav-dark p-10 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)] sm:aspect-square sm:min-h-0 lg:p-12 xl:p-14 ${
                      index >= activeIndex && index < activeIndex + visibleCount ? 'z-30' : 'z-20'
                    }`}
                  >
                    <span
                      className="mb-8 block shrink-0 font-body text-5xl font-medium leading-none text-white lg:text-6xl"
                      aria-hidden
                    >
                      “
                    </span>

                    <p className="flex-1 text-start font-body text-base font-medium leading-[160%] text-white lg:text-lg">
                      {testimonial.quote}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        className="h-12 w-12 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-body text-base font-semibold text-white lg:text-lg">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-sm font-medium text-white/60">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
