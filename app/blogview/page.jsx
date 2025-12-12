import Hero from "../components/blogviewlog/Hero";
import { Header } from "../components/Header";
import Blogview from "../components/blogviewlog/Blogview";
import CTA from "../components/blog/CTA";
import Footer from "../components/Footer";
import "./page.css";

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