"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useContent } from "@/components/Preferences";

export function NavLinks() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const t = useContent();

  useEffect(() => {
    const menu = listRef.current
      ?.closest(".header-end")
      ?.querySelector("details");
    menu?.removeAttribute("open");
  }, [pathname]);

  return (
    <ul className="nav-list" ref={listRef}>
      {t.nav.map((item) => {
        const current =
          pathname === item.href || pathname === `${item.href}/`;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={item.href === "/partner" ? "nav-cta" : undefined}
              aria-current={current ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
