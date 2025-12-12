import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCtaBackground from '@/components/AnimatedCtaBackground';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Same animated gradient style as hero */}
      <AnimatedCtaBackground />
      {/* Dark overlay to match hero mood */}
      {/* <div className="absolute inset-0 bg-slate-950/60"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#0b1530]/85 to-[#edf3fc]/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase">
            Ready to transform your{' '}
            <span className="text-[#3b7bff]">childcare operations</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book a live Toddledo demo and see how enrolments, bookings,
            documentation, billing, and parent communication can come together
            in one calm, modern platform for your centre.
          </p>
          <div>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-[#3b7bff] hover:bg-[#264fb0] text-white font-bold px-10 py-7 text-xl rounded-full group shadow-lg shadow-[#1b3778]/40"
            >
              Book a live demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
