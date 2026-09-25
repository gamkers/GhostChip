"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  let transform = "translate(0, 0)";
  if (!isVisible) {
    if (direction === "up") transform = "translateY(30px)";
    if (direction === "down") transform = "translateY(-30px)";
    if (direction === "left") transform = "translateX(30px)";
    if (direction === "right") transform = "translateX(-30px)";
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
}
