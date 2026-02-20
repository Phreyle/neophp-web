import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
};

const baseClasses =
  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan sm:w-auto";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan text-white shadow-neon-glow hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(176,38,255,0.55)]",
  outline:
    "border border-white/25 bg-white/5 text-white hover:border-neon-cyan/60 hover:bg-white/10",
  ghost:
    "text-slate-100 hover:text-white",
};

export default function Button({
  children,
  className,
  href,
  target,
  rel,
  type = "button",
  variant = "primary",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`.trim();

  if (href) {
    return (
      <Link className={classes} href={href} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
