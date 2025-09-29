import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Inline CSS */}
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #2c6b97;
          color: white;
          border: none;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .scroll-to-top:hover {
          background: #50c878;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
