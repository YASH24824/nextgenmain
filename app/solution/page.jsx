import Image from "next/image";
import Hero from "../components/solution/Hero";
import { Header } from "../components/Header";
import Support from "../components/solution/Support";
import { HotServicesSection } from "../components/solution/HotServicesSection";
import FAQ from "../components/solution/FAQ";
import CTA from "../components/solution/CTA";
import Footer from "../components/Footer";
import "./page.css";
import Script from "next/script"; // ✅ Import Next.js Script

export const metadata = {
  title: "NextGen Services | Compliance, Funding & Growth for Startups & MSMEs",
  description:
    "From registrations to investor access – NextGen Business Consultancy services help businesses grow faster and stay compliant.",
     alternates: {
    canonical: "https://www.nextgenbusiness.co.in/solution",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.)
  openGraph: {
    title: "NextGen Services | From Compliance to Digital Marketing & Expansion",
    description:
      "NextGen Business Consultancy offers tailored services to empower startups & MSMEs with funding, compliance, and digital growth.",
    url: "https://www.nextgenbusiness.co.in/solution",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-solution.jpg", // Services page OG image
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - Services",
      },
    ],
  },

  // Twitter (Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "NextGen Services | From Compliance to Digital Marketing & Expansion",
    description:
      "NextGen Business Consultancy offers tailored services to empower startups & MSMEs with funding, compliance, and digital growth.",
    images: ["https://www.nextgenbusiness.co.in/og-image-solution.jpg"],
    creator: "@NextGenBiz", // optional
  },
};

export default function Solution() {
   const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of businesses do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We partner with startups, MSMEs, and ambitious entrepreneurs, turning raw ideas into thriving business ventures.",
        },
      },
      {
        "@type": "Question",
        name: "How do you simplify business processes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By handling registrations, compliance, funding, and growth strategies, we remove chaos, leaving pure clarity.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide funding support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, from grants to investor connections, we help unlock capital that fuels your growth journey.",
        },
      },
      {
        "@type": "Question",
        name: "How does your consultancy stand out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We don’t just advise; we co-create, building businesses like co-founders, not outside consultants.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with scaling and marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely, we amplify brand visibility, craft impactful campaigns, and design strategies to dominate competitive markets.",
        },
      },
      {
        "@type": "Question",
        name: "Is your support one-time or long-term?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our support is lifelong — we grow with you, ensuring continuous success, sustainability, and legacy.",
        },
      },
    ],
  };
  return (
    <>
     {/* ✅ Inject JSON-LD Schema using Next.js Script */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <Hero />
      <Support />
      <HotServicesSection />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
