export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="30" height="30" rx="8" fill="url(#rs-logo-gradient)" />
        <path d="M9 8.5L16 15L9 21.5V8.5Z" fill="white" />
        <path d="M16.5 8.5L23.5 15L16.5 21.5V8.5Z" fill="white" fillOpacity="0.75" />
        <defs>
          <linearGradient id="rs-logo-gradient" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0052FF" />
            <stop offset="1" stopColor="#4D7CFF" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`font-display font-bold text-[1.15rem] leading-none ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        Resume Skip
      </span>
    </div>
  );
}
