import { useEffect, useRef } from "react";

// Add CSS animation keyframes only once
const style = document.createElement("style");
style.textContent = `
  @keyframes bounceAnim {
    from { transform: translateX(0); }
    to { transform: translateX(var(--bounce-distance)); }
  }
`;
if (!document.head.querySelector('style[data-marquee]')) {
  style.setAttribute("data-marquee", "true");
  document.head.appendChild(style);
}

const MarqueeBanner = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBounce = () => {
      if (textRef.current && boxRef.current) {
        const boxWidth = boxRef.current.clientWidth;
        const textWidth = textRef.current.clientWidth;

        const distance = boxWidth - textWidth;
        const safeDistance = Math.max(distance, 0);

        textRef.current.style.setProperty(
          "--bounce-distance",
          safeDistance + "px"
        );
      }
    };

    updateBounce();
    window.addEventListener("resize", updateBounce);
    return () => window.removeEventListener("resize", updateBounce);
  }, []);

  return (
    <div
      ref={boxRef}
      className="w-full overflow-hidden bg-accent/10  border-accent relative h-12 flex items-center"
    >
      <div
        ref={textRef}
        className="absolute whitespace-nowrap text-lg font-bold text-accent"
        style={{
          left: 0,
          transform: "translateX(0)",
          animation: "bounceAnim 8s linear infinite alternate",
        }}
      >
        Loan & Subsidy Service - Coming Soon 🚀
      </div>
    </div>
  );
};

export default MarqueeBanner;
