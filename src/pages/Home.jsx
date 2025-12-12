import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Toddledo – All-in-one Childcare Management System</title>
        <meta
          name="description"
          content="Toddledo is an all-in-one childcare management platform for centres across Australia and New Zealand, connecting enrolments, bookings, documentation, billing, and parent communication in one modern system."
        />
      </Helmet>
      <Hero />
      <SectionAnimator>
        <TrustedClients />
      </SectionAnimator>
      <SectionAnimator>
        <Services />
      </SectionAnimator>
      <About />
      <SectionAnimator>
        <Portfolio />
      </SectionAnimator>
      <SectionAnimator>
        <Testimonials />
      </SectionAnimator>
      <SectionAnimator>
        <Stats />
      </SectionAnimator>
      <SectionAnimator>
        <CTA />
      </SectionAnimator>
    </>
  );
};

export default Home;
