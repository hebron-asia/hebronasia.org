"use client";

import { useContent } from "@/components/Preferences";

export function SkipLink() {
  const t = useContent();

  return (
    <a className="skip-link" href="#main">
      {t.ui.skipToContent}
    </a>
  );
}
