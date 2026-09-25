"use client";
import { useEffect, useState } from "react";
import TypingReveal from "@/components/TypingReveal";
import FadeIn from "@/components/FadeIn";

function AnimatedDots() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      setDots(d => d.length >= 3 ? "" : d + ".");
    }, 400);
    return () => clearInterval(i);
  }, []);
  return <span style={{ display: "inline-block", width: "1.2em", textAlign: "left" }}>{dots}</span>;
}
const FEATURES = [
  {
    tag: "AI SUITE",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>,
    title: "AI Payload Architect",
    desc: "Groq-powered AI translates plain English into perfect DuckyScript. Auto-complete, Agent, and Architect — all built in.",
  },
  {
    tag: "HID INJECTION",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/></svg>,
    title: "DuckyScript Engine",
    desc: "Full STRING, DELAY, GUI, CTRL, ALT, repeat loops and multi-key combos. Write, edit, simulate, and execute from any browser.",
  },
  {
    tag: "802.11 b/g/n",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12A14 14 0 0 1 22 12"/><path d="M5 15.5A10 10 0 0 1 19 15.5"/><path d="M8.5 19A5.5 5.5 0 0 1 15.5 19"/><circle cx="12" cy="22" r="1"/></svg>,
    title: "WiFi Spectrum Analyzer",
    desc: "Map the 2.4GHz spectrum in seconds. View SSIDs, BSSIDs, RSSI, channels, and encryption types.",
  },
  {
    tag: "FLIPPER DETECTION",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 10 10-5 5V2l5 5-10 10"/></svg>,
    title: "BLE 5.0 Radar",
    desc: "Sniff nearby Bluetooth Low Energy devices. Signature detector automatically flags Flipper Zero devices, including shell color.",
  },
  {
    tag: "TOKEN GATED",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    title: "802.11 Deauth Suite",
    desc: "Passive monitor detects deauth attacks in real-time. Active testing (gated, I_OWN_THIS_NETWORK) for your own infrastructure.",
  },
  {
    tag: "REMOTE HID",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>,
    title: "Wireless Peripherals",
    desc: "Remote Mouse, Drawing Pad, Virtual Gamepad, Full Keyboard, Presentation Remote, Mouse Jiggler — all from your phone browser.",
  },
  {
    tag: "AES ENCRYPTED",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "Hardware Encrypted Vault",
    desc: "Store passwords, API keys, and tokens in the ESP32's encrypted EEPROM. Secrets never leave the chip until injected.",
  },
  {
    tag: "SPI STORAGE",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M5 8h14"/><path d="M9 16h6"/></svg>,
    title: "MicroSD File Manager",
    desc: "Upload, download, delete, and execute payloads from MicroSD. Build a limitless library of scripts.",
  },
  {
    tag: "SILENT PAYLOAD",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Zero-Touch Auto-Execution",
    desc: "Drop /autorun/autorun.txt on SD. GhostChip silently executes it 3 seconds after plug-in — zero UI needed.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section" style={{ background: "transparent" }}>
      <div className="grid-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Heading */}
        <FadeIn delay={100} direction="up">
        <div style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}>
          <span className="eyebrow">CAPABILITIES</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(56px, 8vw, 140px)",
              color: "var(--gc-white)",
              lineHeight: 0.9,
              marginTop: 12,
            }}
          >
            ONE CHIP.
            <br />
            <span style={{ color: "var(--gc-green)" }} className="text-glow">
              MANY MODES<AnimatedDots />
            </span>
          </h2>
        </div>
        </FadeIn>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(clamp(260px, 30vw, 360px), 1fr))",
          gap: 1,
          border: "1px solid var(--gc-border)",
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                perspective: "1200px",
                height: "260px",
                cursor: "pointer",
                borderBottom: "1px solid var(--gc-border)",
                borderRight: "1px solid var(--gc-border)",
              }}
              onMouseEnter={e => {
                const inner = e.currentTarget.querySelector('.flip-inner') as HTMLElement;
                if(inner) inner.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={e => {
                const inner = e.currentTarget.querySelector('.flip-inner') as HTMLElement;
                if(inner) inner.style.transform = "rotateY(0deg)";
              }}
            >
              <div
                className="flip-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="glass-card"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    padding: "clamp(20px, 3vw, 36px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "none",
                  }}
                >
                  <div style={{ color: "var(--gc-green)", marginBottom: 16 }}>{f.icon}</div>
                  <span style={{ 
                    fontFamily: "'JetBrains Mono', monospace", 
                    fontSize: "0.7rem", 
                    color: "var(--gc-muted)", 
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                    textTransform: "uppercase"
                  }}>{f.tag}</span>
                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(26px, 2.5vw, 36px)",
                    color: "var(--gc-white)",
                    letterSpacing: "0.02em",
                    margin: 0,
                  }}>{f.title}</h3>
                </div>

                {/* Back Side */}
                <div
                  className="glass-card"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    padding: "clamp(20px, 3vw, 36px)",
                    transform: "rotateY(180deg)",
                    background: "rgba(0, 255, 65, 0.05)",
                    border: "none",
                    boxShadow: "inset 0 0 20px rgba(0,255,65,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span className="feature-tag" style={{ marginBottom: 12, display: "inline-block" }}>{f.tag}</span>
                  <p style={{ fontSize: "0.9rem", color: "var(--gc-white)", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
