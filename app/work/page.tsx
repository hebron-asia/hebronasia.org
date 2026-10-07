import type { Metadata } from "next";
import { WorkContent } from "@/components/pages/WorkContent";
import { dictionaries } from "@/lib/content";

export const metadata: Metadata = {
  title: dictionaries.en.work.title,
  description: dictionaries.en.work.lede,
};

export default function WorkPage() {
  return <WorkContent />;
}
