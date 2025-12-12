import React from 'react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const isDecimal = to % 1 !== 0;
    const increment = isDecimal ? to / steps : Math.ceil(to / steps);

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(
          isDecimal
            ? parseFloat(currentCount.toFixed(1))
            : Math.ceil(currentCount)
        );
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const defaultStats = [
  {
    value: 8,
    suffix: '+',
    label: 'Admin hours saved',
    description:
      'Average admin hours saved per centre manager each week using Toddledo.',
  },
  {
    value: 96,
    suffix: '%',
    label: 'Parent app adoption',
    description:
      'Families actively using Toddledo to receive daily updates and messages.',
  },
  {
    value: 4,
    suffix: 'x',
    label: 'Faster documentation',
    description:
      'Educators complete observations and daily notes up to four times faster.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'APAC-ready',
    description:
      'Designed for Australian and New Zealand centres, funding, and compliance.',
  },
];

const Stats = ({ customStats }) => {
  const stats = customStats || defaultStats;
  const isProjectPage = !!customStats;

  return (
    <section id="stats-section" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {!isProjectPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
                OUR <span className="text-[#3b7bff]">IMPACT</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg text-gray-400 max-w-md">
                Toddledo gives centres back time, clarity, and confidence by
                connecting bookings, billing, documentation, and parent
                communication in one place.
              </p>
            </div>
          </div>
        )}

        {isProjectPage && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
              Project <span className="text-[#3b7bff]">Impact</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1E1E2A] p-8 rounded-2xl h-full border border-white/5"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-6">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
