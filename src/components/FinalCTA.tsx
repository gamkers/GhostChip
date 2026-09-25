"use client";

export default function FinalCTA() {
  return (
    <section className="section" style={{ 
      minHeight: "100vh", 
      background: "transparent", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      textAlign: "center" 
    }}>
      {/* Background ambient graphics */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at center, rgba(0,255,65,0.08) 0%, transparent 60%)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 10 }}>
        <h2 
          className="font-display"
          style={{ 
            fontSize: "clamp(80px, 16vw, 300px)", 
            color: "var(--gc-white)", 
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            textShadow: "0 0 100px rgba(0,255,65,0.15)"
          }}
        >
          GO<br/>
          <span style={{ color: "var(--gc-green)" }}>GHOST.</span>
        </h2>
        
        <p style={{ 
          marginTop: "clamp(24px, 4vw, 40px)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(12px, 1.5vw, 18px)",
          color: "var(--gc-muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}>
          THE POCKET-SIZED SECURITY + AUTOMATION TOOLKIT.
        </p>

        <div style={{ marginTop: "clamp(40px, 6vw, 60px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <a href="#pricing" className="btn-primary" style={{ padding: "18px 48px", fontSize: "1.1rem" }}>
            GET GHOSTCHIP ↗
          </a>
          <a href="https://gamkers.in" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "12px 32px" }}>
            JOIN THE COMMUNITY
          </a>
        </div>
      </div>
    </section>
  );
}
