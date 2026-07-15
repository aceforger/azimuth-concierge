import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

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
    <div>
      {/* Loading Screen */}
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${showSite ? "opacity-0" : "opacity-100"}`}
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

      {/* Main Site */}
      <div
        className={`transition-all duration-700 ${showSite ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
        <Hero />
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
  );
}

export default App;
