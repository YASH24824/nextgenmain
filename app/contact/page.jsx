import Hero from "../components/contact/Hero";
import { Header } from "../components/Header";
import Form from "../components/contact/Form";
import Address from "../components/contact/Address";
import CTA from "../components/contact/CTA";
import Footer from "../components/Footer";
import "./page.css";

export const metadata = {
  title: "Reach Out to NextGen Consultancy | Business Growth Partner",
  description:
    "Contact NextGen Business Consultancy today – from compliance to growth strategies, we handle everything so you focus on your business",

  // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.)
  openGraph: {
    title: "Get in Touch | Expert Business Support at NextGen Consultancy",
    description:
      "Reach out to NextGen Business Consultancy for registration, compliance, funding, and growth support for your startup or MSME.",
       alternates: {
    canonical: "https://www.nextgenbusiness.co.in/contact",
  },
    url: "https://www.nextgenbusiness.co.in/contact",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-contact.jpg", // Contact page OG image
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - Contact Us",
      },
    ],
  },

  // Twitter (Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch | Expert Business Support at NextGen Consultancy",
    description:
      "Reach out to NextGen Business Consultancy for registration, compliance, funding, and growth support for your startup or MSME.",
    images: ["https://www.nextgenbusiness.co.in/og-image-contact.jpg"],
    creator: "@NextGenBiz", // optional
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Address />
      <CTA />
      <Footer />
    </>
  );
}
