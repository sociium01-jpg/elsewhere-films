export function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 130"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      aria-hidden
    >
      <circle cx="52" cy="28" r="18" />
      <circle cx="96" cy="28" r="18" />
      <path d="M52 46 V58 H96 V46" />
      <rect x="38" y="58" width="72" height="42" rx="3" />
      <rect x="48" y="68" width="10" height="10" />
      <rect x="64" y="68" width="10" height="10" />
      <rect x="80" y="68" width="10" height="10" />
      <path d="M110 72 H128 L140 79 V89 L128 96 H110" />
      <path d="M80 100 V118" />
      <path d="M52 118 H108" />
      <path d="M62 118 L56 128" />
      <path d="M98 118 L104 128" />
    </svg>
  );
}
