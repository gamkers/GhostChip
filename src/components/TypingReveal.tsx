"use client";
import { useEffect, useRef, useState } from "react";

interface TypingRevealProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export default function TypingReveal({ text, className, delay = 0, speed = 30, cursor = false }: TypingRevealProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // Triggers slightly before it fully comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasAnimated, text, delay, speed]);

  return (
    <span ref={containerRef} className={className} style={{ display: "inline-block", minHeight: "1em" }}>
      {displayedText}
      {cursor && hasAnimated && displayedText.length < text.length && (
        <span className="blink-cursor" style={{ opacity: 0.7 }}>█</span>
      )}
      {/* Invisible placeholder to prevent layout shift */}
      {!hasAnimated && <span style={{ visibility: "hidden" }}>{text}</span>}
    </span>
  );
}
