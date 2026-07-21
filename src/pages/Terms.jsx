import { useState } from "react";

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "changes", title: "I. Changes to the Site or Terms" },
    { id: "termination", title: "II. Term and Termination" },
    { id: "license", title: "III. Site License; Site Content" },
    { id: "disclaimer", title: "IV. Disclaimer of Warranties" },
    { id: "conduct", title: "V. User Conduct; Prohibited Activities" },
    { id: "third-party", title: "VI. Third Party Links" },
    { id: "copyright", title: "VII. Copyright and Trademark" },
    { id: "privacy", title: "VIII. Privacy" },
    { id: "notifications", title: "IX. Notifications" },
    { id: "governing", title: "X. Governing Law and Jurisdiction" },
    { id: "users-outside", title: "XI. Users Outside the United States" },
    { id: "liability", title: "XII. Limitation of Liability" },
    { id: "indemnification", title: "XIII. Indemnification" },
    { id: "miscellaneous", title: "XIV. Miscellaneous" },
  ];

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
              Terms of Use
            </p>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight mb-4">
            Terms of Use
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
                  The website you have entered (its sub-domains, affiliated
                  websites, any mobile versions, and any services available
                  therefrom) (the "Site") is a copyrighted work owned and
                  operated by Azimuth Concierge Group ("Azimuth," "ACG," "we,"
                  or "us").
                </p>
                <p>
                  BY ACCESSING OR USING THE SITE, YOU HEREBY AFFIRM THAT YOU
                  HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THE
                  FOLLOWING TERMS AND CONDITIONS (THE "TERMS"). THESE TERMS
                  TOGETHER WITH THE PRIVACY POLICY CONSTITUTE A LEGAL AGREEMENT
                  BETWEEN YOU AND AZIMUTH.
                </p>
                <p>
                  If you are under 18 years old, your parent or legal guardian
                  must read, understand, and agree to these Terms on your behalf
                  prior to your use of the Site. In no event may you use this
                  Site if you are under the age of 13.
                </p>
                <p>
                  YOUR USE OF THE SITE CONSTITUTES ACCEPTANCE OF THESE TERMS.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* I. Changes */}
                <div id="changes">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4">
                    I. Changes to the Site or Terms
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Azimuth reserves the right, at any time, to modify,
                      suspend, or discontinue the Site (in whole or in part) at
                      its sole discretion with or without notice to you. You
                      agree that Azimuth will not be liable to you or to any
                      third party for any modification, suspension, or
                      discontinuation of the Site or any part thereof.
                    </p>
                    <p>
                      Azimuth further reserves the right, at any time, to revise
                      these Terms or to impose new terms and conditions with
                      respect to access or use of the Site, in its sole
                      discretion. Any modification to the Terms shall become
                      effective when posted. ANY ACCESS OR USE OF THIS SITE BY
                      YOU AFTER THE POSTING OF THE REVISED TERMS SHALL
                      CONSTITUTE YOUR AGREEMENT TO SUCH REVISED TERMS.
                    </p>
                  </div>
                </div>

                {/* II. Termination */}
                <div
                  id="termination"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    II. Term and Termination
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      These Terms will remain in full force and effect while you
                      use the Site. Azimuth may terminate these Terms or
                      discontinue operation of the Site without notice to you,
                      at any time and for any reason, in our sole discretion.
                    </p>
                    <p>
                      In the event of termination, Sections III through XIV
                      shall survive and continue in full force and effect.
                    </p>
                  </div>
                </div>

                {/* III. License */}
                <div id="license" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    III. Site License; Site Content
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      <strong>License.</strong> Subject to these Terms, Azimuth
                      grants you a non-transferable, non-exclusive, revocable,
                      limited license to use and access the Site solely for your
                      own personal, non-commercial use.
                    </p>
                    <p>
                      <strong>Site Content.</strong> Unless specifically
                      permitted herein, no Content comprising, contained in or
                      distributed through the Site may be reproduced in any form
                      or used by you without the prior written consent of
                      Azimuth. The Site and the Content are the property of
                      Azimuth, its licensees and/or licensors and are protected
                      by copyright laws and international treaty provisions.
                    </p>
                  </div>
                </div>

                {/* IV. Disclaimer */}
                <div
                  id="disclaimer"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    IV. Disclaimer of Warranties
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      THE SITE AND THE CONTENT ARE PROVIDED "AS IS," "AS
                      AVAILABLE," AND WITHOUT WARRANTY OF ANY KIND, EITHER
                      EXPRESS OR IMPLIED. AZIMUTH MAKES NO WARRANTY THAT YOUR
                      ACCESS TO AND USE OF THE SITE WILL BE UNINTERRUPTED, VIRUS
                      FREE, ERROR-FREE OR COMPLETELY SECURE.
                    </p>
                  </div>
                </div>

                {/* V. User Conduct */}
                <div id="conduct" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    V. User Conduct; Prohibited Activities
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Post false, inaccurate or misleading content</li>
                      <li>
                        Violate any third party's intellectual property rights
                      </li>
                      <li>Upload viruses or harmful code</li>
                      <li>Collect personal information of other users</li>
                      <li>Use automated means to access or scrape the Site</li>
                      <li>
                        Interfere with or disrupt the Site's infrastructure
                      </li>
                    </ul>
                  </div>
                </div>

                {/* VI. Third Party Links */}
                <div
                  id="third-party"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    VI. Third Party Links
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      The Site may contain links to third-party websites.
                      Azimuth is not responsible for any Third-Party Links and
                      provides access only as a convenience to you. Your
                      interaction with all Third-Party Links is at your own
                      risk.
                    </p>
                  </div>
                </div>

                {/* VII. Copyright */}
                <div
                  id="copyright"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    VII. Copyright and Trademark
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      © Azimuth Concierge Group. All rights reserved. Your use
                      of any trademarks, service marks, branding, logos, and
                      designs owned or licensed by Azimuth is prohibited without
                      prior written consent.
                    </p>
                  </div>
                </div>

                {/* VIII. Privacy */}
                <div id="privacy" className="pt-4 border-t border-white/[0.04]">
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    VIII. Privacy
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Certain information collected from you is subject to our{" "}
                      <a
                        href="/privacy"
                        className="text-[#c9a95a]/70 hover:text-[#c9a95a] transition-colors"
                      >
                        Privacy Policy
                      </a>
                      , which is incorporated into these Terms by reference.
                    </p>
                  </div>
                </div>

                {/* IX. Notifications */}
                <div
                  id="notifications"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    IX. Notifications
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      Notices will be effective upon our posting them on the
                      Site or delivering them to you through email. If you do
                      not provide us with accurate information, we cannot be
                      held liable if you do not receive notice.
                    </p>
                  </div>
                </div>

                {/* X. Governing Law */}
                <div
                  id="governing"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    X. Governing Law and Jurisdiction
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      These Terms shall be governed by and construed in
                      accordance with applicable laws. Any dispute arising out
                      of or in connection with these Terms or the Site shall be
                      resolved in the appropriate courts of jurisdiction.
                    </p>
                  </div>
                </div>

                {/* XI. Users Outside */}
                <div
                  id="users-outside"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    XI. Users Outside the United States
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      If you are using the Site from outside the United States,
                      you are responsible for compliance with local laws.
                      Azimuth makes no warranty that the Site is appropriate or
                      available for use in all locations.
                    </p>
                  </div>
                </div>

                {/* XII. Limitation of Liability */}
                <div
                  id="liability"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    XII. Limitation of Liability
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                      AZIMUTH BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
                      INCIDENTAL, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES ARISING
                      OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SITE.
                    </p>
                  </div>
                </div>

                {/* XIII. Indemnification */}
                <div
                  id="indemnification"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    XIII. Indemnification
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      You agree to defend, indemnify and hold harmless Azimuth
                      from and against any claims arising out of your breach of
                      these Terms, your use of the Site, or your violation of
                      any third party rights.
                    </p>
                  </div>
                </div>

                {/* XIV. Miscellaneous */}
                <div
                  id="miscellaneous"
                  className="pt-4 border-t border-white/[0.04]"
                >
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-4 pt-8">
                    XIV. Miscellaneous
                  </h3>
                  <div className="space-y-4 text-white/50 text-sm md:text-base font-light leading-relaxed">
                    <p>
                      These Terms constitute the entire agreement between you
                      and Azimuth regarding use of the Site. If any provision is
                      held invalid, the remaining provisions shall remain in
                      full force and effect.
                    </p>
                    <div className="pt-6">
                      <p>If you have questions, please contact us at:</p>
                      <a
                        href="mailto:legal@azimuthconcierge.com"
                        className="text-[#c9a95a]/70 hover:text-[#c9a95a] transition-colors"
                      >
                        legal@azimuthconcierge.com
                      </a>
                    </div>
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

export default Terms;
