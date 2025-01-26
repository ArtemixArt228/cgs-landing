import { navigationRoutesLinks } from "../utils/variables";

export const PAGES_TO_ADD_PROMO_SECTION = [
  { path: navigationRoutesLinks.Home, rule: "full-match" },
  { path: navigationRoutesLinks.Contact, rule: "full-match" },
  { path: navigationRoutesLinks.Services, rule: "includes" },
  { path: navigationRoutesLinks["Case studies"], rule: "includes" },
];
