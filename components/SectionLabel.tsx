export function SectionLabel({
  children,
  dark = false,
  pulse = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  pulse?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-2 ${
        dark
          ? "border-white/20 bg-white/5"
          : "border-accent/30 bg-accent/5"
      }`}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {children}
      </span>
    </div>
  );
}
