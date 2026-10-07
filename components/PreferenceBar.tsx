"use client";

import { locales, type Locale } from "@/lib/content";
import { usePreferences } from "@/components/Preferences";

export function PreferenceBar() {
  const { locale, setLocale, theme, toggleTheme, t } = usePreferences();
  const isDark = theme === "dark";

  return (
    <div className="pref-bar">
      <div className="shell pref-bar-inner">
        <div
          className="lang-switch"
          role="group"
          aria-label={t.ui.languageLabel}
        >
          <span className="pref-label" aria-hidden="true">
            {t.ui.languageLabel}
          </span>
          {locales.map((item: Locale) => (
            <button
              key={item}
              type="button"
              lang={item}
              className="lang-option"
              aria-pressed={item === locale}
              onClick={() => setLocale(item)}
            >
              {t.ui.languageNames[item]}
            </button>
          ))}
        </div>

        <div className="theme-switch">
          <span className="pref-label" aria-hidden="true">
            {t.ui.themeLabel}
          </span>
          <span className="theme-face" aria-hidden="true">
            {t.ui.lightLabel}
          </span>
          <button
            type="button"
            className="theme-slider"
            role="switch"
            aria-checked={isDark}
            aria-label={t.ui.themeSwitchLabel}
            onClick={toggleTheme}
          >
            <span className="theme-slider-knob" aria-hidden="true" />
          </button>
          <span className="theme-face" aria-hidden="true">
            {t.ui.darkLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
