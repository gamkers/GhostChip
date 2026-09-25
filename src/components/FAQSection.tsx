"use client";
import { useState } from "react";

const FAQS = [
  { q: "Does it work on Windows, macOS and Linux?", a: "Yes. GhostChip emulates a standard USB Keyboard and Mouse (Composite HID). It requires zero drivers and works across all major operating systems instantly." },
  { q: "Do I need software on the target computer?", a: "No. The entire web application is hosted on the GhostChip itself. You connect to its local WiFi network from your phone or laptop and access the dashboard via your browser." },
  { q: "Is it legal?", a: "GhostChip is a dual-use technology designed for authorized IT administration, cybersecurity education, and penetration testing on systems you own or have explicit permission to test. Unauthorized use is strictly prohibited." },
  { q: "Can I use WiFi testing features?", a: "Yes, but the active Deauth Suite is strictly token-gated. You must configure the firmware with your specific network's BSSID and an ownership token to execute active tests." },
  { q: "How do firmware updates work?", a: "Updates are free and can be flashed directly from your browser using the built-in Web Serial flasher, or via OTA (Over-The-Air) from the GhostChip dashboard." },
  { q: "Does it need a subscription?", a: "No. The hardware and software are a one-time purchase. The Groq AI integration requires you to plug in your own free Groq API key." },
  { q: "Shipping time?", a: "We ship within 7 days across India. Delivery usually takes an additional 3-5 business days." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ background: "transparent", borderTop: "1px solid var(--gc-border)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 className="font-display" style={{ fontSize: "clamp(48px, 6vw, 100px)", color: "var(--gc-white)", marginBottom: "clamp(40px, 6vw, 80px)", textAlign: "center" }}>
          QUESTIONS.
        </h2>
        
        <div style={{ borderTop: "1px solid var(--gc-border)" }}>
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${open === i ? "open" : ""}`}
              style={{ cursor: "pointer", padding: "24px 0" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                <h3 style={{ 
                  fontFamily: "'Bebas Neue', sans-serif", 
                  fontSize: "clamp(24px, 3vw, 36px)", 
                  color: open === i ? "var(--gc-green)" : "var(--gc-white)",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s"
                }}>
                  {faq.q}
                </h3>
                <span style={{ 
                  color: open === i ? "var(--gc-green)" : "var(--gc-muted)",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s var(--ease-expo), color 0.2s",
                  fontSize: "1.5rem"
                }}>+</span>
              </div>
              <div className="faq-answer">
                <div style={{ 
                  paddingTop: 16, 
                  color: "var(--gc-muted)", 
                  lineHeight: 1.6,
                  display: "flex",
                  gap: 16
                }}>
                  <div style={{ width: 2, background: "var(--gc-green)", flexShrink: 0 }} />
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
