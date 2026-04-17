"use client";

import { animate, splitText, stagger } from "animejs";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type BounceTextProps = {
  text: string;
  className?: string;
  loop?: boolean;
};

const BounceText = ({ text, className, loop = false }: BounceTextProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const heading = headingRef.current;
    const originalText = heading.textContent || "";

    const { chars } = splitText(heading, {
      words: false,
      chars: true,
    });

    chars.forEach((char) => {
      char.style.display = "inline-block";
      if (char.textContent === " ") {
        char.style.width = "0.35em";
      }
    });

    const animation = animate(chars, {
      y: [
        { to: "-1.6rem", ease: "outExpo", duration: 520 },
        { to: "0rem", ease: "outBounce", duration: 760, delay: 90 },
      ],
      rotate: [
        { to: "-10deg", duration: 300, ease: "out(3)" },
        { to: "0deg", duration: 740, ease: "outBounce", delay: 70 },
      ],
      delay: stagger(45),
      loop,
      loopDelay: 900,
    });

    return () => {
      (animation as { pause?: () => void; cancel?: () => void }).pause?.();
      (animation as { cancel?: () => void }).cancel?.();

      if (headingRef.current) {
        headingRef.current.textContent = originalText;
      }
    };
  }, [loop]);

  return (
    <h2 ref={headingRef} className={cn("page-title-bg", className)}>
      {text}
    </h2>
  );
};

export default BounceText;
