import Hero from "../components/blog/Hero";
import { Header } from "../components/Header";
import Blog from "../components/blog/Blog";
import CTA from "../components/blog/CTA";
import Footer from "../components/Footer";
import "./page.css";
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
