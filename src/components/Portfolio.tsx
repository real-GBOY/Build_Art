import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Loft Living',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Open-concept urban retreat',
  },
  {
    id: 2,
    title: 'Coastal Villa',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mediterranean-inspired interiors',
  },
  {
    id: 3,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dynamic workspace design',
  },
  {
    id: 4,
    title: 'Minimalist Apartment',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Clean lines and natural light',
  },
  {
    id: 5,
    title: 'Boutique Hotel',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury hospitality experience',
  },
  {
    id: 6,
    title: 'Contemporary Kitchen',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Culinary-inspired design',
  },
];

const categories = ['All', 'Residential', 'Commercial'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-12" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-charcoal text-white'
                  : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl text-white mb-2">{project.title}</h3>
                  <p className="font-body text-secondary-300 text-sm">{project.description}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
