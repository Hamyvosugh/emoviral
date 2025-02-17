"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sections = ["بخش اول", "بخش دوم", "بخش سوم", "بخش چهارم"];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    gsap.to(contentRef.current, {
      yPercent: -100 * (sections.length - 1), // حرکت بین بخش‌ها
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (sections.length - 1)}`,
        pin: true, // قفل بخش
        scrub: 1, // حرکت نرم
        snap: 1 / (sections.length - 1), // اسکرول به بخش بعدی سنپ شود
      },
    });
  }, [sections.length]);

  return (
    <div className="h-[400vh] bg-gray-900">
      <div ref={containerRef} className="h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        <div ref={contentRef} className="w-full h-full flex flex-col">
          {sections.map((text, index) => (
            <div key={index} className="h-screen flex items-center justify-center text-white text-4xl font-bold">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;