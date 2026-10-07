"use client";

import Image from "next/image";
import { usePreferences } from "@/components/Preferences";

export function LogoSlider() {
  const { locale, t } = usePreferences();

  return (
    <div className="logo-slider">
      <div className="lockup" lang={locale}>
        <Image
          className="lockup-mark"
          src="/images/haf-stacked.png"
          alt=""
          width={150}
          height={219}
          priority
        />
        <p className="lockup-name">{t.site.name}</p>
      </div>
    </div>
  );
}
