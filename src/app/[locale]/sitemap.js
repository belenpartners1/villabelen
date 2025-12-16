// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://www.villabelen.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/beytepe-satilik-villa`, lastModified: new Date() },
    { url: `${baseUrl}/beytepe-villa-satilik`, lastModified: new Date() },
    { url: `${baseUrl}/satilik-beytepe-villa`, lastModified: new Date() },
    { url: `${baseUrl}/satilik-villa-beytepe`, lastModified: new Date() },
    { url: `${baseUrl}/villa-beytepe-satilik`, lastModified: new Date() },
    { url: `${baseUrl}/villa-satilik-beytepe`, lastModified: new Date() },
  ];
}
