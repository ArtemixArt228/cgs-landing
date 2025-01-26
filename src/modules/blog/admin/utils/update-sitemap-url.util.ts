import { ISitemapData } from "../../../../types/Admin/Response.types";

// Utility function to update sitemap
export const updateSitemapUrl = (
  currentSitemap: ISitemapData,
  oldUrl: string,
  newUrl: string
): ISitemapData | null => {
  const sitemapToUpdate = { ...currentSitemap };
  const index = sitemapToUpdate.includedPages.indexOf(`blog/${oldUrl}`);

  if (index > -1) {
    sitemapToUpdate.includedPages.splice(index, 1, `blog/${newUrl}`);
    return sitemapToUpdate;
  }

  return null;
};
