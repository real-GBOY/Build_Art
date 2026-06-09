import { motion } from 'framer-motion';
import { Paintbrush, Ruler, Lightbulb, Home } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Paintbrush,
    title: 'Residential Design',
    description:
      'Transform your home into a personalized sanctuary that reflects your unique style and enhances daily living.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description:
      'Optimize your space with thoughtful layouts that maximize functionality while maintaining aesthetic harmony.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Development',
    description:
      'From initial vision to detailed concepts, we develop comprehensive design strategies tailored to your needs.',
  },
  {
    icon: Home,
    title: 'Commercial Projects',
    description:
      'Create inspiring work environments that boost productivity and leave lasting impressions on clients.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
              className="group"
            >
              <div className="bg-white p-8 h-full hover:shadow-xl transition-all duration-500 border border-primary-100">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-primary-100 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-4">{service.title}</h3>
                <p className="font-body text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
