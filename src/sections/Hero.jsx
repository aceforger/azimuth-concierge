import { useEffect, useState } from "react";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 900);
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          backgroundImage: "url('/images/reception-bg-mobile.png')",
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/images/reception-bg2.png')",
        }}
      />

      {/* Dark overlay - responsive gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 md:from-black/60 md:via-black/30 md:to-transparent z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {/* Brand Name */}
          <div>
            <h1 className="text-white tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              AZIMUTH
            </h1>
            <div className="w-12 sm:w-14 md:w-16 h-px bg-[#c9a95a] my-3 sm:my-4" />
            <p className="text-white/80 tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-xs sm:text-sm md:text-base font-light uppercase">
              CONCIERGE
            </p>
          </div>

          {/* Headline + Subheadline */}
          <div
            className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 ease-out delay-300 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-3 sm:mb-4">
              The Concierge Standard.
            </h2>
            <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-lg">
              Every engagement begins with precision and ends with discretion.
              Azimuth pairs elite founders and luxury brands with dedicated
              operational partners who treat premium service as an art form —
              intentional, instinctive, and exact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
