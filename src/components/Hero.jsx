
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

const Hero = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/contact');
  };

  const handleExploreFeatures = () => {
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pb-20">
      <AnimatedHeroBackground />

      {/* Dark-to-light overlay with a softer bottom fade */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/96 via-[#020617]/90 to-[#e3edf9]/92" /> */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0b1530]/70 via-[#0b1530]/60 to-[#eef6ff]/95" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#0b1530]/85 to-[#edf3fc]/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-left md:text-center space-y-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-sm text-primary"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">
              Built for childcare centres across ANZ &amp; APAC
            </span>
          </motion.div>

          {/* Headline + subcopy */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              All-in-one childcare management,
              <span className="block text-gradient">
                without the admin chaos.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto md:text-center">
              Toddledo brings enrolments, bookings, billing, educator
              documentation, and parent communication into one simple platform,
              so your team spends more time with children, not spreadsheets.
            </p>
          </motion.div>

          {/* CTA glass card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex justify-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-3 md:gap-4 px-4 py-4 sm:px-6 sm:py-5 rounded-2xl bg-white/10 border border-white/25 backdrop-blur-xl shadow-xl">
              <Button
                size="lg"
                className="px-7 sm:px-8 py-5 text-base md:text-lg shadow-lg bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white"
                onClick={handleDemoClick}
              >
                Book a live demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-7 sm:px-8 py-5 text-base md:text-lg border-white/60 text-white/95 bg-white/5 hover:bg-white/10 hover:text-white"
                onClick={handleExploreFeatures}
              >
                Explore features
              </Button>
            </div>
          </motion.div>

          {/* Mini stats glass card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-6 flex justify-center"
          >
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900/55 border border-white/15 backdrop-blur-md
              grid grid-cols-1 min-[520px]:grid-cols-3
              divide-y divide-white/10 min-[520px]:divide-y-0 min-[520px]:divide-x"
            >
              <div className="px-6 py-5 md:px-8 md:py-6 text-center min-[520px]:text-left">
                <p className="text-lg font-semibold text-white">8+ hours</p>
                <p className="text-xs sm:text-sm text-slate-200/85">
                  admin saved per week for centre managers on average.
                </p>
              </div>

              <div className="px-6 py-5 md:px-8 md:py-6 text-center min-[520px]:text-left">
                <p className="text-lg font-semibold text-white">Real-time</p>
                <p className="text-xs sm:text-sm text-slate-200/85">
                  updates for parents with a dedicated parent app.
                </p>
              </div>

              <div className="px-6 py-5 md:px-8 md:py-6 text-center min-[520px]:text-left">
                <p className="text-lg font-semibold text-white">APAC-ready</p>
                <p className="text-xs sm:text-sm text-slate-200/85">
                  designed for Australian and New Zealand compliance first.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

