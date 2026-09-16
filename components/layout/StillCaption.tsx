export function StillCaption({ children }: { children?: string }) {
  return (
    <p className="mt-3 font-body text-[10px] font-light uppercase tracking-[0.2em] text-ink-grey">
      {children ?? "Film still · rights pending"}
    </p>
  );
}
