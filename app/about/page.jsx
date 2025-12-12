import Hero from "../components/about/Hero";
import { Header } from "../components/Header";
import Services from "../components/about/Services";
import Timeline from "../components/about/Timeline";
import Values from "../components/about/Values";
import Process from "../components/about/Process";
import Impact from "../components/about/Impact";
import CTA from "../components/about/CTA";
import Footer from "../components/Footer";
import "./page.css";

export const metadata = {
  title: "NextGen Consultancy India | Trusted Startup Growth Partner",
  description:
    "Learn how NextGen Consultancy supports entrepreneurs with Startup India certification, MSME compliance, and strategic business growth.",
    alternates: {
    canonical: "https://www.nextgenbusiness.co.in/about",
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
        url: "https://www.nextgenbusiness.co.in/og-image-about.jpg", // About page OG image
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
    creator: "@NextGenBiz", // optional
  },
};

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Timeline />
      <Values />
      <Process />
      <Impact />
      <CTA />
      <Footer />
    </>
  );
}
