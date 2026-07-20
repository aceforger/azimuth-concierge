import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import TheMark from "./sections/TheMark";
import Reviews from "./sections/Reviews";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Copyright from "./pages/Copyright";

import Footer from "./components/Footer";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const siteTimer = setTimeout(() => setShowSite(true), 1600);
    const clearTimer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(siteTimer);
      clearTimeout(clearTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        {loading && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
              showSite ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <div
                className="h-[3px] bg-[#c9a95a] rounded-full animate-[slabTop_1.4s_ease-in-out_forwards]"
                style={{ width: "0px" }}
              />
              <div
                className="h-[3px] bg-[#c9a95a] rounded-full animate-[slabMid_1.4s_ease-in-out_forwards]"
                style={{ width: "0px" }}
              />
              <div
                className="h-[3px] bg-[#c9a95a] rounded-full animate-[slabBottom_1.4s_ease-in-out_forwards]"
                style={{ width: "0px" }}
              />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#c9a95a] rounded-full animate-[particle1_1.4s_ease-out_forwards]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#c9a95a] rounded-full animate-[particle2_1.4s_ease-out_forwards]" />
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-700 ${
            showSite ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TheMark />
                  <Reviews />
                </>
              }
            />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/copyright" element={<Copyright />} />
          </Routes>
          <Footer />
        </div>

        <style>{`
          @keyframes slabTop {
            0% { width: 0px; opacity: 0; transform: translateY(10px); }
            30% { width: 80px; opacity: 1; transform: translateY(0); }
            70% { width: 80px; opacity: 1; transform: translateY(0); }
            100% { width: 100px; opacity: 0; transform: translateY(-8px); }
          }
          @keyframes slabMid {
            0% { width: 0px; opacity: 0; }
            20% { width: 0px; opacity: 0; }
            50% { width: 120px; opacity: 1; }
            80% { width: 120px; opacity: 1; }
            100% { width: 140px; opacity: 0; }
          }
          @keyframes slabBottom {
            0% { width: 0px; opacity: 0; transform: translateY(-10px); }
            30% { width: 80px; opacity: 1; transform: translateY(0); }
            70% { width: 80px; opacity: 1; transform: translateY(0); }
            100% { width: 100px; opacity: 0; transform: translateY(8px); }
          }
          @keyframes particle1 {
            0% { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) translate(-30px, -25px) scale(0); opacity: 0; }
          }
          @keyframes particle2 {
            0% { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) translate(30px, -25px) scale(0); opacity: 0; }
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;
