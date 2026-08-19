"use client";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] opacity-[0.045]"
    >
      <div className="grain-shift h-full w-full bg-[url('/images/grain.png')] bg-repeat" />
    </div>
  );
}
