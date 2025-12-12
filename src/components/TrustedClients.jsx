import React from 'react';
import { motion } from 'framer-motion';

const clientCentres = [
  { name: 'Harbour View Early Learning', description: 'Multi-room long day care in Sydney' },
  { name: 'Kauri Grove Kindergarten', description: 'Sessional kindergarten in Auckland' },
  { name: 'BrightSteps Childcare', description: 'Community-focused centre network' },
  { name: 'Little Explorers ELC', description: 'Suburban early learning centre' },
  { name: 'Sunshine Kids Kindergarten', description: 'Play-based learning service' },
  { name: 'Oceanview Early Learning', description: 'Coastal long day care service' },
  { name: 'Riverbank Children’s Centre', description: 'Not-for-profit early learning' },
  { name: 'GreenFields ECE Group', description: 'Multi-centre APAC provider' },
];

// duplicate for seamless loop
const marqueeCentres = [...clientCentres, ...clientCentres];

const TrustedClients = () => {
  return (
    <section className="py-16 bg-[#0C0D0D] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b7bff]" />
            Trusted by centres
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Childcare services across ANZ &amp; APAC are moving to{' '}
            <span className="text-[#3b7bff]">Toddledo</span>.
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            From single-site centres to growing groups, Toddledo supports teams who want
            clearer operations, simpler documentation, and better communication with families.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* gradient fades at edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0C0D0D] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0D0D] to-transparent" />

          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 12,
              ease: 'linear',
            }}
          >
            {marqueeCentres.map((centre, index) => (
              <div
                key={`${centre.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center mx-6"
              >
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-base md:text-lg font-semibold text-white/85">
                    {centre.name}
                  </span>
                  <span className="text-xs text-gray-400 mt-1 hidden sm:inline">
                    {centre.description}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
