import Hero from "../components/about/Hero";
import Services from "../components/about/Services";
import Timeline from "../components/about/Timeline";
import Values from "../components/about/Values";
import Process from "../components/about/Process";
import Impact from "../components/about/Impact";
import CTA from "../components/about/CTA";
import FestivalCelebrationSection from "../components/about/FestivalCelebrationSection";
import TeamHierarchySection from "../components/about/TeamHierarchySection";
import Script from "next/script";

import "./page.css";

export const metadata = {
  title: "NextGen Consultancy India | Trusted Startup Growth Partner",
  description:
    "Learn how NextGen Consultancy supports entrepreneurs with Startup India certification, MSME compliance, and strategic business growth.",
  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.)
  openGraph: {
    title: "Discover NextGen Business Consultancy | From Idea to Growth",
    description:
      "From registration to business expansion, NextGen Business Consultancy enables founders to focus on growth while we handle the rest.",
    url: "https://www.nextgenbusiness.co.in/about",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-about.webp", // About page OG image
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - About Us",
      },
    ],
  },

  // Twitter (Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Discover NextGen Business Consultancy | From Idea to Growth",
    description:
      "From registration to business expansion, NextGen Business Consultancy enables founders to focus on growth while we handle the rest.",
    images: ["https://www.nextgenbusiness.co.in/og-image-about.jpg"],
  },
};

export default function About() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.nextgenbusiness.co.in/about#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nextgenbusiness.co.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.nextgenbusiness.co.in/about",
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <FestivalCelebrationSection />
      {/* <Services /> */}
      <Timeline />
      <Values />
      <Process />
      <Impact />
      {/* <TeamHierarchySection /> */}
      <CTA />
    </>
  );
}
