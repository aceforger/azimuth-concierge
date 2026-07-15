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

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Nav bar */}
      <div className="flex gap-8 px-12 md:px-24 py-8">
        <div className="relative">
          <button
            onClick={() => toggleMenu("services")}
            className={`tracking-[0.2em] text-xs md:text-sm uppercase font-light transition-colors duration-300 ${
              openMenu === "services"
                ? "text-[#c9a95a]"
                : "text-white/70 hover:text-[#c9a95a]"
            }`}
          >
            Service Wing
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => toggleMenu("manifesto")}
            className={`tracking-[0.2em] text-xs md:text-sm uppercase font-light transition-colors duration-300 ${
              openMenu === "manifesto"
                ? "text-[#c9a95a]"
                : "text-white/70 hover:text-[#c9a95a]"
            }`}
          >
            Manifesto
          </button>
        </div>
      </div>

      {/* Full-width Dropdown */}
      {openMenu === "services" && (
        <div className="w-full mt-0 animate-[dropIn_0.4s_ease-out]">
          <div className="bg-black/95 backdrop-blur-md border-y border-white/[0.08] px-12 md:px-24 py-10">
            <div className="max-w-full">
              {/* Wing selector tabs */}
              <div className="flex flex-wrap gap-8 mb-10">
                {serviceData.map((wing, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWing(index)}
                    className={`text-xs md:text-sm tracking-[0.15em] uppercase font-light transition-colors duration-300 ${
                      activeWing === index
                        ? "text-[#c9a95a]"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {wing.wing.split(". ")[1]}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.08] mb-10" />

              {/* Active wing content */}
              <div className="animate-[fadeIn_0.3s_ease-out]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  {serviceData[activeWing].items.map((item, i) => (
                    <div key={i} className="border-l border-white/[0.08] pl-5">
                      <h4 className="text-[#c9a95a] text-sm font-light tracking-wide mb-1">
                        {item.specialization}
                      </h4>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
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
      `}</style>
    </nav>
  );
};

export default Navbar;
