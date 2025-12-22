import Hero from "./components/home/Hero";
import { Header } from "./components/Header";
import CounterSection from "./components/home/CounterSection";
import { HotServicesSection } from "./components/HotServicesSection";
import Footer from "./components/Footer";
import "./page.css";
import dynamic from "next/dynamic";
import Script from "next/script";

// Dynamic imports for below-fold components to improve initial load
const Test = dynamic(() => import("./components/home/Test"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CTA = dynamic(() => import("./components/home/CTA"), {
  loading: () => <div className="min-h-[200px]" />,
});
const GrowthSection = dynamic(() => import("./components/home/GrowthSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const GoogleReview = dynamic(() => import("./components/home/GoogleReview"), {
  loading: () => <div className="min-h-[300px]" />,
});

export const metadata = {
  title: "NextGen Business Consultancy | India's Startup Growth Hub",
  description:
    "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections. NextGen powers India's startup growth journey.",
  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "India's Trusted Partner for Startup Success | NextGen Consultancy",
    description:
      "Get expert guidance on registrations, tax holidays, compliance & investor linkage with NextGen Consultancy.",
    url: "https://www.nextgenbusiness.co.in/",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-home.webp",
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - Startup Growth Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "India's Trusted Partner for Startup Success | NextGen Consultancy",
    description:
      "Get expert guidance on registrations, tax holidays, compliance & investor linkage with NextGen Consultancy.",
    images: ["https://www.nextgenbusiness.co.in/og-image-home.jpg"],
    creator: "@NextGenBiz",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.nextgenbusiness.co.in/#faqpage",
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
          text: "We don't just advise; we co-create, building businesses like co-founders, not outside consultants.",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.nextgenbusiness.co.in/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nextgenbusiness.co.in/",
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

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <Hero />
      <CounterSection />
      <GrowthSection />
      <HotServicesSection />
      <Test />
      <GoogleReview />
      <CTA />
      <Footer />
    </>
  );
}
