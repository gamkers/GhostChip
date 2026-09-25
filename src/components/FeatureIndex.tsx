"use client";
import FadeIn from "@/components/FadeIn";

const CATEGORIES = [
  {
    num: "01",
    title: "PAYLOAD & SCRIPTING",
    items: [
      { name: "DuckyScript Editor", desc: "Full-featured browser IDE with syntax highlighting." },
      { name: "AI Payload Architect", desc: "Convert natural language directly into working payloads." },
      { name: "AI Agent", desc: "Autonomous scripting and recon analysis." },
      { name: "AI Voice Assistant", desc: "Voice-controlled payload generation and execution." },
      { name: "Prompt Enhancer", desc: "Optimize AI prompts for flawless script generation." },
      { name: "Code Typer", desc: "Type out entire files as keyboard keystrokes instantly." },
      { name: "Script Builder", desc: "Visual node-based logic builder for complex macros." },
      { name: "Payload Templates", desc: "Pre-loaded studio of the most effective scripts." },
      { name: "Action Recorder", desc: "Record your own keystrokes and save as a script." },
      { name: "Favourites Library", desc: "1-click execution for your most used tools." },
      { name: "Shortcuts Launcher", desc: "Quickly deploy system commands across OS targets." },
    ],
  },
  {
    num: "02",
    title: "RECON & TESTING",
    items: [
      { name: "2.4GHz WiFi Scanner", desc: "Analyze access points, channels, and signal strengths." },
      { name: "BLE 5.0 Scanner", desc: "Discover and enumerate nearby Bluetooth Low Energy devices." },
      { name: "Flipper Zero Detection", desc: "Identify active Flipper Zero devices and their shell colors." },
      { name: "Passive Deauth Monitor", desc: "Detect potential deauthentication attacks on your network." },
      { name: "Gated Active Deauth", desc: "Token-gated stress testing for authorized networks only." },
      { name: "WiFi Station Connect", desc: "Connect GhostChip to existing networks for remote access." },
    ],
  },
  {
    num: "03",
    title: "HID & INPUT CONTROL",
    items: [
      { name: "Live Keyboard", desc: "Type directly onto the target device from your browser." },
      { name: "Voice Dictation", desc: "Transcribe your speech into keystrokes on the target." },
      { name: "Remote Mouse", desc: "Full trackpad control with left/right click and scroll." },
      { name: "Drawing Pad", desc: "Sketch on your phone, draw on the target screen." },
      { name: "Virtual Gamepad", desc: "Emulate an Xbox controller for gaming or testing." },
      { name: "Media Remote", desc: "Control volume, playback, and presentation slides." },
      { name: "Mouse Jiggler", desc: "Prevent system sleep with subtle mouse movements." },
      { name: "Drunk Mouse", desc: "Randomized chaotic cursor movement for pranks." },
      { name: "Auto Clicker", desc: "High-speed repetitive clicking for automation." },
      { name: "Presentation Mode", desc: "Dedicated slide control with built-in laser pointer UI." },
    ],
  },
  {
    num: "04",
    title: "STORAGE & SYSTEM",
    items: [
      { name: "SD File Manager", desc: "Browse, upload, and download from the MicroSD." },
      { name: "Encrypted Vault", desc: "Securely store API keys, passwords, and sensitive payloads." },
      { name: "NeoPixel Control", desc: "Customize the built-in RGB LED for status indication." },
      { name: "Device Info", desc: "Real-time stats on memory, CPU, and network status." },
      { name: "OTA Updates", desc: "Flash the latest GhostChip firmware directly over WiFi." },
      { name: "Settings & API", desc: "Manage your Groq API key and device configuration." },
    ],
  },
];

export default function FeatureIndex() {
  return (
    <section id="features" className="section" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn delay={100} direction="up">
          <span className="eyebrow">THE COMPLETE ARSENAL</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(56px, 8vw, 140px)", color: "var(--gc-white)", lineHeight: 0.9, marginTop: 12, marginBottom: "clamp(48px, 7vw, 96px)" }}
          >
            EVERYTHING
            <br />
            <span style={{ color: "var(--gc-green)" }}>INSIDE.</span>
          </h2>
        </FadeIn>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 10px)); }
          }
          .marquee-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .feature-card {
            width: 320px;
            padding: 20px;
            background: var(--gc-card);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: crosshair;
            position: relative;
            overflow: hidden;
          }
          .feature-card:hover {
            background: #141414;
            border-color: rgba(0, 255, 65, 0.2);
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(0, 255, 65, 0.08);
          }
          .feature-card:hover .item-title { color: var(--gc-green) !important; }
          .feature-card:hover .item-dot { opacity: 1 !important; box-shadow: 0 0 8px var(--gc-green); }
        `}} />

        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {CATEGORIES.map((cat, catIdx) => (
            <div key={cat.num} style={{ overflow: "hidden", width: "100vw", position: "relative", left: "50%", transform: "translateX(-50%)" }}>
              <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "baseline", gap: 14, marginBottom: 24 }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  color: "rgba(0,255,65,0.12)",
                  lineHeight: 1,
                  fontWeight: "normal",
                }}>{cat.num}</span>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gc-green)",
                  opacity: 0.8,
                }}>{cat.title}</h3>
              </div>
              
              <FadeIn delay={catIdx * 100} direction={catIdx % 2 === 0 ? "right" : "left"}>
              <div style={{ overflow: "hidden", width: "100%", paddingBottom: "20px" }}>
                {/* Alternate animation direction based on category index */}
                <div className="marquee-track" style={{ animationDirection: catIdx % 2 === 1 ? "reverse" : "normal" }}>
                  {[...cat.items, ...cat.items].map((item, i) => (
                    <div key={i} className="feature-card">
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span className="item-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gc-green)", flexShrink: 0, opacity: 0.3, transition: "all 0.3s" }} />
                        <span className="item-title" style={{ color: "var(--gc-white)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em", transition: "color 0.3s" }}>{item.name}</span>
                      </div>
                      <div style={{ paddingLeft: 18, color: "var(--gc-muted)", opacity: 0.8, fontSize: "0.8rem", lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "clamp(40px, 6vw, 80px)",
          padding: "24px",
          border: "1px solid rgba(0,255,65,0.15)",
          background: "rgba(0,255,65,0.02)",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <span className="font-display" style={{ fontSize: "clamp(40px, 5vw, 80px)", color: "var(--gc-green)", lineHeight: 1 }}>THE</span>
          <div>
            <p style={{ fontSize: "0.82rem", color: "var(--gc-muted)", lineHeight: 1.6 }}>
              Full toolkit available from your phone browser, served entirely from the chip&apos;s internal SPIFFS memory.
              Zero internet. Zero cloud. Zero apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
