import Hero from "../components/blogviewlog/Hero";
import { Header } from "../components/Header";
import Blogview from "../components/blogviewlog/Blogview";
import CTA from "../components/blog/CTA";
import Footer from "../components/Footer";
import "./page.css";

export const metadata = {
  title:
    "From Idea to Impact: How Startups Can Scale Smartly in India | NextGen Business Consultancy",

  description:
    "Discover how Indian startups can scale smartly with the right business strategy, legal compliance, funding support, and growth planning from NextGen Business Consultancy.",

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://www.nextgenbusiness.co.in"),

  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/blogview",
  },

  openGraph: {
    title: "From Idea to Impact: How Startups Can Scale Smartly in India",
    description:
      "A practical guide for Indian startups on scaling efficiently through compliance, funding, and smart growth strategies.",
    url: "https://www.nextgenbusiness.co.in/blogview",
    siteName: "NextGen Business Consultancy",
    type: "article",
    images: [
      {
        url: "/Next-Gen-Logo.png",
        width: 1200,
        height: 630,
        alt: "Startup growth strategies in India – NextGen Business Consultancy",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "From Idea to Impact: How Startups Can Scale Smartly in India",
    description:
      "Learn proven strategies to scale Indian startups with compliance, funding, and expert guidance.",
    images: ["/Next-Gen-Logo.png"],
  },
};

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <Blogview title="From Idea to Impact: How Startups Can Scale Smartly in India" />
      <CTA />
      <Footer />
    </>
  );
}
