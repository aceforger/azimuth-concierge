import { useState } from "react";

const Copyright = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "ownership", title: "Intellectual Property Ownership" },
    { id: "infringement", title: "Copyright Infringement Notice" },
    { id: "counter", title: "Counter-Notification" },
    { id: "repeat", title: "Repeat Infringers" },
    { id: "contact", title: "Contact Information" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 border-b border-white/[0.06]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-[#c9a95a]/50" />
            <p className="text-[#c9a95a] tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs uppercase font-light">
              Copyright Policy
            </p>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight mb-4">
            Copyright Policy
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
            {/* Sidebar */}
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
                  Azimuth Concierge Group ("Azimuth," "ACG," "we," or "us")
                  respects the intellectual property rights of others and
                  expects users of our website (the "Site") to do the same. This
                  Copyright Policy outlines our approach to copyright protection
                  and the process for reporting claims of copyright
                  infringement.
                </p>
                <p>
                  All content on the Site — including text, graphics, logos,
                  images, audio, video, software, typography, design, and the
                  compilation thereof — is the property of Azimuth Concierge
                  Group or its content suppliers and is protected by
                  international copyright laws.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* Ownership */}
                <div id="ownership">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4">
                    Intellectual Property Ownership
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Unless otherwise stated, Azimuth Concierge Group owns all
                      intellectual property rights in and to the Site and all
                      Content contained therein. This includes, but is not
                      limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>The Azimuth Concierge Group name and logo</li>
                      <li>The "ACG" monogram and all brand marks</li>
                      <li>
                        All website design, layout, and typography systems
                      </li>
                      <li>All written content, including the Manifesto</li>
                      <li>All photography, graphics, and visual assets</li>
                      <li>
                        All proprietary service descriptions and methodologies
                      </li>
                    </ul>
                    <p>
                      No Content from the Site may be copied, reproduced,
                      republished, uploaded, posted, transmitted, or distributed
                      in any way without our prior written consent.
                    </p>
                  </div>
                </div>

                {/* Infringement Notice */}
                <div
                  id="infringement"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Copyright Infringement Notice
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      If you believe that any Content on the Site infringes upon
                      your copyright, please submit a written notification
                      containing the following information:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        A physical or electronic signature of the copyright
                        owner or a person authorized to act on their behalf
                      </li>
                      <li>
                        Identification of the copyrighted work claimed to have
                        been infringed
                      </li>
                      <li>
                        Identification of the material that is claimed to be
                        infringing, including its location on the Site
                      </li>
                      <li>
                        Your contact information, including name, address,
                        telephone number, and email address
                      </li>
                      <li>
                        A statement that you have a good faith belief that use
                        of the material is not authorized by the copyright owner
                      </li>
                      <li>
                        A statement, made under penalty of perjury, that the
                        information in the notification is accurate
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Counter-Notification */}
                <div id="counter" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Counter-Notification
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      If you believe that material you posted on the Site was
                      removed or access to it was disabled by mistake or
                      misidentification, you may file a counter-notification
                      with us. Your counter-notification must include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your physical or electronic signature</li>
                      <li>
                        Identification of the material that has been removed and
                        its location before removal
                      </li>
                      <li>
                        A statement under penalty of perjury that you have a
                        good faith belief the material was removed as a result
                        of mistake or misidentification
                      </li>
                      <li>
                        Your name, address, and telephone number, and a
                        statement that you consent to the jurisdiction of the
                        applicable courts
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Repeat Infringers */}
                <div id="repeat" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Repeat Infringers
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      In accordance with applicable law, Azimuth reserves the
                      right to terminate access to the Site for users who are
                      repeat infringers of copyright. We maintain a policy of
                      addressing repeat infringement in a timely manner and
                      taking appropriate action, including the removal of
                      infringing content and the termination of user access.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div id="contact" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      All notices of copyright infringement, counter-
                      notifications, and inquiries regarding this Copyright
                      Policy should be directed to:
                    </p>
                    <div className="pt-2 space-y-2">
                      <p className="text-white/70 font-light">
                        Azimuth Concierge Group
                      </p>
                      <p className="text-white/50">Attn: Legal Department</p>
                      <a
                        href="mailto:legal@azimuthconcierge.com"
                        className="text-[#c9a95a]/70 hover:text-[#c9a95a] transition-colors"
                      >
                        legal@azimuthconcierge.com
                      </a>
                    </div>
                    <p className="pt-4 text-white/35 text-sm italic">
                      We take intellectual property rights seriously. All
                      notices will be reviewed and responded to in a timely
                      manner.
                    </p>
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

export default Copyright;
