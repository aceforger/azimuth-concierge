import { useState } from "react";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "collection", title: "Collection of Data" },
    { id: "use", title: "Use of Collected Data" },
    { id: "third-party", title: "Third-Party Websites" },
    { id: "sharing", title: "Sharing of Collected Data" },
    { id: "transfer", title: "Transfer of Collected Data" },
    { id: "security", title: "Data Security" },
    { id: "retention", title: "Data Retention" },
    { id: "children", title: "Children and Parents" },
    { id: "dnt", title: 'Our "Do Not Track" (DNT) Policy' },
    { id: "preferences", title: "Your Data Preferences" },
    { id: "contact", title: "Contact Us" },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 170; // navbar height buffer
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 border-b border-white/[0.06]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-[#c9a95a]/50" />
            <p className="text-[#c9a95a] tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs uppercase font-light">
              Privacy Policy
            </p>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-xs sm:text-sm font-light tracking-wider">
            Last modified{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <p className="text-[#c9a95a] text-[10px] tracking-[0.3em] uppercase font-light mb-6">
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block text-left w-full px-4 py-2.5 border-l-2 text-xs sm:text-sm font-light tracking-wide transition-all duration-300 ${
                        activeSection === section.id
                          ? "border-[#c9a95a] text-[#c9a95a] bg-white/[0.02]"
                          : "border-white/[0.06] text-white/40 hover:text-white/70 hover:border-white/20"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="space-y-5 text-white/55 text-sm md:text-base font-light leading-relaxed mb-12">
                <p>
                  This Privacy Policy is intended to provide you with
                  information about our approach to any personal data we may
                  collect from you when you use our website (the "Site")
                  operated by Azimuth Concierge Group ("Azimuth," "ACG," "we,"
                  "us," or "our"), or during your other interactions with us,
                  including when providing services to our clients.
                </p>
                <p>
                  Please take a moment to review the practices described in this
                  Privacy Policy and any updates posted here from time to time.
                  Updates will be referenced by the "Last Modified" date shown
                  above.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* Collection of Data */}
                <div id="collection">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4">
                    Collection of Data
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      We collect personal data that you voluntarily provide to
                      us, such as when you submit an inquiry through the Site,
                      including your name, email address, and any other
                      information you choose to provide.
                    </p>
                    <p>
                      We automatically collect certain data about your use of
                      the Site, including your IP address, browser type, device
                      information, referring pages, and pages visited. We use
                      cookies and similar technologies to enhance your
                      experience.
                    </p>
                    <p>
                      We may also collect personal data from publicly available
                      sources or third parties in connection with our concierge
                      services for clients.
                    </p>
                  </div>
                </div>

                {/* Use of Collected Data */}
                <div id="use" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Use of Collected Data
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>We may use collected data to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Respond to your inquiries and provide our concierge
                        services
                      </li>
                      <li>Improve the Site and your experience</li>
                      <li>Communicate with you regarding our services</li>
                      <li>Fulfill our obligations to clients</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                {/* Third-Party Websites */}
                <div
                  id="third-party"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Third-Party Websites
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Our Site may contain links to third-party websites. Data
                      collection and use by those third parties is subject to
                      their respective privacy policies. We encourage you to
                      review the privacy policies of any third-party sites you
                      visit.
                    </p>
                  </div>
                </div>

                {/* Sharing of Collected Data */}
                <div id="sharing" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Sharing of Collected Data
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>We may share collected data:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        With service providers who assist us in operating the
                        Site
                      </li>
                      <li>To comply with legal obligations</li>
                      <li>With your consent or at your direction</li>
                    </ul>
                    <p>
                      We do not sell, trade, or rent your personal data to third
                      parties for their marketing purposes.
                    </p>
                  </div>
                </div>

                {/* Transfer of Collected Data */}
                <div
                  id="transfer"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Transfer of Collected Data
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Our Site is operated globally. Data we collect may be
                      transferred to, stored, and processed in any country where
                      we or our service providers operate. By using the Site,
                      you consent to such transfers.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div
                  id="security"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Data Security
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      We implement commercially reasonable technical and
                      organizational measures to safeguard your personal data.
                      However, no method of transmission over the internet is
                      completely secure. We cannot guarantee absolute security
                      of your data.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div
                  id="retention"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Data Retention
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      We retain personal data only as long as necessary for the
                      purposes for which it was collected, or as required by
                      applicable law.
                    </p>
                  </div>
                </div>

                {/* Children and Parents */}
                <div
                  id="children"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Children and Parents
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      We do not knowingly collect personal data from children
                      under the age of 13. If you believe your child has
                      provided us with personal data, please contact us
                      immediately.
                    </p>
                  </div>
                </div>

                {/* Do Not Track */}
                <div id="dnt" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Our "Do Not Track" (DNT) Policy
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      We do not currently respond to DNT signals transmitted by
                      web browsers. To learn more about DNT, please visit{" "}
                      <a
                        href="https://allaboutdnt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c9a95a]/70 hover:text-[#c9a95a] transition-colors"
                      >
                        All About DNT
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Your Data Preferences */}
                <div
                  id="preferences"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Your Data Preferences
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      You may opt out of certain data collection by adjusting
                      your browser settings to refuse cookies. Please note that
                      this may affect the functionality of the Site.
                    </p>
                    <p>
                      To request access to, correction of, or deletion of your
                      personal data, please contact us using the details below.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div id="contact" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Contact Us
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us at:
                    </p>
                    <a
                      href="mailto:privacy@azimuthconcierge.com"
                      className="text-[#c9a95a]/70 hover:text-[#c9a95a] transition-colors"
                    >
                      privacy@azimuthconcierge.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
