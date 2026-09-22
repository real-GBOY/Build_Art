import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { fadeInUp, staggerContainer } from '../lib/motion';

const projectTypes = [
  'Living Room Design',
  'Commercial Interior',
  'Office Design',
  'Outdoor Design',
  'Full Home Renovation',
  'Other',
];

const WEB3FORMS_ACCESS_KEY = '8d83d96e-fb9f-4119-9341-25be171c84ac';

export function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Project Request - Build Art',
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-page font-body antialiased">
      <Navbar />
      <main className="bg-page pt-20 lg:pt-[88px]">
        <div className="site-container py-16 lg:py-24">
          <motion.div
            className="mx-auto max-w-2xl"
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-body text-base font-semibold text-nav-muted transition-colors duration-200 hover:text-nav-dark"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                Back to Home
              </Link>
            </motion.div>

            <motion.h1
              className="mt-8 font-body text-[clamp(2.25rem,5vw,64px)] font-medium leading-[1.05] text-nav-dark"
              variants={fadeInUp}
            >
              Start Your Project
            </motion.h1>

            <motion.p
              className="mt-6 font-body text-lg font-medium leading-[145%] text-nav-muted"
              variants={fadeInUp}
            >
              Share a few details about your space and goals. We will get back to you with the next
              steps for your interior design journey.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 rounded-[4px] border border-nav-dark/10 bg-page p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] lg:mt-12 lg:p-10"
              variants={fadeInUp}
            >
              <div>
                <label htmlFor="name" className="mb-2 block font-body text-sm font-semibold text-nav-dark">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="h-14 w-full rounded-[4px] border border-nav-dark/10 bg-page px-5 font-body text-base font-medium text-nav-dark placeholder:text-nav-muted/70 focus:border-nav-dark focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-body text-sm font-semibold text-nav-dark">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="h-14 w-full rounded-[4px] border border-nav-dark/10 bg-page px-5 font-body text-base font-medium text-nav-dark placeholder:text-nav-muted/70 focus:border-nav-dark focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-body text-sm font-semibold text-nav-dark">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  className="h-14 w-full rounded-[4px] border border-nav-dark/10 bg-page px-5 font-body text-base font-medium text-nav-dark placeholder:text-nav-muted/70 focus:border-nav-dark focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block font-body text-sm font-semibold text-nav-dark"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(event) => setFormData({ ...formData, projectType: event.target.value })}
                  className={`h-14 w-full rounded-[4px] border border-nav-dark/10 bg-page px-5 font-body text-base font-medium focus:border-nav-dark focus:outline-none ${
                    formData.projectType ? 'text-nav-dark' : 'text-nav-muted'
                  }`}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-body text-sm font-semibold text-nav-dark">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="w-full resize-none rounded-[4px] border border-nav-dark/10 bg-page px-5 py-4 font-body text-base font-medium text-nav-dark placeholder:text-nav-muted/70 focus:border-nav-dark focus:outline-none"
                  placeholder="Tell us about your space, style preferences, and timeline"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex h-[60px] w-full items-center justify-center rounded-[4px] bg-nav-dark font-body text-xl font-semibold text-white transition-colors duration-200 hover:bg-nav-dark/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Project Request'}
              </button>

              {status === 'success' && (
                <p className="text-center font-body text-base font-medium text-nav-dark">
                  Thank you! Your request has been sent. We will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center font-body text-base font-medium text-red-600">
                  Something went wrong. Please try again or contact us on WhatsApp.
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
