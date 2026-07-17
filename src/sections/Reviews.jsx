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
      }, 6000);
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
      className="bg-black min-h-screen flex items-center px-12 md:px-24 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #c9a95a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient light streak */}
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a95a]/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-20 transition-all duration-[1500ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="h-px w-12 bg-[#c9a95a]/50" />
          <p className="text-[#c9a95a] tracking-[0.4em] text-[10px] md:text-[11px] uppercase font-light">
            The Ledger
          </p>
          <span className="h-px w-12 bg-[#c9a95a]/50" />
        </div>

        {/* Quote area */}
        <div
          className={`relative transition-all duration-[1500ms] ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Giant watermark quote mark */}
          <span
            className="absolute -top-16 -left-8 md:-left-12 text-[#c9a95a]/5 text-[12rem] md:text-[16rem] font-serif leading-none select-none pointer-events-none transition-all duration-[2000ms]"
            style={{
              opacity: isVisible ? 0.05 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.8)",
            }}
          >
            &ldquo;
          </span>

          {/* Quote container */}
          <div className="relative" style={{ minHeight: "320px" }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-[1000ms] ease-out ${
                  index === current && !isTransitioning
                    ? "opacity-100 translate-y-0 blur-0 relative"
                    : "opacity-0 translate-y-10 blur-sm pointer-events-none absolute inset-0"
                }`}
              >
                {/* Quote text with staggered reveal feel */}
                <blockquote className="relative">
                  <p className="text-white/80 text-xl md:text-3xl lg:text-4xl font-light leading-relaxed italic max-w-2xl">
                    {review.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="mt-12 flex items-center gap-4">
                  {/* Decorative element */}
                  <div className="flex items-center gap-2">
                    <span className="h-px w-10 bg-[#c9a95a]/40" />
                    <span className="w-1 h-1 rounded-full bg-[#c9a95a]/50" />
                  </div>

                  <div>
                    <p className="text-[#c9a95a] text-sm md:text-base font-light tracking-wide">
                      {review.client}
                    </p>
                    <p className="text-white/30 text-xs md:text-sm font-light tracking-wider mt-0.5">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation bar */}
        <div
          className={`flex items-center justify-between mt-20 pt-10 border-t border-white/[0.04] transition-all duration-[1500ms] ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Dots with hover labels */}
          <div className="flex gap-5">
            {reviews.map((review, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                onMouseEnter={() => setHoveredDot(index)}
                onMouseLeave={() => setHoveredDot(null)}
                className="relative group/dot py-3"
              >
                {/* Outer ring */}
                <div
                  className={`absolute -inset-2 rounded-full border border-[#c9a95a]/20 transition-all duration-500 ${
                    index === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50 group-hover/dot:opacity-50 group-hover/dot:scale-100"
                  }`}
                />

                {/* Dot */}
                <span
                  className={`block transition-all duration-500 rounded-full ${
                    index === current
                      ? "w-10 h-[2px] bg-[#c9a95a] shadow-[0_0_8px_rgba(201,169,90,0.4)]"
                      : "w-[2px] h-[2px] bg-white/20 group-hover/dot:bg-white/50"
                  }`}
                />

                {/* Client name on hover */}
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
          <div className="flex items-center gap-8">
            {/* Prev / Next */}
            <div className="flex gap-5 items-center">
              <button
                onClick={handlePrev}
                className="text-white/20 hover:text-[#c9a95a]/60 transition-all duration-300 text-[10px] tracking-[0.3em] uppercase font-light group"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>{" "}
                Prev
              </button>
              <span className="text-white/8">|</span>
              <button
                onClick={handleNext}
                className="text-white/20 hover:text-[#c9a95a]/60 transition-all duration-300 text-[10px] tracking-[0.3em] uppercase font-light group"
              >
                Next{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 pl-6 border-l border-white/[0.06]">
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
