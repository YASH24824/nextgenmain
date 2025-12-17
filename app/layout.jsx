import "./globals.css";
import FloatingButton from "./components/FloatingButton";
import Script from "next/script";

export const metadata = {
  title: "NEXT-GEN BUSINESS CONSULTANCY",
  description:
    "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections.",

  metadataBase: new URL("https://www.nextgenbusiness.co.in"),

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.nextgenbusiness.co.in/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "NEXT-GEN BUSINESS CONSULTANCY",
    description:
      "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections.",
    url: "https://www.nextgenbusiness.co.in",
    images: ["/Next-Gen-Logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "NEXT-GEN BUSINESS CONSULTANCY",
    description:
      "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections.",
    images: ["/Next-Gen-Logo.png"],
  },
};

export default function RootLayout({ children }) {
  // const organizationSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "NEXT-GEN BUSINESS CONSULTANCY",
  //   url: "https://nextgenbusiness.co.in/",
  //   logo: "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
  //   alternateName: "NEXT-GEN BUSINESS CONSULTNACY PRIVATE LIMITED",
  //   sameAs: [
  //     "https://www.facebook.com/people/Next-Gen-Business-Consultancy-Private-Limited/61574060610065/",
  //     "https://in.linkedin.com/company/nextgen-business-consultancy",
  //     "https://www.instagram.com/next_gen_business_consultancy/",
  //   ],
  //   contactPoint: [
  //     {
  //       "@type": "ContactPoint",
  //       telephone: "+91 9033149731",
  //       contactType: "customer service",
  //       email: "info@nextgenbusiness.co.in",
  //       areaServed: "IN",
  //       availableLanguage: ["en", "hi", "gu"],
  //     },
  //   ],
  // };

  // const professionalServiceSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "ProfessionalService",
  //   name: "NEXTGEN BUSINESS CONSULTANCY PRIVATE LIMITED",
  //   image: "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
  //   "@id": "https://www.nextgenbusiness.co.in/about",
  //   url: "https://nextgenbusiness.co.in/",
  //   telephone: "+919898298149",
  //   address: {
  //     "@type": "PostalAddress",
  //     streetAddress: "Drive in Road",
  //     addressLocality: "Ahmedabad",
  //     postalCode: "380051",
  //     addressCountry: "IN",
  //   },
  //   geo: {
  //     "@type": "GeoCoordinates",
  //     latitude: 23.047053163750352,
  //     longitude: 72.52960824232856,
  //   },
  //   sameAs: [
  //     "https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/",
  //     "https://www.instagram.com/next_gen_business_consultancy/",
  //     "https://www.youtube.com/@Next-Gen-business-consultancy",
  //     "https://in.linkedin.com/company/nextgen-business-consultancy",
  //   ],
  // };

  // In layout.jsx, update the organizationSchema to:
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nextgenbusiness.co.in/#organization",
    name: "NEXT-GEN BUSINESS CONSULTANCY",
    url: "https://www.nextgenbusiness.co.in/",
    logo: "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
    alternateName: "NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED",
    description:
      "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections.",
    sameAs: [
      "https://www.facebook.com/people/Next-Gen-Business-Consultancy-Private-Limited/61574060610065/",
      "https://in.linkedin.com/company/nextgen-business-consultancy",
      "https://www.instagram.com/next_gen_business_consultancy/",
      "https://www.youtube.com/@NextGen-business-consultancy",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919033149731",
        contactType: "customer service",
        email: "support@nextgenbusiness.co.in",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Drive in Road",
      addressLocality: "Ahmedabad",
      postalCode: "380051",
      addressCountry: "IN",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.nextgenbusiness.co.in/#professionalservice",
    name: "NEXT-GEN BUSINESS CONSULTANCY PRIVATE LIMITED",
    image: "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
    url: "https://www.nextgenbusiness.co.in/",
    description:
      "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections.",
    telephone: "+919898298149",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Drive in Road",
      addressLocality: "Ahmedabad",
      postalCode: "380051",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.047053163750352,
      longitude: 72.52960824232856,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/",
      "https://www.instagram.com/next_gen_business_consultancy/",
      "https://www.youtube.com/@NextGen-business-consultancy",
      "https://in.linkedin.com/company/nextgen-business-consultancy",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Consultancy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Startup India Registration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MSME Registration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Exemption Services",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://resend-mail-worker.vatsal-9e7.workers.dev"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZPW2HYC5BE"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZPW2HYC5BE', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t8xl6gfz2s");
            `,
          }}
        />
      </head>
      <body>
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
