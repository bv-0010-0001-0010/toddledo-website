import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
  {
    title: 'Enrolments & waitlists',
    description:
      'Capture enquiries, track tours, and move families from waitlist to confirmed enrolment in one place, instead of juggling spreadsheets and email threads.',
  },
  {
    title: 'Attendance & bookings',
    description:
      'See room occupancy at a glance, manage casual and permanent bookings, and keep rolls in sync so staffing and ratios are always under control.',
  },
  {
    title: 'Billing & CCS',
    description:
      'Automate invoices, reconcile payments, and keep childcare subsidy calculations consistent. Toddledo is designed to sit alongside your existing accounting tools.',
  },
  {
    title: 'Educator documentation',
    description:
      'Help educators capture observations, learning stories, routines, and incident reports in seconds with templates and voice-to-text, all aligned to your curriculum.',
  },
  {
    title: 'Parent app & communication',
    description:
      'Give families a dedicated app for daily updates, photos, fees, and important notices, so they feel connected without constant phone calls and emails.',
  },
  {
    title: 'Compliance & reporting',
    description:
      'Keep critical records organised and export the reports you need for A&R visits, funding bodies, and leadership meetings in a few clicks.',
  },
];

const filterTags = ['Centres', 'Educators', 'Families', 'Compliance'];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="services" className="py-24 md:py-28 bg-[#020617] scroll-mt-28">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading + tags */}
        <div className="mb-14 md:mb-16 max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-white uppercase">
            OUR{' '}
            <span className="text-[var(--color-brand-400)]">
              FEATURES
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
            Toddledo is built so centre owners, admins, educators, and families
            can all use the same platform comfortably, without it feeling
            complicated or “too techy”.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            {filterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="px-5 py-2 border border-slate-700 rounded-full text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-slate-200/90 bg-transparent cursor-default"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal accordion list */}
        <div className="border-t border-slate-800">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={service.title}
                className="border-b border-slate-800"
              >
                <div
                  className="flex justify-between items-center cursor-pointer py-7 md:py-8 group"
                  onClick={() => handleServiceClick(index)}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <h3
                      className={`text-2xl md:text-4xl font-semibold transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {service.title}
                    </h3>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: 4 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:flex items-center"
                      >
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_0_6px_rgba(59,123,255,0.35)]" />
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-full border border-slate-600 bg-slate-900/60 group-hover:bg-slate-800/80 text-slate-300 group-hover:text-white shadow-sm"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -16 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-9 pr-0 md:pr-14">
                        <p className="text-base md:text-lg text-slate-300 max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

