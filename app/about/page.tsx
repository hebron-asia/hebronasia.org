import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { dictionaries } from "@/lib/content";

export const metadata: Metadata = {
  title: dictionaries.en.about.title,
  description: dictionaries.en.about.lede,
};

export default function AboutPage() {
  return <AboutContent />;
}
