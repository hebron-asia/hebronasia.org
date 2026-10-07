"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";
import { useContent } from "@/components/Preferences";

export function SiteHeader() {
  const t = useContent();

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <Link className="wordmark" href="/">
          <Image
            className="wordmark-logo"
            src="/images/haf-stacked.png"
            alt=""
            width={150}
            height={219}
            priority
          />
          <span className="wordmark-text">
            <span className="wordmark-name">{t.ui.wordmarkName}</span>
            <span className="wordmark-role">{t.ui.wordmarkRole}</span>
          </span>
        </Link>
        <div className="header-end">
          <details className="nav-disclosure">
            <summary>{t.ui.menu}</summary>
          </details>
          <nav className="primary-nav" aria-label="Primary">
            <NavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}
