import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const serviceData = [
  {
    wing: "I. The Author's Wing",
    subtitle: "Intellectual Property & Publishing",
    items: [
      {
        specialization: "Audiobook & Multi-Format Launch Management",
        description:
          "Directing production logistics for audiobooks (vetting voice talent, ACX coordination) and managing multi-platform digital launches.",
      },
      {
        specialization: "Author Platform & Newsletter Architecture",
        description:
          "Structuring beautifully minimalist Substack, Ghost, or ConvertKit environments to cultivate direct, high-value reader relationships.",
      },
      {
        specialization: "Research Dossier Curation",
        description:
          "Conducting historical, cultural, or industry-specific deep dives to build highly organized context dossiers for your upcoming book projects.",
      },
      {
        specialization: "Grant, Fellowship & Award Submissions",
        description:
          "Vetting elite literary awards, managing complex application cycles, and organizing portfolio submissions with flawless administrative precision.",
      },
    ],
  },
  {
    wing: "II. The Editorial Wing",
    subtitle: "Premium Document & Asset Design",
    items: [
      {
        specialization: "Bespoke Media Kit Design",
        description:
          "Developing sophisticated, editorial-grade press kits, speaker sheets, and author profiles that immediately command the attention of journalists.",
      },
      {
        specialization: "Brand Guideline & Asset Standardization",
        description:
          "Encoding your brand's visual DNA—typography, layout grids, spacing rules, and voice guidelines—into a pristine, master digital asset book.",
      },
      {
        specialization: "Intellectual Property Digitization",
        description:
          "Translating physical notes, canvas sketches, or analog manuscript drafts into perfectly structured, cloud-archived vector or markdown formats.",
      },
    ],
  },
  {
    wing: "III. The Operations Wing",
    subtitle: "Bespoke Business Management",
    items: [
      {
        specialization: "Launch & Project Directorship",
        description:
          "Acting as the centralized project manager for high-stakes initiatives, coordinating timelines across cover designers, copyeditors, and web teams.",
      },
      {
        specialization: "Digital Security & Asset Auditing",
        description:
          "Conducting private audits of password architectures, digital storage (Drive, Dropbox), and sensitive client lists to implement high-tier privacy practices.",
      },
      {
        specialization: "Bespoke Travel & Speaking Logistics",
        description:
          "Orchestrating end-to-end luxury itineraries for book tours, speaking engagements, and private retreats, complete with comprehensive digital itineraries.",
      },
    ],
  },
  {
    wing: "IV. The Private Client Wing",
    subtitle: "Elite Administrative Support",
    items: [
      {
        specialization: "Lifestyle Concierge Integration",
        description:
          "Managing high-end personal requests, from securing premium gallery acquisitions and fine dining reservations to sourcing rare editions of books.",
      },
      {
        specialization: "Family Office Operational Support",
        description:
          "Managing the digital filing, cross-vendor communication, and document workflows for private family offices or asset portfolios.",
      },
      {
        specialization: "Correspondence Curating",
        description:
          "Triage and drafting of high-priority correspondences, ensuring every outgoing communication reflects your signature prestige tone.",
      },
    ],
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeWing, setActiveWing] = useState(0);
  const [closing, setClosing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabsRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (openMenu === "services" && tabsRef.current) {
      const activeTab = tabsRef.current.children[activeWing];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeWing, openMenu]);
  useEffect(() => {
    if (openMenu !== null || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu, mobileMenuOpen]);

  const toggleMenu = (menu) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        setOpenMenu(menu);
      }, 300);
      return;
    }

    if (openMenu === menu) {
      setClosing(true);
      setTimeout(() => {
        setOpenMenu(null);
        setClosing(false);
      }, 350);
    } else {
      setClosing(false);
      setOpenMenu(menu);
      setMobileMenuOpen(false);
    }
  };

  const isOpen = openMenu !== null && !closing;

  const scrollToSection = (id) => {
    setOpenMenu(null);
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      label: "Service Wing",
      action: () => toggleMenu("services"),
      key: "services",
    },
    {
      label: "Manifesto",
      action: () => toggleMenu("manifesto"),
      key: "manifesto",
    },
    {
      label: "The Mark",
      action: () => scrollToSection("the-mark"),
      key: "the-mark",
    },
    {
      label: "The Stories",
      action: () => scrollToSection("reviews"),
      key: "reviews",
    },
    {
      label: "Careers",
      action: () => {
        setOpenMenu(null);
        setMobileMenuOpen(false);
        navigate("/careers");
      },
      key: "careers",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Nav bar */}
      <div
        className={`flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 md:py-6 lg:py-8 transition-all duration-500 ${
          openMenu !== null || mobileMenuOpen || scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        {/* Left group: Logo + Desktop Nav */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* Brand mark */}
          <button
            onClick={() => {
              setOpenMenu(null);
              setMobileMenuOpen(false);
              if (location.pathname !== "/") {
                navigate("/");
              }
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="relative transition-all duration-500 opacity-100 flex-shrink-0"
          >
            <img
              src="/images/logo2.png"
              alt="Azimuth Concierge Group"
              className="absolute top-1/2 -translate-y-1/2 left-0 h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
            />
            <span className="opacity-0 pointer-events-none h-12 md:h-16 lg:h-20 xl:h-24 w-12 md:w-16 lg:w-20 xl:w-24 block" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={item.action}
                className="group relative py-2"
              >
                <span
                  className={`tracking-[0.25em] text-xs xl:text-sm uppercase font-light transition-all duration-300 ${
                    openMenu === item.key
                      ? "text-[#c9a95a]"
                      : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-px bg-[#c9a95a] transition-all duration-500 ${
                    openMenu === item.key ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Hamburger */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            if (openMenu) setOpenMenu(null);
          }}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center flex-shrink-0"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[72px] bg-black/95 backdrop-blur-xl z-40 animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col px-6 py-8 gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={item.action}
                className="text-left py-4 border-b border-white/[0.04] group"
              >
                <span className="text-white/70 text-sm tracking-[0.3em] uppercase font-light group-hover:text-[#c9a95a] transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dropdown backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
          onClick={() => toggleMenu(openMenu)}
        />
      )}

      {/* Service Wing Dropdown - Desktop */}
      <div
        className={`hidden lg:block transition-all duration-500 origin-top ${
          openMenu === "services"
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none absolute"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-12 lg:px-24 py-8 lg:py-12 max-h-[80vh] overflow-y-auto">
          <div className="max-w-full">
            <div className="flex flex-wrap gap-6 lg:gap-10 mb-8 lg:mb-10">
              {serviceData.map((wing, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWing(index)}
                  className="group relative py-2"
                >
                  <span
                    className={`text-[10px] md:text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 ${
                      activeWing === index
                        ? "text-[#c9a95a]"
                        : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {wing.wing.split(". ")[1]}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#c9a95a]/50 transition-all duration-500 ${
                      activeWing === index ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent mb-8 lg:mb-10" />

            <div className="animate-[fadeUp_0.5s_ease-out]" key={activeWing}>
              <p className="text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 lg:mb-6">
                {serviceData[activeWing].subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6 lg:gap-y-8">
                {serviceData[activeWing].items.map((item, i) => (
                  <div
                    key={i}
                    className="group/item border-l border-white/[0.06] pl-4 lg:pl-6 hover:border-[#c9a95a]/40 transition-all duration-500 py-1"
                  >
                    <h4 className="text-white/80 text-xs md:text-sm font-light tracking-wide mb-1 lg:mb-2 group-hover/item:text-white transition-colors duration-300">
                      {item.specialization}
                    </h4>
                    <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed group-hover/item:text-white/55 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Wing Dropdown - Mobile/Tablet */}
      {openMenu === "services" && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[72px] bg-black/95 backdrop-blur-xl z-40 animate-[fadeIn_0.3s_ease-out] overflow-y-auto">
          <div className="px-6 py-8">
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2" ref={tabsRef}>
              {serviceData.map((wing, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWing(index)}
                  className="flex-shrink-0 group relative py-2"
                >
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 whitespace-nowrap ${
                      activeWing === index ? "text-[#c9a95a]" : "text-white/30"
                    }`}
                  >
                    {wing.wing.split(". ")[1]}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#c9a95a]/50 transition-all duration-500 ${
                      activeWing === index ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="w-full h-px bg-white/[0.06] mb-6" />

            <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-4">
              {serviceData[activeWing].subtitle}
            </p>

            <div className="space-y-6">
              {serviceData[activeWing].items.map((item, i) => (
                <div key={i} className="border-l border-white/[0.06] pl-4">
                  <h4 className="text-white/80 text-sm font-light tracking-wide mb-1">
                    {item.specialization}
                  </h4>
                  <p className="text-white/40 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Manifesto Dropdown - Desktop */}
      <div
        className={`hidden lg:block transition-all duration-500 origin-top ${
          openMenu === "manifesto"
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none absolute"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/[0.06] max-h-[80vh] overflow-y-auto">
          <div className="px-6 md:px-12 lg:px-24 py-16 lg:py-28">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-8 bg-[#c9a95a]/40" />
                <p className="text-[#c9a95a] tracking-[0.35em] text-[10px] md:text-xs uppercase font-light">
                  The Azimuth Manifesto
                </p>
              </div>

              <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] mb-4 leading-tight">
                THE COVETED
                <br />
                STANDARD
              </h3>

              <p className="text-white/40 text-sm md:text-base lg:text-lg font-light italic mb-12 lg:mb-16">
                On the Art of Deliberate Scale.
              </p>

              <div className="w-20 h-px bg-[#c9a95a] mb-12 lg:mb-16" />

              <div className="space-y-6 lg:space-y-8 text-white/55 text-sm md:text-base font-light leading-relaxed">
                <p>
                  <span className="float-left text-[#c9a95a] text-5xl md:text-7xl lg:text-8xl font-serif-premium leading-[0.7] mr-3 md:mr-4 mt-1 md:mt-2">
                    I
                  </span>
                  n an era obsessed with infinite growth, automated templates,
                  and mass-produced support queues, true devotion has become a
                  relic. The modern world moves fast, often at the expense of
                  depth, precision, and soul.
                </p>

                <p className="text-white/70 font-light italic">
                  We chose a different path.
                </p>

                <p>
                  At Azimuth, we believe that exceptional operational
                  partnership cannot be scaled. It cannot be automated, and it
                  certainly cannot be outsourced to a rotating roster of
                  anonymous accounts. Whether we are hand-crafting the interior
                  typography of a legacy manuscript, structuring a seamless
                  executive workflow, or acting as the quiet custodian of a
                  private client&rsquo;s daily logistics, the work demands
                  absolute, uninterrupted presence.
                </p>

                <div className="border-l-2 border-[#c9a95a] pl-5 md:pl-6 py-3 my-6 lg:my-8">
                  <p className="text-[#c9a95a] text-base md:text-lg lg:text-xl font-light tracking-wide">
                    This is why we strictly limit our active portfolio to just
                    ten clients.
                  </p>
                </div>

                <p>
                  By closing our registry at ten, we protect the creative and
                  operational peace of our partners. We ensure that when you
                  step into our virtual lobby, you are met with a team that
                  deeply understands your voice, anticipates your needs, and
                  possesses the cognitive bandwidth to execute your vision with
                  museum-grade precision.
                </p>

                <p>
                  We do not seek to serve the masses. We exist to elevate the
                  few who refuse to compromise on the finer details.
                </p>

                <p className="text-white/70 font-light tracking-wide pt-4">
                  This is not business as usual. This is the concierge standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manifesto Dropdown - Mobile/Tablet */}
      {openMenu === "manifesto" && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[72px] bg-black/95 backdrop-blur-xl z-40 animate-[fadeIn_0.3s_ease-out] overflow-y-auto">
          <div className="px-6 py-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#c9a95a]/40" />
              <p className="text-[#c9a95a] tracking-[0.35em] text-[9px] uppercase font-light">
                The Azimuth Manifesto
              </p>
            </div>

            <h3 className="text-white text-2xl font-light tracking-[0.05em] mb-3 leading-tight">
              THE COVETED
              <br />
              STANDARD
            </h3>

            <p className="text-white/40 text-sm font-light italic mb-10">
              On the Art of Deliberate Scale.
            </p>

            <div className="w-16 h-px bg-[#c9a95a] mb-10" />

            <div className="space-y-6 text-white/55 text-sm font-light leading-relaxed">
              <p>
                <span className="float-left text-[#c9a95a] text-5xl font-serif-premium leading-[0.7] mr-3 mt-1">
                  I
                </span>
                n an era obsessed with infinite growth, automated templates, and
                mass-produced support queues, true devotion has become a relic.
                The modern world moves fast, often at the expense of depth,
                precision, and soul.
              </p>

              <p className="text-white/70 font-light italic">
                We chose a different path.
              </p>

              <p>
                At Azimuth, we believe that exceptional operational partnership
                cannot be scaled. It cannot be automated, and it certainly
                cannot be outsourced to a rotating roster of anonymous accounts.
              </p>

              <div className="border-l-2 border-[#c9a95a] pl-4 py-2 my-6">
                <p className="text-[#c9a95a] text-base font-light tracking-wide">
                  This is why we strictly limit our active portfolio to just ten
                  clients.
                </p>
              </div>

              <p>
                By closing our registry at ten, we protect the creative and
                operational peace of our partners. We ensure that when you step
                into our virtual lobby, you are met with a team that deeply
                understands your voice, anticipates your needs, and possesses
                the cognitive bandwidth to execute your vision with museum-grade
                precision.
              </p>

              <p>
                We do not seek to serve the masses. We exist to elevate the few
                who refuse to compromise on the finer details.
              </p>

              <p className="text-white/70 font-light tracking-wide pt-4">
                This is not business as usual. This is the concierge standard.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 2px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 90, 0.25);
          border-radius: 1px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
