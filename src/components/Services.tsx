import { motion } from 'framer-motion';
import { Lamp, Sofa, TreePine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '../lib/motion';

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Lamp,
    title: 'Lighting Design',
    description:
      'Achieve the perfect balance of ambient, task, and accent lighting for a warm, inviting atmosphere in every room.',
  },
  {
    icon: Sofa,
    title: 'Interior Design',
    description:
      'From concept to completion, we create personalized spaces that reflect your unique style and enhance your daily living.',
  },
  {
    icon: TreePine,
    title: 'Outdoor Design',
    description:
      'Transform outdoor areas into functional, beautiful extensions of your home with tailored landscape and patio design.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="site-container py-16 lg:py-24">
        <motion.h2
          className="mb-12 font-body text-3xl font-medium text-nav-dark lg:mb-20 lg:text-[40px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="mr-3 text-nav-muted">—</span>
          Our Services
        </motion.h2>

        <motion.div
          className="grid gap-12 md:grid-cols-3 lg:gap-16 xl:gap-24"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <service.icon
                className="mb-6 h-10 w-10 text-nav-dark"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mb-4 font-body text-xl font-semibold text-nav-dark lg:text-2xl">
                {service.title}
              </h3>
              <p className="font-body text-base font-medium leading-[145%] text-nav-muted lg:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
