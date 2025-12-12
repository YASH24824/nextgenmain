// components/SEO.jsx
import Head from "next/head";

export default function SEO({
  title,
  description,
  keywords = "",
  url = "https://mywebsite.com",
  image = "https://mywebsite.com/og-image.jpg",
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) {
  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta
        name="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
