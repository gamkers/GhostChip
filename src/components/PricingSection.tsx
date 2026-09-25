"use client";

export default function PricingSection() {
  return (
    <section id="pricing" className="section" style={{ background: "transparent" }}>
      <div className="grid-overlay" />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 96px)" }}>
          <span className="eyebrow">READY TO DEPLOY?</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(64px, 10vw, 160px)", color: "var(--gc-white)", lineHeight: 0.88, marginTop: 12 }}
          >
            GET<br />
            <span style={{ color: "var(--gc-green)" }} className="text-glow">GHOSTCHIP.</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(300px, 40vw, 500px), 1fr))",
          gap: "clamp(24px, 4vw, 40px)",
          alignItems: "center",
        }}>
          {/* Option 1: Without Case */}
          <div className="pricing-card" style={{ opacity: 0.9 }}>
            <span className="feature-tag" style={{ color: "var(--gc-muted)", borderColor: "var(--gc-border)", background: "transparent", marginBottom: 24 }}>WITHOUT 3D CASE</span>
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 6vw, 80px)", color: "var(--gc-white)", lineHeight: 1 }}>₹2,399</span>
            </div>
            <p style={{ color: "var(--gc-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 32 }}>
              The ultimate plug-and-play experience. Pre-flashed, tested, and ready to deploy out of the box.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40, color: "var(--gc-white)", fontSize: "0.85rem" }}>
              <li className="annotation-line"><span><strong style={{ color: "var(--gc-green)" }}>INCLUDES:</strong> GhostChip Hardware (ESP32-S3)</span></li>
              <li className="annotation-line"><span><strong style={{ color: "var(--gc-green)" }}>INCLUDES:</strong> 16GB MicroSD Card</span></li>
              <li className="annotation-line"><span>Pre-flashed with GhostChip v3.3.1</span></li>
              <li className="annotation-line"><span>Priority Email Support</span></li>
            </ul>
            <a href="https://store.gamkers.in/products/ghostchip?variant=48187136508145" target="_blank" rel="noreferrer" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
              ADD TO CART ↗
            </a>
          </div>

          {/* Option 2: With Case */}
          <div className="pricing-card featured" style={{ background: "rgba(0,255,65,0.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <span className="feature-tag" style={{ border: "1px solid var(--gc-green)", color: "var(--gc-green)", background: "rgba(0,255,65,0.1)" }}>WITH 3D CASE</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--gc-green)", background: "rgba(0,255,65,0.1)", padding: "4px 8px", borderRadius: 4 }}>
                BEST VALUE
              </span>
            </div>
            <div style={{ marginBottom: 32, display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px, 8vw, 100px)", color: "var(--gc-green)", lineHeight: 1, textShadow: "0 0 40px rgba(0,255,65,0.2)" }}>₹2,499</span>
            </div>
            <p style={{ color: "var(--gc-white)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 32 }}>
              The ultimate plug-and-play experience. Pre-flashed, tested, and ready to deploy out of the box with a custom stealth acrylic case.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40, color: "var(--gc-white)", fontSize: "0.85rem" }}>
              <li className="annotation-line"><span><strong style={{ color: "var(--gc-green)" }}>INCLUDES:</strong> GhostChip Hardware (ESP32-S3)</span></li>
              <li className="annotation-line"><span><strong style={{ color: "var(--gc-green)" }}>INCLUDES:</strong> Custom Stealth Acrylic Case</span></li>
              <li className="annotation-line"><span><strong style={{ color: "var(--gc-green)" }}>INCLUDES:</strong> 16GB MicroSD Card</span></li>
              <li className="annotation-line"><span>Pre-flashed with GhostChip v3.3.1</span></li>
              <li className="annotation-line"><span>Priority Email Support</span></li>
            </ul>
            <a href="https://store.gamkers.in/products/ghostchip?variant=48187136508145" target="_blank" rel="noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "18px 32px" }}>
              ADD TO CART ↗
            </a>
            <div style={{ textAlign: "center", marginTop: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--gc-muted)" }}>
              SHIPS WITHIN 7 DAYS · FREE SHIPPING IN INDIA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
