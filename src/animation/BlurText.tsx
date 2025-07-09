"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  easing?: string; // Keep compatible với Framer Motion API
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200, // Convert back to ms để tương thích với API cũ
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
  stepDuration = 0.35,
  easing = "power2.out",
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Memoize elements splitting
  const elements = useMemo(() => 
    animateBy === "words" ? text.split(" ") : text.split(""), 
    [text, animateBy]
  );

  // Memoize animation properties
  const animationProps = useMemo(() => {
    const yOffset = direction === "top" ? -50 : 50;
    
    return {
      from: { 
        filter: "blur(10px)", 
        opacity: 0, 
        y: yOffset,
        willChange: "transform, filter, opacity"
      },
      to: { 
        filter: "blur(0px)", 
        opacity: 1, 
        y: 0,
        willChange: "auto"
      }
    };
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all span elements
    const spans = container.querySelectorAll(".blur-char");
    if (spans.length === 0) return;

    // Set initial state
    gsap.set(spans, animationProps.from);

    // Create timeline
    const tl = gsap.timeline({ 
      paused: true,
      onComplete: onAnimationComplete
    });

    // Convert delay từ ms sang seconds để tương thích
    const delayInSeconds = delay / 1000;

    // Single-step animation với stagger
    tl.to(spans, {
      ...animationProps.to,
      duration: stepDuration,
      ease: easing,
      stagger: delayInSeconds,
    });

    timelineRef.current = tl;

    // Setup ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: `top bottom-=${rootMargin}`,
      once: true,
      onEnter: () => {
        tl.play();
      },
    });

    // Cleanup function
    return () => {
      scrollTrigger.kill();
      tl.kill();
      timelineRef.current = null;
    };
  }, [elements, animationProps, delay, stepDuration, easing, threshold, rootMargin, onAnimationComplete]);

  return (
    <p
      ref={containerRef}
      className={className}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {elements.map((segment, index) => (
        <span
          key={index}
          className="blur-char"
          style={{
            display: "inline-block",
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText; 