import { useState, useEffect, useRef } from "react";

const values = [
  {
    title: "Presence Over Volume",
    description:
      "We do not scale for scale's sake. Every member of Azimuth carries a limited portfolio, ensuring each client receives undivided attention. Depth is our discipline.",
  },
  {
    title: "Precision as Instinct",
    description:
      "Scripts are for machines. Our team operates from honed intuition — the kind that comes from years of navigating complex, high-stakes environments with zero margin for error.",
  },
  {
    title: "Silence is Execution",
    description:
      "The best operational work is invisible. Our people move quietly, solve proactively, and leave no trace but the result. Ego has no place here.",
  },
  {
    title: "The Concierge Standard",
    description:
      "We do not benchmark against competitors. We benchmark against perfection. Every output — a travel itinerary, a media kit, a private acquisition — must meet museum-grade standards.",
  },
];

const openings = [
  {
    role: "Senior Operations Partner",
    wing: "Operations Wing",
    type: "Full-time · Global",
    description:
      "Lead high-stakes project timelines for elite clients across publishing, private equity, and luxury sectors. You will act as the silent spine of multi-party initiatives.",
  },
  {
    role: "Editorial & Brand Architect",
    wing: "Editorial Wing",
    type: "Full-time · Remote",
    description:
      "Design and encode brand identities into pristine digital asset books. You will own the visual DNA of our clients — from typography systems to media kit architecture.",
  },
  {
    role: "Private Client Associate",
    wing: "Private Client Wing",
    type: "Full-time · Geneva / London",
    description:
      "Execute high-end lifestyle requests with absolute discretion. From sourcing rare editions to curating private travel, you are the invisible hand behind the client's day.",
  },
  {
    role: "Research & Curation Specialist",
    wing: "Author's Wing",
    type: "Contract · Remote",
    description:
      "Conduct deep-dive research for bestselling authors and thought leaders. You will build organized intelligence dossiers that become the foundation of published works.",
  },
];

const Careers = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    principles: false,
    positions: false,
    cta: false,
  });

  const heroRef = useRef(null);
  const principlesRef = useRef(null);
  const positionsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: heroRef, key: "hero" },
      { ref: principlesRef, key: "principles" },
      { ref: positionsRef, key: "positions" },
      { ref: ctaRef, key: "cta" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.section;
            setVisibleSections((prev) => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const fadeIn = (key) =>
    `transition-all duration-[1200ms] ease-out ${
      visibleSections[key]
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 border-b border-white/[0.06]"
      >
        <div className={`max-w-4xl ${fadeIn("hero")}`}>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-[#c9a95a]/50" />
            <p className="text-[#c9a95a] tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs uppercase font-light">
              Careers
            </p>
          </div>

          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide leading-tight mb-4 sm:mb-6">
            Join the Registry.
          </h1>

          <p className="text-white/50 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            We are not building a workforce. We are curating a collective of
            operational artists — individuals who understand that premium
            service is not a department. It is a devotion.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={principlesRef}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-28 border-b border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center gap-3 mb-8 sm:mb-12 ${fadeIn("principles")}`}
          >
            <span className="h-px w-6 sm:w-8 bg-[#c9a95a]/50" />
            <p className="text-[#c9a95a] tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs uppercase font-light">
              Our Principles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            {/* Value tabs */}
            <div className="flex flex-col gap-1">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`text-left px-4 sm:px-6 py-4 sm:py-5 border-l-2 transition-all duration-500 ${
                    activeValue === index
                      ? "border-[#c9a95a] bg-white/[0.02]"
                      : "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.01]"
                  }`}
                >
                  <span
                    className={`text-xs sm:text-sm md:text-base font-light tracking-wide transition-colors duration-300 ${
                      activeValue === index ? "text-white" : "text-white/50"
                    }`}
                  >
                    {value.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active value description */}
            <div className="relative min-h-[160px] sm:min-h-[200px] flex items-start pt-2">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === activeValue
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-4 pointer-events-none absolute"
                  }`}
                >
                  <p className="text-white/55 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        ref={positionsRef}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-28 border-b border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center gap-3 mb-8 sm:mb-12 ${fadeIn("positions")}`}
          >
            <span className="h-px w-6 sm:w-8 bg-[#c9a95a]/50" />
            <p className="text-[#c9a95a] tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs uppercase font-light">
              Current Engagements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className={`group border border-white/[0.06] hover:border-[#c9a95a]/30 p-5 sm:p-6 md:p-8 transition-all duration-700 hover:bg-white/[0.01] ${
                  visibleSections.positions
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-[#c9a95a]/60 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light mb-2 sm:mb-3">
                  {job.wing}
                </p>
                <h3 className="text-white text-base sm:text-lg md:text-xl font-light tracking-wide mb-1 sm:mb-2 group-hover:text-white transition-colors">
                  {job.role}
                </h3>
                <p className="text-white/30 text-[10px] sm:text-xs font-light tracking-wider mb-3 sm:mb-4">
                  {job.type}
                </p>
                <p className="text-white/45 text-xs sm:text-sm font-light leading-relaxed mb-5 sm:mb-6">
                  {job.description}
                </p>
                <button className="text-[#c9a95a] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light hover:text-white transition-colors duration-300">
                  Enquire →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-32"
      >
        <div className={`max-w-3xl mx-auto text-center ${fadeIn("cta")}`}>
          <p className="text-white/30 text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase font-light mb-4 sm:mb-6">
            No Open Calls. Only Invitations.
          </p>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-4 sm:mb-6">
            The registry opens only when a seat becomes vacant.
          </h2>
          <p className="text-white/45 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
            If you believe your craft belongs at the intersection of precision
            and discretion, we welcome your inquiry. Exceptional candidates are
            remembered long before a position is posted.
          </p>
          <a
            href="mailto:registry@azimuthconcierge.com"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 border border-[#c9a95a]/40 text-[#c9a95a] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-light hover:bg-[#c9a95a]/10 hover:border-[#c9a95a] transition-all duration-500"
          >
            Submit Inquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
