"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  getDictionary,
  locales,
  type Dictionary,
  type Locale,
} from "@/lib/content";

export type Theme = "light" | "dark";

export const LOCALE_STORAGE_KEY = "haf-locale";
export const THEME_STORAGE_KEY = "haf-theme";

type PreferencesValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: Dictionary;
};

const PreferencesContext = createContext<PreferencesValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export function PreferencesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [theme, setThemeState] = useState<Theme>("light");

  // Pick up the visitor's stored choices (and system theme) after mount, so the
  // statically exported markup stays stable for hydration.
  useEffect(() => {
    const storedLocale = readStoredLocale();
    if (storedLocale) {
      setLocaleState(storedLocale);
    } else if (
      typeof navigator !== "undefined" &&
      navigator.languages?.some((tag) => tag.toLowerCase().startsWith("th"))
    ) {
      setLocaleState("th");
    }

    const storedTheme = readStoredTheme();
    if (storedTheme) {
      setThemeState(storedTheme);
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); ignore.
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable; the choice still applies for this visit.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const value = useMemo<PreferencesValue>(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      toggleTheme,
      t: getDictionary(locale),
    }),
    [locale, setLocale, setTheme, theme, toggleTheme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesValue {
  const value = useContext(PreferencesContext);
  if (!value) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }
  return value;
}

/** Convenience hook for components that only need copy. */
export function useContent(): Dictionary {
  return usePreferences().t;
}

/**
 * Applies the stored theme and language before first paint so a returning
 * visitor never sees a flash of the default appearance.
 */
export function PreferencesScript() {
  const code = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t;var l=localStorage.getItem("${LOCALE_STORAGE_KEY}");if(l==="en"||l==="th"){document.documentElement.lang=l}}catch(e){document.documentElement.dataset.theme="light"}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
