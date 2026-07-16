import { useState } from "react";

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

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      // Closing — animate out then clear
      setClosing(true);
      setTimeout(() => {
        setOpenMenu(null);
        setClosing(false);
      }, 350);
    } else {
      // Switching menus or opening fresh — instant swap, no transparent gap
      setClosing(false);
      setOpenMenu(menu);
    }
  };

  const isOpen = openMenu !== null && !closing;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Nav bar */}
      <div
        className={`flex items-center gap-10 px-12 md:px-24 py-8 transition-all duration-500 ${
          openMenu !== null
            ? "bg-black/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        {/* Brand mark - only visible when menu closed */}
        {/* <div
          className={`transition-all duration-500 ${
            isOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100 mr-0"
          }`}
        >
          <span className="text-white/50 tracking-[0.4em] text-[10px] font-light uppercase">
            Azimuth
          </span>
        </div> */}

        <div className="flex gap-8">
          <button
            onClick={() => toggleMenu("services")}
            className="group relative py-2"
          >
            <span
              className={`tracking-[0.25em] text-xs md:text-sm uppercase font-light transition-all duration-300 ${
                openMenu === "services"
                  ? "text-[#c9a95a]"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              Service Wing
            </span>
            {/* Underline indicator */}
            <span
              className={`absolute bottom-0 left-0 h-px bg-[#c9a95a] transition-all duration-500 ${
                openMenu === "services" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>

          <button
            onClick={() => toggleMenu("manifesto")}
            className="group relative py-2"
          >
            <span
              className={`tracking-[0.25em] text-xs md:text-sm uppercase font-light transition-all duration-300 ${
                openMenu === "manifesto"
                  ? "text-[#c9a95a]"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              Manifesto
            </span>
            <span
              className={`absolute bottom-0 left-0 h-px bg-[#c9a95a] transition-all duration-500 ${
                openMenu === "manifesto" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Dropdown backdrop blur layer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
          onClick={() => toggleMenu(openMenu)}
        />
      )}

      {/* Service Wing Dropdown */}
      <div
        className={`transition-all duration-500 origin-top ${
          openMenu === "services"
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none absolute"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/[0.06] px-12 md:px-24 py-12">
          <div className="max-w-full">
            {/* Wing selector tabs */}
            <div className="flex flex-wrap gap-10 mb-10">
              {serviceData.map((wing, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWing(index)}
                  className="group relative py-2"
                >
                  <span
                    className={`text-xs md:text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${
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

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent mb-10" />

            {/* Active wing content */}
            <div className="animate-[fadeUp_0.5s_ease-out]">
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-6">
                {serviceData[activeWing].subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                {serviceData[activeWing].items.map((item, i) => (
                  <div
                    key={i}
                    className="group/item border-l border-white/[0.06] pl-6 hover:border-[#c9a95a]/40 transition-all duration-500 py-1"
                  >
                    <h4 className="text-white/80 text-sm font-light tracking-wide mb-2 group-hover/item:text-white transition-colors duration-300">
                      {item.specialization}
                    </h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed group-hover/item:text-white/55 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manifesto Dropdown */}
      <div
        className={`transition-all duration-500 origin-top ${
          openMenu === "manifesto"
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none absolute"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/[0.06] max-h-[85vh] overflow-y-auto">
          <div className="px-12 md:px-24 py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              {/* Label with decorative line */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-8 bg-[#c9a95a]/40" />
                <p className="text-[#c9a95a] tracking-[0.35em] text-[10px] md:text-xs uppercase font-light">
                  The Azimuth Manifesto
                </p>
              </div>

              {/* Main Title */}
              <h3 className="text-white text-3xl md:text-5xl font-light tracking-[0.05em] mb-4 leading-tight">
                THE COVETED
                <br />
                STANDARD
              </h3>

              {/* Subtitle */}
              <p className="text-white/40 text-base md:text-lg font-light italic mb-16">
                On the Art of Deliberate Scale.
              </p>

              {/* Gold divider */}
              <div className="w-20 h-px bg-[#c9a95a] mb-16" />

              {/* Body */}
              <div className="space-y-8 text-white/55 text-sm md:text-base font-light leading-relaxed">
                <p>
                  <span className="float-left text-[#c9a95a] text-6xl md:text-8xl font-serif leading-[0.7] mr-4 mt-2">
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

                {/* Highlighted line */}
                <div className="border-l-2 border-[#c9a95a] pl-6 py-3 my-8">
                  <p className="text-[#c9a95a] text-base md:text-xl font-light tracking-wide">
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

      {/* Custom scrollbar */}
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
