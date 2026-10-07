import type { Metadata } from "next";
import { PartnerContent } from "@/components/pages/PartnerContent";
import { dictionaries } from "@/lib/content";

export const metadata: Metadata = {
  title: dictionaries.en.partner.title,
  description: dictionaries.en.partner.lede,
};

export default function PartnerPage() {
  return <PartnerContent />;
}
