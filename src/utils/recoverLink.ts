export const recoverLink = (link: string) => {
  let resultLink = link;
  if (link.indexOf("https://") === -1 && link.indexOf("http://") === -1) {
    resultLink = `https://${resultLink}`;
  }
  return resultLink;
};
