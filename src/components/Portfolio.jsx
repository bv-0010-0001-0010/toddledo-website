import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// (Currently not used in this file, but kept for future project pages)
const projects = [
  {
    id: 1,
    slug: 'operations-hub',
    title: 'Centre operations hub',
    description:
      'A unified operations view that brings enrolments, bookings, rooms, and staffing into one real-time dashboard.',
    imgKey: 'childcare operations dashboard on tablet',
  },
  {
    id: 2,
    slug: 'billing-and-ccs',
    title: 'Billing & CCS visibility',
    description:
      'A billing and CCS experience that gives leaders clarity on fees, gaps, and payments at a glance.',
    imgKey: 'childcare billing dashboard on laptop',
  },
  {
    id: 3,
    slug: 'parent-app',
    title: 'Parent app & daily updates',
    description:
      'A modern parent app that keeps families connected with updates, photos, and announcements in real time.',
    imgKey: 'parent communication app on phone',
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D] scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase text-white/80">
              Success stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              See how centres use{' '}
              <span className="text-[#3b7bff]">Toddledo in action</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              From daily operations to billing and family communication, these
              scenarios show how Toddledo fits into real childcare centres
              across ANZ and APAC.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 – Operations hub */}
          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('operations-hub')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Centre leadership team reviewing a childcare operations dashboard on a device"
              src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Centre operations hub
                  </h3>
                  <p className="text-sm text-gray-300">
                    Enrolments, bookings, rooms, and staffing in one live view.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 – Billing & CCS */}
          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('billing-and-ccs')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Modern childcare billing and CCS dashboard on a screen beside a keyboard"
              src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Billing & CCS visibility
                  </h3>
                  <p className="text-sm text-gray-300">
                    Clear fees, CCS entitlements, and payments at a glance.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 – Parent app */}
          <div
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick('parent-app')}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Mobile view of a parent communication app for childcare centres"
              src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Parent app & daily updates
                  </h3>
                  <p className="text-sm text-gray-300">
                    Real-time updates, photos, and announcements for families.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
