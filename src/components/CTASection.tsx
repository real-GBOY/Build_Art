import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../lib/motion';

export function CTASection() {
  return (
    <section className="bg-nav-dark">
      <div className="site-container py-16 lg:py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            className="font-body text-[clamp(2rem,4vw,56px)] font-medium leading-[1.1] text-white"
            variants={fadeInUp}
          >
            Ready to Transform Your Space?
          </motion.h2>

          <motion.p
            className="mt-6 font-body text-base font-medium leading-[145%] text-white/70 lg:mt-8 lg:text-xl"
            variants={fadeInUp}
          >
            Tell us about your vision and our design team will help you create a space that feels
            elegant, personal, and beautifully finished.
          </motion.p>

          <motion.div className="mt-10 lg:mt-12" variants={fadeInUp}>
            <Link
              to="/form"
              className="inline-flex h-[60px] min-w-[220px] items-center justify-center rounded-[4px] bg-white px-10 font-body text-xl font-semibold text-nav-dark transition-colors duration-200 hover:bg-white/90 lg:h-[68px] lg:min-w-[260px] lg:text-2xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
