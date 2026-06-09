import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Let's Create Something
              <br />
              <span className="text-cream">Beautiful Together</span>
            </h2>
            <p className="font-body text-secondary-400 leading-relaxed mb-12 max-w-lg">
              Ready to transform your space? We'd love to hear about your project.
              Reach out and let's start the conversation about bringing your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-secondary-500 text-sm">Email us at</p>
                  <a href="mailto:hello@studioelegance.com" className="font-body text-white hover:text-gold transition-colors">
                    hello@studioelegance.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-secondary-500 text-sm">Call us at</p>
                  <a href="tel:+1234567890" className="font-body text-white hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-secondary-500 text-sm">Visit us at</p>
                  <p className="font-body text-white">
                    123 Design Avenue, Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-12 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-body text-secondary-400 text-sm mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-secondary-700 py-3 font-body text-white placeholder:text-secondary-600 focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-body text-secondary-400 text-sm mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-secondary-700 py-3 font-body text-white placeholder:text-secondary-600 focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-body text-secondary-400 text-sm mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b border-secondary-700 py-3 font-body text-white placeholder:text-secondary-600 focus:border-gold focus:outline-none transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-secondary-400 text-sm mb-2 block">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-secondary-700 py-3 font-body text-white placeholder:text-secondary-600 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="I'm looking to redesign my living room..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-charcoal font-body font-medium tracking-wide hover:bg-gold/90 transition-all duration-300 mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
