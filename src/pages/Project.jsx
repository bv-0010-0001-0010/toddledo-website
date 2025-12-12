import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import SectionAnimator from '@/components/SectionAnimator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Toddledo-flavoured project data
const projectData = {
  'operations-hub': {
    title: 'Toddledo Operations Hub',
    category: 'Childcare Operations',
    description:
      'A single operations view for centre leaders that connects enrolments, bookings, rooms, and staffing so every day starts with clarity instead of scrambling.',
    challenge:
      'Leaders were juggling spreadsheets, legacy systems, and paper sign-in sheets to understand who was attending, which rooms were open, and how staffing looked across the day. There was no single place to see the complete picture.',
    solution:
      'We configured Toddledo to become the centre’s operations hub. Enquiries move through to enrolments and bookings, while room occupancy and staffing are visible in real time. Leaders can quickly see gaps, overstaffing, and upcoming changes before they become issues.',
    images: {
      hero: {
        alt: 'Operations dashboard used by childcare centre leadership',
        key: 'toddledo operations dashboard for childcare centres',
      },
      gallery: [
        {
          alt: 'Bookings and room occupancy view for a childcare centre',
          key: 'childcare room occupancy and bookings dashboard',
        },
        {
          alt: 'Daily snapshot showing children and staff across rooms',
          key: 'childcare daily snapshot of children and staff',
        },
        {
          alt: 'Close-up of operations hub interface elements',
          key: 'toddledo childcare operations hub UI close up',
        },
      ],
      gallery2: [
        {
          alt: 'Leadership reviewing operational performance using Toddledo',
          key: 'leadership reviewing childcare operations performance',
        },
        {
          alt: 'Team collaborating around a live operations dashboard',
          key: 'team collaboration around operations dashboard',
        },
      ],
    },
    stats: [
      {
        value: 8,
        suffix: '+',
        label: 'Admin hours saved',
        description:
          'Average weekly admin hours saved per centre manager by centralising operations.',
      },
      {
        value: 3,
        suffix: 'x',
        label: 'Faster decisions',
        description:
          'Leaders can identify occupancy and staffing issues three times faster than before.',
      },
      {
        value: 95,
        suffix: '%',
        label: 'Data in one place',
        description:
          'Key operational information moved out of spreadsheets and emails into Toddledo.',
      },
      {
        value: 100,
        suffix: '%',
        label: 'APAC-ready',
        description:
          'Configured for Australian and New Zealand centres and reporting needs.',
      },
    ],
  },

  'billing-and-ccs': {
    title: 'Billing & CCS Clarity',
    category: 'Billing & Finance',
    description:
      'A billing and funding view that gives centre owners and admins confidence that fees, CCS, and payments are accurate, timely, and easy for families to understand.',
    challenge:
      'Teams were spending hours reconciling invoices, CCS adjustments, and payments between different systems. Families often called to clarify statements, and owners lacked a clear at-a-glance view of revenue and outstanding fees.',
    solution:
      'Toddledo was implemented as the single source of truth for bookings, fees, and statements. Invoices and fee summaries became clearer for families, while owners gained dashboards showing billed, received, and outstanding amounts, with fewer manual corrections.',
    images: {
      hero: {
        alt: 'Billing and CCS dashboard for childcare centre',
        key: 'toddledo childcare billing and ccs dashboard',
      },
      gallery: [
        {
          alt: 'Overview of invoices and payments on a finance dashboard',
          key: 'childcare billing dashboard overview of invoices and payments',
        },
        {
          alt: 'On-the-go view of fees and payments on a mobile device',
          key: 'mobile view of childcare billing summary',
        },
        {
          alt: 'Close-up of charts summarising revenue and gaps',
          key: 'close-up of childcare revenue analytics',
        },
      ],
      gallery2: [
        {
          alt: 'Admin reviewing fee statements and CCS breakdown',
          key: 'admin reviewing childcare fee statements and ccs breakdown',
        },
        {
          alt: 'Security and access controls for finance data',
          key: 'billing dashboard security and access settings',
        },
      ],
    },
    stats: [
      {
        value: 60,
        suffix: '%',
        label: 'Fewer billing queries',
        description:
          'Families raised significantly fewer “what is this charge?” questions after rollout.',
      },
      {
        value: 99.9,
        suffix: '%',
        label: 'System uptime',
        description:
          'Billing and funding data available when centres need it, including peak times.',
      },
      {
        value: 3,
        suffix: 'x',
        label: 'Reconciliation speed',
        description:
          'End-of-period reconciliation became up to three times faster for admin teams.',
      },
      {
        value: 90,
        suffix: '%',
        label: 'Positive feedback',
        description:
          'Leaders and admins reported clearer visibility over fees and revenue.',
      },
    ],
  },

  'parent-app': {
    title: 'Parent App & Daily Updates',
    category: 'Family Engagement',
    description:
      'A modern parent app experience that keeps families connected with daily updates, photos, learning stories, and key information in one place.',
    challenge:
      'Families were receiving updates through a mix of paper notes, ad-hoc emails, and social media. Educators spent extra time responding to repeated questions because information was scattered and not always up to date.',
    solution:
      'Toddledo’s parent-facing experience was rolled out to share real-time updates, routines, and learning stories. Families receive notifications and can review past days easily, while educators log observations and routines as part of their normal workflow.',
    images: {
      hero: {
        alt: 'Mobile interface of a parent communication app for childcare',
        key: 'toddledo parent communication app for childcare centres',
      },
      gallery: [
        {
          alt: 'Parent viewing daily updates and photos on the app',
          key: 'parent viewing childcare daily updates on mobile app',
        },
        {
          alt: 'Summary of a child’s day shown in a clean interface',
          key: 'summary of childs day in childcare app',
        },
        {
          alt: 'Close-up of UI elements showing routines and notes',
          key: 'close up of routines and notes ui in childcare app',
        },
      ],
      gallery2: [
        {
          alt: 'Educator capturing observations to share with families',
          key: 'educator capturing childcare observations on device',
        },
        {
          alt: 'Communication and announcements view for families',
          key: 'announcements and communication feed for childcare families',
        },
      ],
    },
    stats: [
      {
        value: 96,
        suffix: '%',
        label: 'Parent adoption',
        description:
          'Families regularly using the app for daily updates, photos, and announcements.',
      },
      {
        value: 4,
        suffix: 'x',
        label: 'Faster documentation',
        description:
          'Educators record observations and routines up to four times faster than before.',
      },
      {
        value: 70,
        suffix: '%',
        label: 'Drop in repeated questions',
        description:
          'Centres saw fewer repetitive “how was their day?” admin calls and messages.',
      },
      {
        value: 1,
        suffix: 'app',
        label: 'Single source of truth',
        description:
          'Families and educators share one place for updates about each child’s day.',
      },
    ],
  },
};

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const Project = () => {
  const { projectId } = useParams();
  const project = projectData[projectId] || projectData['operations-hub']; // Fallback

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-[#0C0D0D] text-white"
    >
      <Helmet>
        <title>{project.title} – Toddledo case study</title>
        <meta
          name="description"
          content={`Learn how ${project.title} helps childcare centres streamline workflows and support teams, families, and leadership.`}
        />
      </Helmet>

      <main>
        {/* Top Section */}
        <SectionAnimator>
          <header className="pt-48 pb-16">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                {project.description}
              </p>
            </div>
          </header>
        </SectionAnimator>

        {/* Hero Image – keep original image URL, just alt from project data */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#3b7bff]/10">
              <img
                className="w-full h-full object-cover"
                alt={project.images.hero.alt}
                src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/gemini_generated_image_n6u5epn6u5epn6u5-5ABrF.png"
              />
            </div>
          </div>
        </SectionAnimator>

        {/* Gallery – still two square images, same URLs, Toddledo alt text */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.images.gallery[1].alt}
                    src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/gemini_generated_image_mxgp1bmxgp1bmxgp-IDwMQ.png"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.images.gallery[2].alt}
                    src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/gemini_generated_image_mxgp1bmxgp1bmxgp-1-RqwfI.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionAnimator>

        {/* Challenge / Solution text */}
        <SectionAnimator>
          <section className="py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Challenge
                </h2>
                <p className="text-lg text-gray-400">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Solution
                </h2>
                <p className="text-lg text-gray-400">{project.solution}</p>
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* Second gallery – keep image URL, new alt */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt={project.images.gallery2[0].alt}
                src="https://horizons-cdn.hostinger.com/5ab3260f-d079-4967-a3b0-2984f833e2bc/professional-exchange-BmQpX.png"
              />
            </div>
          </div>
        </SectionAnimator>

        {/* Stats Section – reuse Stats with custom Toddledo stats */}
        <Stats customStats={project.stats} />

        {/* Work Together CTA – same structure, Toddledo wording + blue accent */}
        <SectionAnimator>
          <section className="py-24 text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to see Toddledo in your centre?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Book a live demo and we&apos;ll walk you through how these
                workflows can be tailored to your service.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#3b7bff] text-white hover:bg-[#264fb0] group rounded-full text-lg py-7 px-10"
              >
                <Link to="/contact">
                  Book a demo{' '}
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>
        </SectionAnimator>
      </main>
    </motion.div>
  );
};

export default Project;
