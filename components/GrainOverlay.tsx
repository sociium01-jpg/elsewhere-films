"use client";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2] opacity-[0.03]"
    >
      <div className="h-full w-full bg-[url('/images/grain.png')] bg-repeat" />
    </div>
  );
}
