import { GetServerSideProps } from "next";
import { ISitemapData } from "../types/Admin/Response.types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const backUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (backUrl) {
    const response = await fetch(`${backUrl}\\api\\sitemap`);
    const data: ISitemapData = await response.json();
    const staticPages = data.includedPages.map((staticPagePath) => {
      return staticPagePath === "/" ? baseUrl : `${baseUrl}/${staticPagePath}`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  }

  return {
    props: {},
  };
};

export default Sitemap;
