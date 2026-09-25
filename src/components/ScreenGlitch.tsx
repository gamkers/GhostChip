"use client";

import { useEffect } from "react";

export default function ScreenGlitch() {
  useEffect(() => {
    // Randomly trigger a massive full-screen glitch effect
    const triggerGlitch = () => {
      // Only glitch if the user isn't hovering over something specific (optional, but good for UX)
      document.body.classList.add("trigger-full-glitch");
      
      setTimeout(() => {
        document.body.classList.remove("trigger-full-glitch");
      }, 300 + Math.random() * 400); // Glitch lasts 300-700ms

      // Schedule next glitch between 5 and 15 seconds
      setTimeout(triggerGlitch, 5000 + Math.random() * 10000);
    };

    // Start the random glitch loop
    const initialTimer = setTimeout(triggerGlitch, 3000);

    // Add CSS for the full screen glitch dynamically
    const style = document.createElement("style");
    style.innerHTML = `
      .trigger-full-glitch {
        overflow: hidden;
      }
      
      .trigger-full-glitch::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 255, 65, 0.03);
        pointer-events: none;
        z-index: 99999;
        mix-blend-mode: difference;
        animation: rgb-split 0.3s steps(2, end) infinite;
      }

      /* Glitch the entire screen content */
      .trigger-full-glitch main {
        animation: screen-jitter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }



      @keyframes rgb-split {
        0% { background: rgba(255, 0, 0, 0.08); }
        50% { background: rgba(0, 255, 255, 0.08); }
        100% { background: rgba(255, 0, 255, 0.08); }
      }

      @keyframes screen-jitter {
        0%, 100% { transform: translate(0, 0); filter: drop-shadow(0 0 transparent); }
        20% { transform: translate(8px, 1px); filter: drop-shadow(6px 0 #ff003c) drop-shadow(-6px 0 #00e6f6); }
        40% { transform: translate(-8px, -1px); filter: drop-shadow(-6px 0 #ff003c) drop-shadow(6px 0 #00e6f6); }
        60% { transform: translate(5px, 2px); filter: drop-shadow(4px 0 #ff003c) drop-shadow(-4px 0 #00e6f6); }
        80% { transform: translate(-5px, -2px); filter: drop-shadow(-4px 0 #ff003c) drop-shadow(4px 0 #00e6f6); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(initialTimer);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
}
