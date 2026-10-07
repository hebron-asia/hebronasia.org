import type { Metadata } from "next";
import { Figtree, Fraunces, Noto_Sans_Thai, Parisienne } from "next/font/google";
import { PreferenceBar } from "@/components/PreferenceBar";
import { PreferencesProvider, PreferencesScript } from "@/components/Preferences";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { dictionaries } from "@/lib/content";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const thai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-thai",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hebronasia.org"),
  title: {
    default: dictionaries.en.site.name,
    template: `%s | ${dictionaries.en.site.name}`,
  },
  description: dictionaries.en.site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH"],
    siteName: dictionaries.en.site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${script.variable} ${thai.variable}`}
    >
      <head>
        <PreferencesScript />
      </head>
      <body>
        <PreferencesProvider>
          <SkipLink />
          <PreferenceBar />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </PreferencesProvider>
      </body>
    </html>
  );
}
