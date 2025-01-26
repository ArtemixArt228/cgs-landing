export const loadFont = (fontUrl: string) => {
  if (!document.querySelector(`link[href="${fontUrl}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontUrl;
    document.head.appendChild(link);
  }
};
