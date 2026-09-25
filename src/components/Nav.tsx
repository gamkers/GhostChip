"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = ["Features", "Hardware", "How It Works", "FAQ"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 20, 
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: 1200,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled ? "rgba(10, 10, 10, 0.7)" : "rgba(10, 10, 10, 0.2)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "50px",
        boxShadow: scrolled ? "0 20px 40px rgba(0,0,0,0.4)" : "none"
      }}
    >
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 clamp(20px, 4vw, 60px)",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gc-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
          </svg>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.12em",
            color: "#F5F5F5",
          }}>
            GHOSTCHIP<span style={{ color: "var(--gc-green)" }}>®</span>
          </span>
        </div>

        {/* Desktop links */}
        <nav style={{ gap: 40 }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gc-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gc-white)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--gc-muted)")}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="btn-primary hidden md:inline-flex"
          style={{ fontSize: "0.72rem", padding: "10px 20px" }}
        >
          BUY NOW ↗
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none",
            color: "var(--gc-white)", fontSize: "1.5rem", cursor: "pointer"
          }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: 0,
          right: 0,
          background: "rgba(10, 10, 10, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
          padding: "24px",
          display: "flex", flexDirection: "column", gap: 20,
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gc-white)",
                textDecoration: "none",
                textAlign: "center",
                padding: "10px 0"
              }}
            >
              {l}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary" style={{ fontSize: "0.75rem", justifyContent: "center", marginTop: 10 }}>
            BUY NOW ↗
          </a>
        </div>
      )}
    </header>
  );
}
