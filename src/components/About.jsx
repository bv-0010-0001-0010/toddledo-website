import React from 'react';
import { motion } from 'framer-motion';
import toddledoabout1 from '@/assets/toddledo-about-1.png';
import toddledoabout2 from '@/assets/toddledo-about-2.png';
import toddledoabout3 from '@/assets/toddledo-about-3.png';
import toddledoabout4 from '@/assets/toddledo-about-4.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#eef6ff] via-[#f5f7ff] to-white overflow-hidden scroll-mt-28"
    >
      <div className="container mx-auto px-6">
        {/* Row 1: image left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-slate-200">
              <img
                className="w-full h-full object-cover"
                alt="Centre leadership and admin team collaborating over a childcare management dashboard"
                src={toddledoabout1} // placeholder
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 uppercase">
              We’re simplifying{' '}
              <span className="text-[#3b7bff]">childcare operations</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Less time in systems, more time with children
                </h3>
                <p className="text-lg text-slate-600">
                  Toddledo connects enrolments, bookings, billing, and
                  documentation so centre managers and admins are not jumping
                  between spreadsheets, paper forms, and legacy tools all day.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Built around real centre workflows
                </h3>
                <p className="text-lg text-slate-600">
                  Every feature is designed with how centres actually operate
                  &mdash; from managing waitlists to keeping rooms staffed and
                  families updated &mdash; not how software teams imagine they
                  should.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 uppercase">
              Your centre,{' '}
              <span className="text-[#1b3778]">supported by Toddledo</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Easy for educators and families
                </h3>
                <p className="text-lg text-slate-600">
                  Educators can quickly capture observations, routines, and
                  incidents on the go, while families receive clear daily
                  updates, photos, and fee information in one place.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Clear visibility for leadership
                </h3>
                <p className="text-lg text-slate-600">
                  Centre leaders get a real-time picture of occupancy, fees,
                  and documentation across rooms, so decisions are driven by
                  data, not guesswork.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:order-last"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-slate-200">
              <img
                className="w-full h-full object-cover"
                alt="Educators and centre staff collaborating with tablets and laptops in a bright childcare space"
                src={toddledoabout2} // placeholder
              />
            </div>
          </motion.div>
        </div>

        {/* Row 3: image left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-slate-200">
              <img
                className="w-full h-full object-cover"
                alt="Screens showing enrolments, billing and parent app interfaces"
                src={toddledoabout3} // placeholder
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 uppercase">
              All your key{' '}
              <span className="text-[#3b7bff]">workflows connected</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Enrolments, bookings, and billing
                </h3>
                <p className="text-lg text-slate-600">
                  Move families from enquiry to enrolled, keep bookings up to
                  date, and generate accurate invoices without retyping the
                  same information in multiple places.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Documentation and parent communication
                </h3>
                <p className="text-lg text-slate-600">
                  Observations, learning stories, routines, and daily updates
                  flow into the same platform, so educators and families share
                  one source of truth about each child’s day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 4: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 uppercase">
              Ready for{' '}
              <span className="text-[#1b3778]">APAC growth</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Compliance and reporting built in
                </h3>
                <p className="text-lg text-slate-600">
                  Keep key records organised and export the reports you need
                  for A&amp;R visits, funding bodies, and internal leadership
                  reviews without scrambling at the last minute.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Modern, modular foundation
                </h3>
                <p className="text-lg text-slate-600">
                  Toddledo is built on a modern stack with a modular design, so
                  you can roll out what your service needs now and add more as
                  you grow across centres and regions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:order-last"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-slate-200">
              <img
                className="w-full h-full object-cover"
                alt="Leadership team reviewing childcare analytics and compliance reports on large screen"
                src={toddledoabout4} // placeholder
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

