import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium text-sm h-12 px-6 transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-accent to-accent-secondary shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "text-foreground bg-transparent border border-border hover:bg-muted hover:border-accent/30 hover:shadow-sm",
  ghost: "text-muted-foreground bg-transparent hover:text-foreground",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
