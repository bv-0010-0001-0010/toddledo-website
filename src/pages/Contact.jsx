import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const ContactInfoBlock = ({ title, lines, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-8"
  >
    <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">
      {title}
    </h3>
    <div className="space-y-1">
      {lines.map((line, index) => (
        <p key={index} className="text-lg text-gray-200">
          {line}
        </p>
      ))}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Contact Toddledo – Book a demo or ask a question</title>
        <meta
          name="description"
          content="Reach out to the Toddledo team to book a live demo, discuss your childcare centre workflows, or explore partnership opportunities across Australia, New Zealand, and APAC."
        />
      </Helmet>
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white uppercase mb-6 leading-tight">
                Talk to the{' '}
                <span className="text-[#3b7bff]">Toddledo team</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-sm mb-16">
                Share a bit about your childcare centre or group and we&apos;ll
                walk you through how Toddledo can support your team, families,
                and compliance.
              </p>
              <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="text-lg text-gray-300">
                  Product overview
                </span>
                <span className="text-lg text-gray-300">
                  Implementation &amp; onboarding
                </span>
                <span className="text-lg text-gray-300">
                  Support &amp; questions
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <ContactInfoBlock
                    title="Centres & demo enquiries"
                    lines={['hello@toddledo.com', '+61 (00) 0000 0000']}
                    delay={0.4}
                  />
                  <ContactInfoBlock
                    title="Partnerships & integrations"
                    lines={['partners@toddledo.com', 'Based in ANZ, supporting APAC']}
                    delay={0.6}
                  />
                </div>
                <div>
                  <ContactInfoBlock
                    title="Where we support centres from"
                    lines={[
                      'Australia & New Zealand',
                      'Supporting centres across APAC',
                    ]}
                    delay={0.5}
                  />
                </div>
              </div>

              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl shadow-[#3b7bff]/15"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <img
                  className="w-full h-auto object-cover"
                  alt="Modern workspace where the Toddledo team supports childcare centres"
                  src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/modern-office-concentration-RCQmi.png"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;



