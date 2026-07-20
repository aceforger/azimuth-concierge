const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-16">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">
          {/* Left - Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/images/logo2.png"
              alt="Azimuth Concierge Group"
              className="h-8 md:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-white/40 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light text-center md:text-left max-w-[240px] leading-relaxed">
              A private operational partnership for those who refuse to
              compromise.
            </p>
          </div>

          {/* Right - Links Grid */}
          <div className="flex gap-16 sm:gap-20 md:gap-24">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="text-[#c9a95a]/60 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-light mb-1">
                Navigate
              </p>
              <a
                href="/"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="/careers"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Careers
              </a>
              <a
                href="mailto:registry@azimuthconcierge.com"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="text-[#c9a95a]/60 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-light mb-1">
                Legal
              </p>
              <a
                href="/terms"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="/privacy"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/copyright"
                className="text-white/50 hover:text-white text-xs sm:text-sm tracking-[0.15em] font-light transition-colors duration-300"
              >
                Copyright
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-9 md:my-11" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-light text-center sm:text-left">
            © {new Date().getFullYear()} Azimuth Concierge Group
          </p>
          <p className="text-[#c9a95a]/50 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-light text-center sm:text-right">
            The Concierge Standard
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
