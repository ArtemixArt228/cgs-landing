import security from "../../public/WebAuditServicePage/typesOfAudit/security.svg";
import seo from "../../public/WebAuditServicePage/typesOfAudit/seo.svg";
import review from "../../public/WebAuditServicePage/typesOfAudit/review.svg";
import uxui from "../../public/WebAuditServicePage/typesOfAudit/ux-ui.svg";
import pagespeed from "../../public/WebAuditServicePage/typesOfAudit/pagespeed.svg";
import competitor from "../../public/WebAuditServicePage/typesOfAudit/competitor.svg";
import checkbox from "../../public/Calculator/checkboxAdmin.svg";
import radio from "../../public/Calculator/radioAdmin.svg";

export const routers = {
  home: "/",
  careers: "/careers",
  blog: "/blog",
  portfolio: "/portfolio",
};

export const routersNew = ["/portfolio", "/services", "/company", "/blog"];

export const navigationRoutesNames = [
  "/portfolio",
  "/home",
  "/careers",
  "/blog",
];

/*
  You can pass here default links such as: https://youtube.com
  Or short links to navigate between pages such as: / - will move you to index page of the app
*/
export const navigationRoutesLinks = {
  "Crypto // Blockchain Development": "/services/blockchain",
  "Web // Desktop Development": "/services/web-development",
  "Mobile Development": "/services/mobile-app-development",
  "Cloud Solutions": "/services/cloud-solutions",
  "AI Solutions": "/services/ai",
  "AI Chatbot": "/services/ai-chatbot",
  "IT Support Services": "/services/it-support",
  "Server // Databases": "/services/database-and-server-solutions",
  "UX/UI Design": "/services/ux-ui-design",
  "Mobile App Audit": "/services/mobile-audit",
  "Web Audit": "/services/web-audit",
  "Dapp Audit // Tokenomic Planning": "/services/smart-contract-audit",
  "About us": "/about-us",
  Careers: "/careers",
  Contact: "/contact",
  FAQ: "/faq",
  "Case studies": "/portfolio",
  Blog: "/blog",
  Services: "/services",
  Home: "/",
};

export const navigationRoutesNamesNew = [
  { route: "Case studies", withDropdown: false },
  {
    route: "Our services",
    withDropdown: true,
    tags: [
      "Crypto // Blockchain Development",
      "Web // Desktop Development",
      "Mobile Development",
      "Cloud Solutions",
      "AI Solutions",
      "AI Chatbot",
      "IT Support Services",
      "Server // Databases",
      "UX/UI Design",
      "Web Audit",
      "Mobile App Audit",
      "Dapp Audit // Tokenomic Planning",
    ],
  },
  {
    route: "Company",
    withDropdown: true,
    tags: ["About us", "Careers", "Contact", "FAQ"],
  },
  { route: "Blog", withDropdown: false },
];

export const modalNavigationRoutesNames = [
  "web",
  "mobile",
  "server",
  "blockchain",
];

export const howWeWorkColor: ("blue" | "orange" | "green")[] = [
  "blue",
  "orange",
  "green",
  "blue",
];

export const adminBlogHeaders = ["h2", "h3", "h4", "h5", "h6"];

export const portfolioCategories = ["web", "mobile", "server", "blockchain"];

export const LETTERS_NUMBERS = "abcdefghijklmnopqrstuvwyxz1234567890";
export const SPECIAL_CHARACTERS = `!@#$%^&*()_+-={}[]`;
export const SYMBOLS = LETTERS_NUMBERS + SPECIAL_CHARACTERS;

export const DEFAULT_SCRAMBLE_SPEED = 30;
export const DEFAULT_REVEAL_SPEED = 100;
export const DEFAULT_REVEAL_DELAY = 1000;

export const mobileServicesRoutes = [
  "ai-chatbot",
  "blockchain",
  "web-development",
  "mobile-app-development",
  "cloud-solutions",
  "it-support",
  "database-and-server-solutions",
  "ux-ui-design",
  "web-audit",
  "mobile-audit",
  "smart-contract-audit",
];

export const webAuditTypesOfAuditImages = [
  security,
  seo,
  review,
  uxui,
  pagespeed,
  competitor,
];

export const defaultEditorOption = {
  font: ["NAMU"],
  linkRelDefault: {
    default: undefined,
    check_new_window: "nofollow noopener",
  },
  addTagsWhitelist: "label|input",
  buttonList: [["fontColor"], ["fontSize"]],
  showPathLabel: false,
  defaultTag: "div",
  defaultStyle: "position:relative; z-index:3",
};

export const emptyCalculatorOption = {
  _id: `${Math.random()}.${Math.random()}`,
  label: "",
  hours: undefined,
  role: undefined,
  endRoleCoef: undefined,
  endCoef: undefined,
  hourRate: undefined,
  isRate: undefined,
};

export const calculatorAdminOptions = [
  {
    value: "radio",
    image: radio,
  },
  {
    value: "checkbox",
    image: checkbox,
  },
];
