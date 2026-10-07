"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { usePreferences } from "@/components/Preferences";
import { site } from "@/lib/content";

export function SiteFooter() {
  const { locale, t } = usePreferences();
  const secondaryName =
    locale === "th" ? "Hebron Asia Foundation" : site.thaiName;

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">
            <Image
              className="footer-logo"
              src="/images/haf-mark.png"
              alt=""
              width={145}
              height={143}
            />
            <div>
              <p className="footer-name">{t.site.name}</p>
              <p className="footer-thai" lang={locale === "th" ? "en" : "th"}>
                {secondaryName}
              </p>
            </div>
          </div>
          <ContactDetails />
        </div>
        <nav aria-label="Footer">
          <ul className="footer-nav">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={site.haitUrl} target="_blank" rel="noopener noreferrer">
                {t.ui.footerInstitute}
                <span className="sr-only">{t.ui.newTab}</span>
              </a>
            </li>
            <li>
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site.donateLabel}
                <span className="sr-only">{t.ui.newTab}</span>
              </a>
            </li>
            <li>
              <a
                href={site.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site.youtubeLabel}
                <span className="sr-only">{t.ui.newTab}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="shell footer-meta">
        <p className="script-footer footer-tagline">{t.site.tagline}</p>
        <p>
          {t.site.values.join(" · ")} · © {new Date().getFullYear()}{" "}
          {t.site.name}
        </p>
      </div>
    </footer>
  );
}
