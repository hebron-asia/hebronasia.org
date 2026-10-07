"use client";

import { useContent } from "@/components/Preferences";
import { site } from "@/lib/content";

export function ContactDetails() {
  const t = useContent();

  return (
    <address>
      {t.site.location}
      <br />
      {t.site.hours}
      <br />
      <a href={site.phoneHref}>{site.phone}</a>
      <br />
      <a href={site.emailHref}>{site.email}</a>
      <br />
      <a href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
        {t.site.youtubeLabel}
        <span className="sr-only">{t.ui.newTab}</span>
      </a>
    </address>
  );
}
