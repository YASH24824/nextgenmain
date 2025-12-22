import { notFound } from "next/navigation";
import Script from "next/script";
import { getBlogBySlug } from "../data/blogData";
import Hero from "../../components/blogviewlog/Hero";
import { Header } from "../../components/Header";
import Blogview from "../../components/blogviewlog/Blogview";
import CTA from "../../components/blog/CTA";
import Footer from "../../components/Footer";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | NextGen Business Consultancy",
    };
  }

  const baseUrl = "https://www.nextgenbusiness.co.in";
  const blogUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = `${baseUrl}/Next-Gen-Logo.webp`;
  const publishedTime = blog.publishedDate
    ? `${blog.publishedDate}T00:00:00+05:30`
    : undefined;
  const modifiedTime = blog.modifiedDate
    ? `${blog.modifiedDate}T00:00:00+05:30`
    : publishedTime;

  return {
    title: `${blog.title} | NextGen Business Consultancy`,
    description: blog.description,
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: blogUrl,
    },
    authors: blog.author ? [{ name: blog.author.name, url: blog.author.url }] : undefined,
    publishedTime: publishedTime,
    modifiedTime: modifiedTime,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blogUrl,
      siteName: "NextGen Business Consultancy",
      locale: "en_IN",
      type: "article",
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: blog.author ? [blog.author.name] : undefined,
      section: blog.category,
      tags: blog.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${blog.title} – NextGen Business Consultancy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [imageUrl],
      creator: "@NextGenBiz",
    },
    other: {
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:author": blog.author ? blog.author.name : undefined,
      "article:section": blog.category,
      "article:tag": blog.tags?.join(", "),
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const baseUrl = "https://www.nextgenbusiness.co.in";
  const blogUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = `${baseUrl}/Next-Gen-Logo.webp`;
  const publishedTime = blog.publishedDate
    ? `${blog.publishedDate}T00:00:00+05:30`
    : new Date().toISOString();
  const modifiedTime = blog.modifiedDate
    ? `${blog.modifiedDate}T00:00:00+05:30`
    : publishedTime;

  // Article/BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#blogposting`,
    headline: blog.title,
    description: blog.description,
    image: imageUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      "@type": "Organization",
      name: blog.author?.name || "NextGen Business Consultancy",
      url: blog.author?.url || baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "NextGen Business Consultancy",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    articleSection: blog.category,
    keywords: blog.tags?.join(", "),
    inLanguage: "en-IN",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${blogUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: blogUrl,
      },
    ],
  };

  return (
    <>
      {/* Article/BlogPosting Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Hero />
      <Blogview blog={blog} />
      <CTA />
      <Footer />
    </>
  );
}

