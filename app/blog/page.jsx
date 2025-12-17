import Hero from "../components/blog/Hero";
import { Header } from "../components/Header";
import Blog from "../components/blog/Blog";
import CTA from "../components/blog/CTA";
import Footer from "../components/Footer";
import "./page.css";

export const metadata = {
  title: "Business Insights & Startup Blogs | NextGen Consultancy",
  description:
    "Read expert blogs on startups, MSME growth, funding, compliance, and business strategy by NextGen Business Consultancy.",

  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Business Insights & Startup Blogs | NextGen Consultancy",
    description:
      "Startup guides, funding insights, and business growth strategies.",
    url: "https://www.nextgenbusiness.co.in/blog",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "article",
    images: ["/Next-Gen-Logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Startup & Business Blogs | NextGen Consultancy",
    description:
      "Expert-written blogs on startups, funding, and business compliance.",
    images: ["/Next-Gen-Logo.png"],
  },
};

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
