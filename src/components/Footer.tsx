export default function Footer() {
  return (
    <footer style={{ 
      background: "transparent", 
      borderTop: "1px solid var(--gc-border)",
      padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px) 40px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: 48,
        }}>
          {/* Top section */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--gc-white)", letterSpacing: "0.1em" }}>
                GAMKERS
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--gc-green)", marginTop: 8 }}>
                GhostChip
              </div>
            </div>

            <div style={{ display: "flex", gap: "clamp(40px, 8vw, 120px)", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#features" className="footer-link">PRODUCT</a>
                <a href="#features" className="footer-link">FEATURES</a>
                <a href="#hardware" className="footer-link">HARDWARE</a>
                <a href="#faq" className="footer-link">FAQ</a>
                <a href="mailto:support@gamkers.com" className="footer-link">CONTACT</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#" className="footer-link">TERMS</a>
                <a href="#" className="footer-link">PRIVACY</a>
                <a href="#" className="footer-link">SHIPPING</a>
                <a href="#" className="footer-link">RETURNS</a>
                <a href="#" className="footer-link" style={{ color: "var(--gc-green)" }}>AUTHORIZED USE</a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--gc-muted)"
          }}>
            <div>© 2026 GAMKERS</div>
            <div style={{ display: "flex", gap: 16 }}>
              <span>DESIGNED IN INDIA</span>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .footer-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--gc-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--gc-white); }
      `}} />
    </footer>
  );
}
