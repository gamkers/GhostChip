"use client";
import FadeIn from "@/components/FadeIn";

const SPECS = [
  { label: "MICROCONTROLLER", value: "ESP32-S3", sub: "Dual-Core XTensa LX7" },
  { label: "CLOCK SPEED", value: "240 MHz", sub: "Dual-Core" },
  { label: "FLASH STORAGE", value: "16 MB", sub: "SPI NOR Flash" },
  { label: "PSRAM", value: "8 MB", sub: "OPI High Speed" },
  { label: "USB INTERFACE", value: "USB 2.0", sub: "OTG Composite HID" },
  { label: "WIFI", value: "2.4 GHz", sub: "802.11 b/g/n AP + STA" },
  { label: "BLUETOOTH", value: "BLE 5.0", sub: "Low Energy" },
  { label: "STORAGE", value: "MicroSD", sub: "SPI Interface" },
  { label: "INDICATOR", value: "WS2812", sub: "RGB NeoPixel" },
  { label: "INTERFACE", value: "USB-A", sub: "Stealthy Dongle Form" },
  { label: "KILL SWITCH", value: "BOOT BTN", sub: "Tactile Hardware Button" },
  { label: "FIRMWARE", value: "v3.3.1", sub: "GhostChip Custom" },
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="section" style={{ background: "transparent" }}>
      <div className="grid-overlay" style={{ opacity: 0.5 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn delay={100} direction="up">
        <span className="eyebrow">HARDWARE SPECIFICATIONS</span>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(48px, 7vw, 120px)",
            color: "var(--gc-white)",
            lineHeight: 0.9,
            marginTop: 12,
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}
        >
          <span style={{ fontSize: "0.5em", opacity: 0.8, display: "inline-block", transform: "translateY(-0.2em)" }}>SMALL</span> HARDWARE.
          <br />
          <span style={{ color: "var(--gc-green)" }}>SERIOUS</span> SPECS.
        </h2>
        </FadeIn>

        {/* Specs grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(clamp(160px, 18vw, 220px), 1fr))",
          gap: 1,
          border: "1px solid var(--gc-border)",
          background: "var(--gc-border)",
        }}>
          {SPECS.map((s, i) => (
            <div key={i} style={{
              background: "var(--gc-card)",
              padding: "clamp(16px, 2.5vw, 28px)",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,255,65,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--gc-card)")}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gc-muted)", marginBottom: 8 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(22px, 3vw, 40px)", color: "var(--gc-green)", lineHeight: 1, letterSpacing: "0.02em" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "var(--gc-muted)", marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint strip */}
        <div style={{
          marginTop: "clamp(32px, 5vw, 60px)",
          padding: "24px clamp(16px, 3vw, 36px)",
          border: "1px solid rgba(0,255,65,0.12)",
          background: "rgba(0,255,65,0.02)",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 40px",
          alignItems: "center",
        }}>
          <span className="annotation">PLATFORM: LilyGo T-Dongle-S3</span>
          <span className="annotation">CASING: Custom Acrylic</span>
          <span className="annotation">FIRMWARE: Open Source</span>
          <span className="annotation">MADE IN INDIA</span>
          <span className="annotation" style={{ marginLeft: "auto" }}>GAMKERS © 2026</span>
        </div>
      </div>
    </section>
  );
}
