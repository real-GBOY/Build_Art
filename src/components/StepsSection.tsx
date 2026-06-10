import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import sectionImage from '../../assets/imgs/Image 2.jpg';
import { Icon01Rocket, Icon02Craft, Icon03Execute } from '../icons';
import {
  fadeInUp,
  iconPop,
  slideInRight,
  staggerContainer,
  viewport,
} from '../lib/motion';

const steps: {
  number?: string;
  icon?: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}[] = [
  {
    icon: Icon01Rocket,
    title: 'Start Project',
    description:
      'Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.',
  },
  {
    icon: Icon02Craft,
    title: 'Craft',
    description:
      'Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space.',
  },
  {
    icon: Icon03Execute,
    title: 'Execute',
    description:
      'Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.',
  },
];

export function StepsSection() {
  return (
    <section className="bg-white">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24">
          <div>
            <motion.h2
              className="font-body text-[clamp(2.25rem,5vw,80px)] font-medium leading-[1.05] text-nav-dark"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Designing Your Dream in Three Simple Steps
            </motion.h2>

            <motion.div
              className="mt-10 space-y-10 lg:mt-12 lg:space-y-12"
              variants={staggerContainer(0.14, 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {steps.map((step) => (
                <motion.div key={step.title} className="flex gap-6 lg:gap-8" variants={fadeInUp}>
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-nav-dark lg:h-16 lg:w-16"
                    variants={iconPop}
                  >
                    {step.icon ? (
                      <step.icon className="h-7 w-7 text-white lg:h-8 lg:w-8" />
                    ) : (
                      <span className="font-body text-lg font-semibold text-white lg:text-xl">
                        {step.number}
                      </span>
                    )}
                  </motion.div>

                  <div className="pt-1">
                    <h3 className="font-body text-xl font-semibold text-nav-dark lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-base font-medium leading-[145%] text-nav-muted lg:mt-4 lg:text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="overflow-hidden rounded-[4px] lg:h-full"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              src={sectionImage}
              alt="Modern living room with white sofa and large windows"
              className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
