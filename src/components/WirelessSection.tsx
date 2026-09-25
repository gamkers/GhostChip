"use client";
import { useEffect, useRef } from "react";

const DEVICES = [
  { name: "GHOSTLAB", rssi: -38, x: "62%", y: "22%" },
  { name: "LAB-NET", rssi: -54, x: "78%", y: "55%" },
  { name: "DEVICE_A", rssi: -67, x: "55%", y: "72%" },
  { name: "SECURE-AP", rssi: -71, x: "32%", y: "60%" },
  { name: "IOT-MESH", rssi: -82, x: "22%", y: "35%" },
];

function SignalStrength({ rssi }: { rssi: number }) {
  const bars = 4;
  const filled = rssi > -50 ? 4 : rssi > -65 ? 3 : rssi > -75 ? 2 : 1;
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
      {Array.from({ length: bars }, (_, i) => (
        <div
          key={i}
          style={{
            width: 4,
            height: 4 + i * 4,
            background: i < filled ? "var(--gc-green)" : "rgba(255,255,255,0.1)",
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

export default function WirelessSection() {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      barsRef.current.forEach(bar => {
        if (bar) bar.style.height = Math.random() * 80 + 10 + "%";
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(32px, 5vw, 60px)" }}>
          <span className="eyebrow">WIRELESS RECON</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 80px)", color: "var(--gc-white)", lineHeight: 0.9, marginTop: 12 }}
          >
            SEE THE <span style={{ color: "var(--gc-green)" }}>AIR.</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(24px, 5vw, 60px)",
        }}>
          {/* WiFi Scanner Visual */}
          <div style={{ position: "relative" }}>
            <div style={{ marginBottom: 16 }}>
              <span className="feature-tag">2.4 GHz WIFI SCANNER</span>
            </div>
            {/* Spectrum analyzer */}
            <div style={{
              height: 160,
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(0,255,65,0.15)",
              borderRadius: 8,
              display: "flex",
              alignItems: "flex-end",
              gap: 3,
              padding: "16px 12px 0",
              overflow: "hidden",
            }}>
              {Array.from({ length: 32 }, (_, i) => (
                <div
                  key={i}
                  ref={el => { if (el) barsRef.current[i] = el; }}
                  className="spectrum-bar"
                  style={{
                    flex: 1,
                    height: Math.random() * 60 + 10 + "%",
                    transition: "height 0.15s ease",
                  }}
                />
              ))}
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              color: "var(--gc-muted)",
            }}>
              <span>CH 1</span><span>CH 6</span><span>CH 11</span>
            </div>

            {/* Network list */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              {DEVICES.map(d => (
                <div key={d.name} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  background: "rgba(0,255,65,0.03)",
                  border: "1px solid rgba(0,255,65,0.1)",
                  borderRadius: 6,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <SignalStrength rssi={d.rssi} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--gc-white)" }}>{d.name}</span>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--gc-muted)" }}>{d.rssi} dBm</span>
                </div>
              ))}
            </div>
          </div>

          {/* BLE Radar */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span className="feature-tag">BLE 5.0 RADAR</span>
            </div>
            <div style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(0,255,65,0.15)",
              borderRadius: "50%",
              overflow: "hidden",
            }}>
              {/* Radar rings */}
              {[80, 60, 40, 20].map((size, i) => (
                <div key={i} style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  width: `${size}%`, height: `${size}%`,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,255,65,0.15)",
                }} />
              ))}
              {/* Radar sweep */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: "50%", height: 1,
                background: "linear-gradient(90deg, rgba(0,255,65,0.5), transparent)",
                transformOrigin: "left center",
                animation: "spin 3s linear infinite",
              }} />
              {/* Center dot */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 8, height: 8,
                borderRadius: "50%",
                background: "var(--gc-green)",
                boxShadow: "0 0 12px var(--gc-green)",
              }} />
              {/* BLE devices */}
              {DEVICES.slice(0, 4).map((d, i) => (
                <div key={d.name} style={{
                  position: "absolute",
                  top: d.y, left: d.x,
                  transform: "translate(-50%, -50%)",
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--gc-green)",
                    boxShadow: "0 0 8px var(--gc-green)",
                    animation: `radarPulse ${1.5 + i * 0.4}s ease-out infinite`,
                  }} />
                  <div style={{
                    position: "absolute",
                    top: 10, left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                    color: "var(--gc-green)",
                    whiteSpace: "nowrap",
                    opacity: 0.7,
                  }}>{d.name}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: "var(--gc-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                Scan nearby BLE devices in real time. GhostChip&apos;s signature detector automatically identifies
                <span style={{ color: "var(--gc-green)" }}> Flipper Zero</span> devices, including shell color.
              </p>
              <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["BLE 5.0", "DEVICE DISCOVERY", "FLIPPER DETECTION", "LOCAL SCANNING"].map(t => (
                  <span key={t} className="feature-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
