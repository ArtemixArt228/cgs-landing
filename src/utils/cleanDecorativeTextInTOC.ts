export const cleanDecorativeHeadingTags = (htmlContent: string): string => {
  // Matches encoded <h1>, <h2>, ..., <h6>
  const openingTagRegex = /&lt;h[1-6]&gt;/g;

  // Remove encoded <hX> tags
  return htmlContent.replace(openingTagRegex, "");
};
