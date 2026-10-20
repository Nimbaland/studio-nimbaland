import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

/** Link im Button-Stil. Primary = Lime auf dunkel / Graphite auf hell. */
export function ButtonLink({ href, variant = "primary", children, icon = true, className = "", ...rest }: ButtonLinkProps) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <ArrowUpRight />}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  loading?: boolean;
  loadingLabel?: string;
  icon?: boolean;
} & ComponentProps<"button">;

export function Button({ variant = "primary", loading, loadingLabel, icon = true, children, className = "", disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      <span>{loading && loadingLabel ? loadingLabel : children}</span>
      {icon && !loading && <ArrowUpRight />}
    </button>
  );
}
