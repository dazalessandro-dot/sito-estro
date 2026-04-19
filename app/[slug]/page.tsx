import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionPageTemplate } from "@/components/SectionPageTemplate";
import { getSectionBySlug, studioSections } from "@/data/sections";

type SectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return studioSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${section.title} | ESTRO`,
    description: section.subtitle,
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    notFound();
  }

  return <SectionPageTemplate section={section} />;
}
