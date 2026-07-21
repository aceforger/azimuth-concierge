import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    quote:
      "Azimuth handled my audiobook launch across seven platforms. I didn't touch a single logistics email. The ACX coordination alone saved me three weeks.",
    client: "Dr. Elena Marchetti",
    company: "Author, The Architecture of Silence (Riverhead)",
  },
  {
    quote:
      "They rebuilt our entire media kit and brand guidelines in ten days. Our PR agency said it was the cleanest asset book they'd ever received from a client.",
    client: "James Cordero",
    company: "Founder, Cordero & Wythe Advisory",
  },
  {
    quote:
      "I've worked with operations teams at three Fortune 500 firms. None moved with the precision and discretion of Azimuth. They operate like a silent partner, not a vendor.",
    client: "Priya Nair",
    company: "Chief of Staff, Vantage Holdings",
  },
  {
    quote:
      "They sourced a first-edition Borges for my husband's 50th and had it on our breakfast table in Geneva within 36 hours. I still don't know how.",
    client: "Camille Lefèvre",
    company: "Private Client, Geneva",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 10000);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goTo = (index) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
      resetInterval();
    }, 600);
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
  }, [isVisible, current]);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="bg-black/50 min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-12 xl:px-24 py-20 md:py-28 lg:py-24 xl:py-32 relative overflow-hidden"
    >
      {/* Ambient dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #c9a95a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Geometric accent - top left */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-[0.02] pointer-events-none">
        <div className="absolute top-12 left-12 w-48 h-48 border border-[#c9a95a]/25 rounded-full" />
        <div className="absolute top-24 left-24 w-24 h-24 border border-[#c9a95a]/20 rotate-45" />
      </div>

      {/* Geometric accent - bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.02] pointer-events-none">
        <div className="absolute bottom-16 right-16 w-64 h-64 border border-[#c9a95a]/25 rounded-full" />
        <div className="absolute bottom-28 right-28 w-40 h-40 border border-[#c9a95a]/15 rounded-full" />
        <div className="absolute bottom-40 right-40 w-16 h-16 border border-[#c9a95a]/30 rotate-45" />
      </div>

      {/* Vertical light streaks */}
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a95a]/6 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a95a]/4 to-transparent pointer-events-none hidden lg:block" />

      {/* Horizontal accent */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#c9a95a]/4 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-12 sm:mb-16 lg:mb-20 transition-all duration-[1500ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="h-px w-8 sm:w-10 lg:w-12 bg-[#c9a95a]/50 mt-5" />
          <p className="text-[#c9a95a] tracking-[0.4em] text-[10px] md:text-[11px] uppercase font-light mt-5">
            The Stories
          </p>
          <span className="h-px w-8 sm:w-10 lg:w-12 bg-[#c9a95a]/50 mt-5" />
        </div>

        {/* Quote area */}
        <div
          className={`relative transition-all duration-[1500ms] ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Giant watermark quote mark */}
          <span
            className="absolute -top-8 sm:-top-12 lg:-top-20 -left-4 sm:-left-6 lg:-left-10 xl:-left-14 text-[#c9a95a]/4 text-8xl sm:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-serif-premium leading-none select-none pointer-events-none transition-all duration-[2500ms]"
            style={{
              opacity: isVisible ? 0.04 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.75)",
            }}
          >
            &ldquo;
          </span>

          {/* Closing quote mark - bottom right */}
          <span
            className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-28 -right-2 sm:-right-4 lg:-right-8 text-[#c9a95a]/4 text-8xl sm:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-serif-premium leading-none select-none pointer-events-none transition-all duration-[2500ms] delay-500"
            style={{
              opacity: isVisible ? 0.04 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.75)",
            }}
          >
            &rdquo;
          </span>

          {/* Quote container */}
          <div className="relative" style={{ minHeight: "300px" }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-[1200ms] ease-out ${
                  index === current && !isTransitioning
                    ? "opacity-100 translate-y-0 blur-0 relative"
                    : "opacity-0 translate-y-10 blur-sm pointer-events-none absolute inset-0"
                }`}
              >
                {/* Decorative gold mark above quote */}
                <div className="flex items-center gap-2 mb-8 lg:mb-10">
                  <span className="h-px w-6 lg:w-8 bg-[#c9a95a]/30" />
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#c9a95a]/40" />
                </div>

                <blockquote className="relative">
                  <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light leading-relaxed italic max-w-2xl">
                    {review.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="mt-10 sm:mt-12 lg:mt-14 flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-10 sm:w-12 bg-[#c9a95a]/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a95a]/60" />
                  </div>

                  <div>
                    <p className="text-[#c9a95a] text-xs sm:text-sm md:text-base font-light tracking-wide">
                      {review.client}
                    </p>
                    <p className="text-white/35 text-[10px] sm:text-xs md:text-sm font-light tracking-wider mt-0.5">
                      {review.company}
                    </p>
                  </div>
                </div>

                {/* Decorative gold mark below attribution */}
                <div className="flex items-center gap-2 mt-6">
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#c9a95a]/30" />
                  <span className="h-px w-16 lg:w-24 bg-gradient-to-r from-[#c9a95a]/30 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation bar */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0 mt-14 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-white/[0.05] transition-all duration-[1500ms] ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Dots with hover labels */}
          <div className="flex gap-4 sm:gap-5">
            {reviews.map((review, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                onMouseEnter={() => setHoveredDot(index)}
                onMouseLeave={() => setHoveredDot(null)}
                className="relative group/dot py-3"
              >
                <div
                  className={`absolute -inset-2 rounded-full border border-[#c9a95a]/20 transition-all duration-500 ${
                    index === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50 group-hover/dot:opacity-50 group-hover/dot:scale-100"
                  }`}
                />
                <span
                  className={`block transition-all duration-500 rounded-full ${
                    index === current
                      ? "w-8 sm:w-10 h-[2px] bg-[#c9a95a] shadow-[0_0_10px_rgba(201,169,90,0.5)]"
                      : "w-[2px] h-[2px] bg-white/20 group-hover/dot:bg-white/50 group-hover/dot:shadow-[0_0_4px_rgba(255,255,255,0.2)]"
                  }`}
                />
                <span
                  className={`absolute -top-10 left-1/2 -translate-x-1/2 text-[#c9a95a]/50 text-[9px] tracking-[0.25em] uppercase font-light whitespace-nowrap transition-all duration-300 ${
                    hoveredDot === index && index !== current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {review.client.split(" ").pop()}
                </span>
              </button>
            ))}
          </div>

          {/* Right side - Counter + Navigation */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex gap-3 sm:gap-5 items-center">
              <button
                onClick={handlePrev}
                className="text-white/25 hover:text-[#c9a95a]/60 transition-all duration-300 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-light group"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>{" "}
                Prev
              </button>
              <span className="text-white/10">|</span>
              <button
                onClick={handleNext}
                className="text-white/25 hover:text-[#c9a95a]/60 transition-all duration-300 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-light group"
              >
                Next{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2 pl-4 sm:pl-6 border-l border-white/[0.06]">
              <span className="text-[#c9a95a] text-sm font-light tabular-nums">
                {(current + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-white/15 text-sm font-light">/</span>
              <span className="text-white/30 text-sm font-light tabular-nums">
                {reviews.length.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
