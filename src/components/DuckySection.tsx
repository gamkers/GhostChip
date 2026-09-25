"use client";
import { useEffect, useRef, useState } from "react";
import TypingReveal from "@/components/TypingReveal";
import FadeIn from "@/components/FadeIn";

const SCRIPT = [
  { text: "REM GhostChip Demo Payload", cls: "terminal-comment" },
  { text: "DELAY 500", cls: "terminal-dim" },
  { text: "GUI r", cls: "" },
  { text: "DELAY 600", cls: "terminal-dim" },
  { text: "STRING notepad", cls: "" },
  { text: "ENTER", cls: "terminal-dim" },
  { text: "DELAY 800", cls: "terminal-dim" },
  { text: "STRING GhostChip — the ghost in the machine.", cls: "" },
  { text: "ENTER", cls: "terminal-dim" },
  { text: "STRING Powered by GAMKERS.", cls: "" },
  { text: "ENTER", cls: "terminal-dim" },
];

export default function DuckySection() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => {
        setLineIdx(0); setCharIdx(0); setDone(false);
      }, 3500);
      return () => clearTimeout(t);
    }
    if (lineIdx >= SCRIPT.length) { setDone(true); return; }
    const line = SCRIPT[lineIdx];
    if (charIdx < line.text.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }, 280);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, done]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lineIdx, charIdx]);

  return (
    <section id="how-it-works" className="section" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left copy */}
          <FadeIn delay={100} direction="right">
          <div>
            <span className="eyebrow">DUCKYSCRIPT ENGINE</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(56px, 8vw, 140px)", color: "var(--gc-white)", lineHeight: 0.9, marginTop: 12 }}
            >
              <TypingReveal text="TYPE" delay={200} cursor={false} />
              <br />
              <TypingReveal text="ONCE." delay={400} cursor={false} />
              <br />
              <span style={{ color: "var(--gc-green)" }}><TypingReveal text="RUN" delay={600} cursor={false} /></span>
              <br />
              <TypingReveal text="ANYWHERE." delay={800} cursor={false} />
            </h2>
            <p style={{ color: "var(--gc-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginTop: 24, maxWidth: 440 }}>
              Write DuckyScript directly in the browser. Test it in the simulator. Execute on any USB-connected machine instantly.
              Zero drivers. Zero apps. Just plug and command.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              {["READY", "EXECUTING", "COMPLETE"].map((s, i) => (
                <span
                  key={s}
                  className="feature-tag"
                  style={{ color: i === 1 ? "var(--gc-green)" : "var(--gc-muted)", borderColor: i === 1 ? "var(--gc-green)" : "rgba(255,255,255,0.1)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Right terminal */}
          <FadeIn delay={400} direction="left">
          <div className="terminal-window">
            <div className="terminal-bar">
              <div className="terminal-dot" style={{ background: "#FF5F56" }} />
              <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
              <div className="terminal-dot" style={{ background: "#28C840" }} />
              <span style={{
                marginLeft: "auto", marginRight: "auto",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--gc-muted)",
                letterSpacing: "0.06em",
              }}>ghostchip — /autorun/autorun.txt</span>
            </div>
            <div ref={bodyRef} className="terminal-body" style={{ maxHeight: 340, overflowY: "auto" }}>
              {SCRIPT.slice(0, lineIdx).map((l, i) => (
                <div key={i} className={l.cls} style={{ color: l.cls === "terminal-comment" ? "var(--gc-muted)" : l.cls === "terminal-dim" ? "rgba(0,255,65,0.45)" : "var(--gc-green)" }}>
                  {l.text}
                </div>
              ))}
              {lineIdx < SCRIPT.length && (
                <div style={{ color: "var(--gc-green)" }}>
                  {SCRIPT[lineIdx].text.slice(0, charIdx)}
                  <span className="terminal-cursor" />
                </div>
              )}
              {done && (
                <div style={{ marginTop: 12, color: "var(--gc-green)", opacity: 0.6 }}>
                  [DONE] ✓ Payload executed successfully
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
