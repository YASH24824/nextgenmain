// app/sitemap.js
import { businessTypes } from "./service/data/businessData";
import { getAllBlogs } from "./blog/data/blogData";

export default function sitemap() {
  const baseUrl = "https://www.nextgenbusiness.co.in";
  const lastModified = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solution`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-condition`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages (dynamic routes)
  const servicePages = businessTypes.map((service) => ({
    url: `${baseUrl}/service/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog pages (dynamic routes)
  const blogPages = getAllBlogs().map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Festival/Event pages
  const festivalPages = [
    {
      url: `${baseUrl}/about/events/ganesh-chaturthi-celebrations`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/events/diwali-celebrations`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/events/events-activities`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [...staticPages, ...servicePages, ...blogPages, ...festivalPages];
}
