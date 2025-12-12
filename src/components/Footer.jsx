// src/components/Footer.jsx
import React from "react";
import { Youtube, Twitter, Linkedin, Instagram } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import ToddledoLogo from "@/assets/toddledo-logo-mark-transparent.png"; // use the same mark as header

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialClick = () => {
    toast({
      title: "Feature not implemented 🚧",
      description:
        "This feature isn't implemented yet—but you can ask for it in your next prompt! 🚀",
    });
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" || path === "") {
      navigate("/");
      setTimeout(() => {
        if (id) {
          const targetElement = document.getElementById(id);
          if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      handleSocialClick();
    }
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/#" },
        { name: "Features", href: "/#services" },
        { name: "Why Toddledo?", href: "/#about" },
        { name: "Success stories", href: "/#portfolio" },
        { name: "Testimonials", href: "/#testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Contact us", href: "/contact" },
        { name: "Careers", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Terms of service", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Youtube size={20} />, name: "YouTube" },
    { icon: <Twitter size={20} />, name: "Twitter" },
    { icon: <Linkedin size={20} />, name: "LinkedIn" },
    { icon: <Instagram size={20} />, name: "Instagram" },
  ];

  return (
    <footer className="bg-[#050816] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-10 lg:gap-x-12">
          {/* Brand block (Agency-style, but Toddledo header look) */}
          <div className="md:col-span-3 lg:col-span-1">
            <button
              aria-label="scroll to top"
              type="button"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm backdrop-blur overflow-hidden">
                <img
                  aria-label="Toddledo logo"
                  src={ToddledoLogo}
                  alt="Toddledo logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-base sm:text-lg font-semibold text-white leading-tight">
                  Toddledo
                </span>

                <span className="text-xs sm:text-sm text-white/60 leading-tight whitespace-nowrap">
                  Childcare simplified
                </span>
              </div>

            </button>

          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-0">
              <p className="font-semibold text-white mb-6">{section.title}</p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/contact") {
                          e.preventDefault();
                          navigate("/contact");
                        } else if (link.href.includes("#")) {
                          handleNavClick(e);
                        } else {
                          e.preventDefault();
                          handleSocialClick();
                        }
                      }}
                      className="text-gray-400 hover:text-[var(--color-brand-400)] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div>
            <p className="font-semibold text-white mb-6">Connect With Us</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={handleSocialClick}
                  className="text-gray-400 hover:text-[var(--color-brand-400)] transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Toddledo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
