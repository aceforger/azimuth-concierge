const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo2.png"
              alt="Azimuth"
              className="h-6 md:h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-light hidden sm:block">
              Azimuth Concierge Group
            </span>
          </div>

          {/* Center - Gold line + Tagline */}
          <div className="flex items-center gap-4">
            <span className="h-px w-6 bg-[#c9a95a]/30 hidden md:block" />
            <p className="text-[#c9a95a]/50 text-[10px] md:text-xs tracking-[0.25em] uppercase font-light text-center">
              The Concierge Standard
            </p>
            <span className="h-px w-6 bg-[#c9a95a]/30 hidden md:block" />
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:registry@azimuthconcierge.com"
              className="text-white/30 hover:text-[#c9a95a] text-[10px] tracking-[0.2em] uppercase font-light transition-colors duration-300"
            >
              Contact
            </a>
            <span className="text-white/10">|</span>
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-light">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center gap-3 mt-6 md:mt-5">
          <span className="h-px w-4 bg-[#c9a95a]/20" />
          <p className="text-[#c9a95a]/25 text-[9px] tracking-[0.3em] uppercase font-light">
            A Private Registry
          </p>
          <span className="h-px w-4 bg-[#c9a95a]/20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
