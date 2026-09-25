"use client";
import FadeIn from "@/components/FadeIn";
const COMPARE_ROWS = [
  { feature: "DuckyScript Engine", gc: true, fz: true, rd: true, omg: false },
  { feature: "AI Payload Generation", gc: true, fz: false, rd: false, omg: false },
  { feature: "WiFi Spectrum Scanner", gc: true, fz: true, rd: false, omg: false },
  { feature: "BLE 5.0 Radar", gc: true, fz: true, rd: false, omg: false },
  { feature: "Flipper Zero Detection", gc: true, fz: false, rd: false, omg: false },
  { feature: "Remote Mouse / Gamepad", gc: true, fz: false, rd: false, omg: false },
  { feature: "Drawing Pad", gc: true, fz: false, rd: false, omg: false },
  { feature: "Wireless Keyboard", gc: true, fz: false, rd: false, omg: false },
  { feature: "SD File Manager", gc: true, fz: true, rd: false, omg: false },
  { feature: "Encrypted Vault", gc: true, fz: false, rd: false, omg: false },
  { feature: "Browser-Based UI", gc: true, fz: false, rd: false, omg: false },
  { feature: "Zero App Install", gc: true, fz: false, rd: true, omg: true },
  { feature: "802.11 Deauth Suite", gc: true, fz: true, rd: false, omg: false },
  { feature: "Price (USD approx.)", gc: "$28", fz: "$169", rd: "$80", omg: "$120" },
];

const check = (v: boolean | string) => {
  if (typeof v === "string") return <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--gc-green)" }}>{v}</span>;
  return v
    ? <span className="compare-check" style={{ fontSize: "1rem" }}>✓</span>
    : <span className="compare-cross" style={{ fontSize: "1rem" }}>—</span>;
};

export default function ComparisonSection() {
  return (
    <section className="section" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn delay={100} direction="up">
        <span className="eyebrow">COMPARISON</span>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(56px, 8vw, 140px)", color: "var(--gc-white)", lineHeight: 0.9, marginTop: 12, marginBottom: "clamp(24px, 4vw, 40px)" }}
        >
          ONE <span style={{ color: "var(--gc-green)" }}>DEVICE.</span>
        </h2>
        </FadeIn>

        <FadeIn delay={300} direction="up">

        <div style={{ overflowX: "auto" }}>
          <table className="compare-table" style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--gc-border)" }}>
            <thead>
              <tr style={{ background: "rgba(0,255,65,0.04)" }}>
                <th style={{ minWidth: 200 }}>FEATURE</th>
                <th className="highlight-col" style={{ minWidth: 120 }}>GHOSTCHIP</th>
                <th style={{ minWidth: 120 }}>Flipper Zero</th>
                <th style={{ minWidth: 120 }}>Rubber Ducky</th>
                <th style={{ minWidth: 120 }}>O.MG Cable</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ color: "var(--gc-muted)" }}>{row.feature}</td>
                  <td className="highlight-col">{check(row.gc)}</td>
                  <td>{check(row.fz)}</td>
                  <td>{check(row.rd)}</td>
                  <td>{check(row.omg)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 16, fontSize: "0.7rem", color: "var(--gc-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
          * Comparison based on publicly available feature sets. For authorized use only.
        </p>
        </FadeIn>
      </div>
    </section>
  );
}
