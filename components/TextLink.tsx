"use client";

import Link from "next/link";
import { useContent } from "@/components/Preferences";
import type { SiteLink } from "@/lib/content";

type TextLinkProps = SiteLink & {
  className?: string;
};

export function TextLink({ href, external, label, className }: TextLinkProps) {
  const t = useContent();
  const classNames = ["text-link", className].filter(Boolean).join(" ");
  const leavesSite = external || href.startsWith("http");

  if (leavesSite) {
    return (
      <a
        className={classNames}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        <span className="sr-only">{t.ui.newTab}</span>
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a className={classNames} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {label}
    </Link>
  );
}

type ButtonLinkProps = SiteLink & {
  tone?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  external,
  label,
  tone = "primary",
}: ButtonLinkProps) {
  const t = useContent();
  const className = `button button-${tone}`;

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        <span className="sr-only">{t.ui.newTab}</span>
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
