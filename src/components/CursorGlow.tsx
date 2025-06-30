import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400/20 blur-3xl transition-opacity duration-200"
      style={{
        mixBlendMode: "plus-lighter",
        opacity: 0.2,
      }}
      aria-hidden="true"
    ></div>
  );
}
