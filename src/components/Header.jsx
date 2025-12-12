import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ToddledoLogo from "@/assets/toddledo-logo-mark-transparent.png";

const navLinks = [
  { name: "Features", href: "/#services" },
  { name: "Why Toddledo?", href: "/#about" },
  { name: "Success stories", href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);


  const handleHomeClick = () => {
    navigate("/");
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" && id) {
      navigate(path);
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      navigate(href);
    }

    setIsOpen(false);
  };

  const handleContact = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  const handleBookDemo = () => {
    // for now route to contact as well – we can later hook this
    // to a dedicated demo section or form if you want
    navigate("/contact");
    setIsOpen(false);
  };

  // Dark, hero-friendly header; adds blur + border when scrolled
  const headerClasses =
    "fixed top-0 inset-x-0 z-40 transition-all duration-300 " +
    (isScrolled
      ? "bg-[#0b1530]/95 backdrop-blur border-b border-slate-800/60 shadow-sm"
      : "bg-transparent");

  const desktopLinkClass =
    "text-sm font-medium text-slate-100/90 hover:text-white transition-colors";

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
          {/* Brand: logo + text */}
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex items-center gap-3"
          >
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm backdrop-blur overflow-hidden">
              <img
                src={ToddledoLogo}
                alt="Toddledo logo"
                aria-label="Toddledo logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm md:text-base font-semibold text-white">
                Toddledo
              </span>
              <span className="hidden lg:block text-xs text-slate-200/70">
                Childcare simplified
              </span>

            </div>
          </button>

          {/* Desktop nav */}
          {/* <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className={desktopLinkClass}
              >
                {link.name}
              </a>
            ))}
          </nav> */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className="relative group whitespace-nowrap text-[13px] lg:text-sm font-medium text-slate-100/90 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-[var(--color-brand-400)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>


          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Button
              variant="outline"
              className="text-sm border-white/40 text-white bg-white/5 hover:bg-white/10 hover:text-white"
              onClick={handleContact}
            >
              Contact us
            </Button>
            <Button
              className="text-sm shadow-sm bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white"
              onClick={handleBookDemo}
            >
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Button
              variant="outline"
              aria-label="Contact us"
              className="whitespace-nowrap text-sm px-5 border-white/40 text-white bg-white/5 hover:bg-white/10 hover:text-white"
              onClick={handleContact}
            >
              Contact us
            </Button>

            <Button
              aria-label="Book a demo"
              className="whitespace-nowrap text-sm px-5 shadow-sm bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white group"
              onClick={handleBookDemo}
            >
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="menu button"
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/40 bg-white/10 shadow-sm"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu – agency style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 md:hidden bg-[#050816] text-white"
          >
            <div className="flex flex-col h-full px-6 pt-6 pb-8">
              {/* Top row inside menu */}
              <div className="flex items-center justify-between mb-10">
                <button
                  type="button"
                  aria-label="open menu"
                  onClick={handleHomeClick}
                  className="flex items-center gap-3"
                >
                  <div className="h-9 w-9 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center shadow-sm overflow-hidden">
                    <img
                      src={ToddledoLogo}
                      alt="Toddledo logo"
                      aria-label="Toddledo logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-base font-semibold">Toddledo</span>
                </button>
                <button
                  type="button"
                  aria-label="close menu"
                  onClick={() => setIsOpen(false)}
                  className="h-9 w-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links – centre of the screen */}
              <nav className="flex-1 flex flex-col justify-center items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleSmoothScroll}
                    className="text-3xl font-semibold text-white/90 hover:text-[var(--color-brand-400)] transition-colors whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>


              {/* Bottom CTAs */}
              <div className="py-8 flex flex-col gap-4">
                <Button
                  aria-label="Book a demo"
                  className="w-full text-lg py-6 rounded-full bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white group"
                  onClick={handleBookDemo}
                >
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <Button
                  aria-label="Contact us"
                  variant="outline"
                  className="w-full text-lg py-6 rounded-full border-white/30 text-white bg-transparent hover:bg-white/5 whitespace-nowrap"
                  onClick={handleContact}
                >
                  Contact us
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

