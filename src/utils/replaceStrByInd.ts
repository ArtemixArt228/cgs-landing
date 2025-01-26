export const replaceAt = (str: string, index: number, charcount: number) =>
  str.substring(0, index) + str.substring(index + charcount);
