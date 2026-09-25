"use client";
import { useEffect, useRef } from "react";

const ALL_FEATURES = [
  "MOUSE JIGGLER", "AI PAYLOAD ARCHITECT", "VIRTUAL GAMEPAD",
  "ENCRYPTED VAULT", "BLE FLIPPER DETECTOR", "MEDIA CONTROL",
  "WIFI RECONNAISSANCE", "DRAWING PAD", "MCP SERVER",
  "VOICE DICTATION", "PASSIVE DEAUTH", "AUTO RUN",
  "LIVE CODE TYPER", "PRESENTATION MODE", "SD FILE MANAGER"
];

export default function Hero() {
  const ghostRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vanilla CSS-based intro animation — no GSAP needed for initial load
    const els = [
      { el: eyebrowRef.current, delay: 200 },
      { el: ghostRef.current, delay: 400 },
      { el: chipRef.current, delay: 600 },
      { el: labelsRef.current, delay: 1000 },
      { el: ctaRef.current, delay: 1200 },
    ];
    els.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 50);
      });
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "transparent",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(16px, 4vw, 60px)",
        paddingTop: 20,
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Ambient green gradient */}
      <div style={{
        position: "absolute",
        top: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: "50vw", height: "40vh",
        background: "radial-gradient(ellipse at center, rgba(0,255,65,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* PCB traces SVG */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0 450 H200 V200 H600 V450 H900 V300 H1200 V450 H1440" stroke="#00FF41" strokeWidth="1" fill="none" className="pcb-trace" />
        <path d="M0 600 H300 V700 H800 V500 H1100 V700 H1440" stroke="#00FF41" strokeWidth="1" fill="none" className="pcb-trace" style={{ animationDelay: "0.5s" }} />
        <circle cx="200" cy="200" r="6" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.6" />
        <circle cx="600" cy="450" r="6" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.6" />
        <circle cx="900" cy="300" r="6" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.6" />
        <circle cx="1200" cy="450" r="6" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* Eyebrow Badge */}
      <div ref={eyebrowRef} style={{ textAlign: "center", marginTop: "clamp(10px, 2vh, 40px)", marginBottom: "10px", zIndex: 5 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(0, 255, 65, 0.05)",
          border: "1px solid rgba(0, 255, 65, 0.2)",
          padding: "clamp(6px, 2vw, 8px) clamp(12px, 3vw, 20px)",
          borderRadius: 100,
          boxShadow: "0 0 20px rgba(0, 255, 65, 0.1)"
        }}>
          <span style={{ width: 8, height: 8, background: "var(--gc-green)", borderRadius: "50%", animation: "pulseGlow 2s infinite alternate", flexShrink: 0 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.55rem, 2.5vw, 0.8rem)", color: "var(--gc-green)", letterSpacing: "0.1em", fontWeight: 600 }}>THE WORLD'S FIRST AI-POWERED BADUSB</span>
        </div>
      </div>

      {/* Main Hero Lockup: Text (Left) + Terminal (Right) */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(30px, 6vw, 80px)",
        width: "100%",
        maxWidth: 1200,
        zIndex: 10,
        position: "relative",
      }}>

        {/* Left Side: GHOST CHIP Text */}
        <div className="hero-text-block">
          {/* GHOST */}
          <div ref={ghostRef} style={{ position: "relative", lineHeight: 0.85, textTransform: "uppercase", marginBottom: -8 }}>
            <span
              className="font-display text-display glitch-hover"
              data-text="GHOST"
              style={{
                color: "var(--gc-white)",
                textShadow: "0 0 100px rgba(0,255,65,0.3)",
                display: "block",
                letterSpacing: "-0.04em",
                position: "relative",
              }}
            >
              GHOST
            </span>
          </div>

          {/* CHIP */}
          <div ref={chipRef} style={{ position: "relative", lineHeight: 0.85, textTransform: "uppercase" }}>
            <span
              className="font-display text-display glitch-hover"
              data-text="CHIP"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px rgba(255,255,255,0.8)",
                display: "block",
                letterSpacing: "-0.04em",
                position: "relative",
              }}
            >
              CHIP
            </span>
          </div>
        </div>

        {/* Right Side: Product Image */}
        <div className="hero-image-block" style={{
          transform: "rotate(2deg) perspective(1000px) rotateY(-10deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.4s",
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0, 255, 65, 0.2))",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) perspective(1000px) rotateY(0deg) scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "rotate(2deg) perspective(1000px) rotateY(-10deg) scale(1)"}
        >
          <img 
            src="/ghostchip-device.png" 
            alt="GhostChip Device" 
            style={{ 
              width: "100%", 
              height: "auto",
              objectFit: "contain",
              pointerEvents: "none"
            }} 
          />
        </div>
      </div>

      {/* Dynamic Feature Marquee */}
      <div
        ref={labelsRef}
        style={{
          width: "100%",
          overflow: "hidden",
          marginTop: "10px",
          zIndex: 5,
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(0,0,0,0.4)"
        }}
      >
        <div style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
          animation: "heroMarquee 40s linear infinite",
        }}>
          {[...ALL_FEATURES, ...ALL_FEATURES].map((feat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--gc-white)", whiteSpace: "nowrap", opacity: 0.8 }}>{feat}</span>
              <span style={{ color: "var(--gc-green)", opacity: 0.5 }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div
        ref={ctaRef}
        style={{
          marginTop: "clamp(28px, 5vw, 56px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          zIndex: 5,
        }}
      >
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#pricing" className="btn-primary">
            GET GHOSTCHIP ↗
            <span style={{
              marginLeft: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              opacity: 0.8,
            }}>₹2,399</span>
          </a>
          <a href="#features" className="btn-ghost">EXPLORE THE TOOLKIT ↓</a>
        </div>
        <div style={{
          display: "flex",
          gap: "20px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--gc-muted)",
        }}>
          <span>NO APP</span>
          <span style={{ color: "var(--gc-green)", opacity: 0.4 }}>·</span>
          <span>NO CLOUD</span>
          <span style={{ color: "var(--gc-green)", opacity: 0.4 }}>·</span>
          <span>NO SUBSCRIPTION</span>
        </div>
      </div>

      {/* Scan line effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: 0.3,
      }}>
        <div style={{
          position: "absolute",
          width: "100%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--gc-green), transparent)",
          animation: "scanLine 4s linear infinite",
        }} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: 0.4,
      }}>
        <div style={{
          width: 1,
          height: 48,
          background: "linear-gradient(180deg, transparent, var(--gc-green))",
          animation: "float 2s ease-in-out infinite",
        }} />
        <span className="annotation" style={{ fontSize: "0.55rem" }}>SCROLL</span>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes heroMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 20px)); }
        }
        @keyframes pulseGlow {
          0% { opacity: 0.4; box-shadow: 0 0 4px var(--gc-green); }
          100% { opacity: 1; box-shadow: 0 0 16px var(--gc-green); }
        }
        .blink-cursor {
          animation: blink 1s step-end infinite;
          color: var(--gc-green);
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </section>
  );
}
