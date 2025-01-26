const publickDomainList = ["gmail", "yahoo", "outlook", "icloud"];

export const isEmailDomainPublic = (email: string) => {
  return publickDomainList.some((e) => email?.toLowerCase().includes(`@${e}.`));
};
