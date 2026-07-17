import { useState, useEffect, useRef } from "react";

const symbols = [
  {
    title: "The Compass",
    subtitle: "Precision as Origin",
    description:
      "Azimuth: the angular measurement of direction relative to true North. Every engagement begins with orientation — understanding exactly where you stand before charting the path forward.",
    highlight: "We navigate. You ascend.",
  },
  {
    title: "The Vesica Piscis",
    subtitle: "Where Worlds Converge",
    description:
      "Two intersecting arcs. The meeting of client and concierge. Vision and execution. The sacred geometry of partnership — where duality becomes unity and the space between becomes the work.",
    highlight: "The intersection is where we live.",
  },
  {
    title: "The Diamond",
    subtitle: "Alignment & Rarity",
    description:
      "A square rotated 45°. The compass marker. The convergence point where all axes meet. It represents the rare center — that precise coordinate where preparation, timing, and instinct align.",
    highlight: "Four points. One direction.",
  },
  {
    title: "The Vertical Axis",
    subtitle: "Grounded Ascension",
    description:
      "From the anchored base to the ascending crown. This axis is the hierarchy of refinement — rooted in old-world discretion, reaching toward higher-order execution. Cathedral geometry. Institutional trust.",
    highlight: "Grounded below. Elevated above.",
  },
];

const TheMark = () => {
  const [activeSymbol, setActiveSymbol] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [spinTrigger, setSpinTrigger] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveSymbol((prev) => (prev + 1) % symbols.length);
        setSpinTrigger((prev) => prev + 1);
      }, 5000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, activeSymbol]);

  const handleDotClick = (index) => {
    setActiveSymbol(index);
    setSpinTrigger((prev) => prev + 1);
    resetInterval();
  };

  return (
    <section
      ref={sectionRef}
      id="the-mark"
      className="bg-black min-h-screen flex items-center px-12 md:px-24 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background ambient texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #c9a95a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle vertical light streak */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a95a]/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-24 transition-all duration-[1500ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="h-px w-12 bg-[#c9a95a]/50" />
          <p className="text-[#c9a95a] tracking-[0.4em] text-[10px] md:text-[11px] uppercase font-light">
            The Mark
          </p>
          <span className="h-px w-12 bg-[#c9a95a]/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left - Logo Display */}
          <div
            className={`flex items-center justify-center lg:justify-end transition-all duration-[2000ms] ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Outer ambient pulse */}
              <div
                className="absolute -inset-16 rounded-full transition-all duration-[3000ms]"
                style={{
                  background: isVisible
                    ? "radial-gradient(circle, rgba(201,169,90,0.06) 0%, rgba(201,169,90,0.02) 40%, transparent 70%)"
                    : "none",
                  animation: isVisible
                    ? "pulse 4s ease-in-out infinite"
                    : "none",
                }}
              />

              {/* Secondary ring */}
              <div
                className="absolute -inset-8 rounded-full border border-[#c9a95a]/10 transition-all duration-[2500ms]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.9)",
                }}
              />

              {/* Logo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                {/* Loading shimmer */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-[1px] bg-[#c9a95a]/20 animate-pulse" />
                  </div>
                )}

                {/* Rotating outer ring */}
                <div
                  className="absolute inset-0 rounded-full border border-[#c9a95a]/15 transition-all duration-[2500ms]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? "spinSlow 20s linear infinite"
                      : "none",
                  }}
                />

                {/* Counter-rotating middle ring */}
                <div
                  className="absolute inset-4 rounded-full border border-[#c9a95a]/10 transition-all duration-[2500ms]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? "spinReverse 25s linear infinite"
                      : "none",
                  }}
                />

                {/* Logo image - spins on text change */}
                <img
                  src="/images/logo.png"
                  alt="Azimuth Concierge Group Logo"
                  onLoad={() => setImageLoaded(true)}
                  className="relative z-10 w-full h-full object-contain"
                  style={{
                    filter: imageLoaded
                      ? "drop-shadow(0 0 40px rgba(201, 169, 90, 0.15))"
                      : "none",
                    opacity: imageLoaded ? 1 : 0,
                    animation: imageLoaded
                      ? "logoCycle 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                      : "none",
                  }}
                  key={spinTrigger}
                />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#c9a95a]/30 to-transparent transition-all duration-[2000ms] delay-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  width: isVisible ? "96px" : "0px",
                }}
              />
            </div>
          </div>

          {/* Right - Symbolism */}
          <div
            className={`flex flex-col justify-center transition-all duration-[1500ms] ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Vertical accent */}
            <div className="hidden lg:block absolute right-full mr-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a95a]/10 to-transparent pointer-events-none" />

            {/* Symbol selector - enhanced dots */}
            <div className="flex gap-5 mb-14">
              {symbols.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  onMouseEnter={() => setHoveredDot(index)}
                  onMouseLeave={() => setHoveredDot(null)}
                  className="relative group/dot py-3"
                >
                  {/* Outer ring for active */}
                  <div
                    className={`absolute -inset-2 rounded-full border border-[#c9a95a]/20 transition-all duration-500 ${
                      index === activeSymbol
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50 group-hover/dot:opacity-50 group-hover/dot:scale-100"
                    }`}
                  />

                  {/* The dot itself */}
                  <span
                    className={`block transition-all duration-500 rounded-full ${
                      index === activeSymbol
                        ? "w-10 h-[2px] bg-[#c9a95a] shadow-[0_0_8px_rgba(201,169,90,0.4)]"
                        : "w-[2px] h-[2px] bg-white/20 group-hover/dot:bg-white/50 group-hover/dot:shadow-[0_0_4px_rgba(255,255,255,0.2)]"
                    }`}
                  />

                  {/* Label on hover */}
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[#c9a95a]/60 text-[9px] tracking-[0.3em] uppercase font-light whitespace-nowrap transition-all duration-300 ${
                      hoveredDot === index && index !== activeSymbol
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    {symbols[index].title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active symbol content */}
            <div className="relative" style={{ minHeight: "340px" }}>
              {symbols.map((symbol, index) => (
                <div
                  key={index}
                  className={`transition-all duration-[1000ms] ease-out ${
                    index === activeSymbol
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
                  }`}
                >
                  {/* Number */}
                  <p className="text-[#c9a95a]/15 text-6xl md:text-7xl font-serif-premium absolute -top-8 -left-2 select-none">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>

                  <div className="relative z-10">
                    <p className="text-white/25 text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4">
                      {symbol.subtitle}
                    </p>

                    <h3 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-8 leading-tight">
                      {symbol.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-8">
                      <span className="h-px w-10 bg-[#c9a95a]/50" />
                      <span className="w-1 h-1 rounded-full bg-[#c9a95a]/30" />
                    </div>

                    <p className="text-white/55 text-sm md:text-base font-light leading-relaxed mb-8 max-w-md">
                      {symbol.description}
                    </p>

                    <div className="border-l border-[#c9a95a]/30 pl-5 py-1">
                      <p className="text-[#c9a95a] text-sm md:text-base font-light italic tracking-wide">
                        {symbol.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-14 pt-8 border-t border-white/[0.04] flex items-center justify-between">
              <p className="text-white/20 text-[10px] tracking-[0.35em] font-light uppercase">
                {(activeSymbol + 1).toString().padStart(2, "0")} &mdash;{" "}
                {symbols.length.toString().padStart(2, "0")}
              </p>

              {/* Navigation arrows */}
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    handleDotClick(
                      (activeSymbol - 1 + symbols.length) % symbols.length,
                    )
                  }
                  className="text-white/20 hover:text-[#c9a95a]/70 transition-colors duration-300 text-xs tracking-[0.2em] uppercase font-light"
                >
                  Prev
                </button>
                <span className="text-white/10">|</span>
                <button
                  onClick={() =>
                    handleDotClick((activeSymbol + 1) % symbols.length)
                  }
                  className="text-white/20 hover:text-[#c9a95a]/70 transition-colors duration-300 text-xs tracking-[0.2em] uppercase font-light"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes logoCycle {
          0% {
            transform: perspective(600px) rotateY(0deg) scale(1);
            filter: drop-shadow(0 0 40px rgba(201, 169, 90, 0.15));
          }
          40% {
            transform: perspective(600px) rotateY(360deg) scale(1);
            filter: drop-shadow(0 0 50px rgba(201, 169, 90, 0.25));
          }
          50% {
            transform: perspective(600px) rotateY(360deg) scale(1.04);
            filter: drop-shadow(0 0 60px rgba(201, 169, 90, 0.35));
          }
          65% {
            transform: perspective(600px) rotateY(360deg) scale(1);
            filter: drop-shadow(0 0 40px rgba(201, 169, 90, 0.2));
          }
          100% {
            transform: perspective(600px) rotateY(360deg) scale(1);
            filter: drop-shadow(0 0 40px rgba(201, 169, 90, 0.15));
          }
        }
      `}</style>
    </section>
  );
};

export default TheMark;
