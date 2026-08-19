"use client";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.055]"
    >
      <div className="grain-shift h-full w-full bg-[url('/images/grain.png')] bg-repeat" />
    </div>
  );
}
