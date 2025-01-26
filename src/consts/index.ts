import LinkedIn from "/public/BlogDecorations/Linkedin.svg";
import LinkedInNew from "/public/BlogDecorations/Linkedin-new.svg";
import Twitter from "/public/BlogDecorations/Twitter.svg";
import Facebook from "/public/BlogDecorations/Facebook.svg";
import Tiktok from "/public/BlogDecorations/Tiktok.svg";

import CopyLink from "/public/BlogDecorations/Link-03.svg";

import { IPortfolioReview } from "../types/Admin/AdminPortfolio.types";

export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong!",
}

export enum storeKeys {
  token = "TOKEN",
  profile = "PROFILE",
  chatUserData = "CHAT",
  chatHash = "CHAT_HASH",
  utmParams = "UTM_PARAMS",
  aiChatbotServiceAssistant = "AI_ASSISTANT_CHAT",
}

export enum chat {
  privateKey = "Private-Key",
}

export const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:;%._\+~#=]{2,256}\.?([a-z]{2,4})?\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/g;
export const urlWithTextPattern =
  /(\[([^\]]+)\])?\(?(https?:\/\/(www\.)?[-a-zA-Z0-9@:;%._\+~#=]{2,256}\.?([a-z]{2,4})?\b([-a-zA-Z0-9@:;%_\+.~#?&=\/]*))\)?/g;

// Regular expression pattern
export const imageExtensionPattern =
  /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|avif)(\?.*)?$/i;

export const fileNameRegex = /\/([^\/?#]+)\.([a-zA-Z0-9]+)(\?.*)?$/;

export const icons = [
  { src: LinkedIn.src },
  { src: Twitter.src },
  { src: Facebook.src },
  { src: CopyLink.src },
  { src: LinkedInNew.src },
  { src: Tiktok.src },
];

export const initAdmin = {
  username: "",
  password: "",
};

export const testimonialsInit = {
  slideTitle: "",
  stars: 1,
  slideBanner: {
    image: null,
  },
  name: "",
  company: "",
  videoUrl: "",
  link: "",
  text: "",
  linkedin: "",
  tiktok: "",
};

export const problemSolutionItemValues = {
  solutionImage: {
    image: {
      url: "",
    },
  },
  problemTitle: "",
  problemSubtitle: "",
  solutionDescription: "",
};

export const featureItemValues = {
  featureImage: {
    image: {
      url: "",
    },
  },
  title: "",
  description: "",
};

export const aiSolutionItemValues = {
  featureImage: {
    image: {
      url: "",
    },
  },
  title: "",
  description: "",
  featureTitle: "",
};

export enum Gender {
  Man = "man",
  Woman = "woman",
}

export const newPortfolioInitialValues: IPortfolioReview = {
  imageBanner: {
    image: {
      url: "",
    },
  },
  imageProjectBanner: {
    image: {
      url: "",
    },
  },
  general: {
    title: "",
    web_link: "",
    ios_link: "",
    android_link: "",
    NDA: false,
    aboutProject: "",
    country: "",
    industry: "",
    tags: [""],
  },
  projectOverview: {
    description: "",
    showCaseTitle: "",
    budget: "",
    releaseDate: 2024,
    timeframe: 0,
    teamSize: 0,
    platform: {
      ios: false,
      android: false,
      web: false,
    },
    technologies: [],
  },
  aiSolutionsToAchieveGoal: {
    includeBlock: false,
    solutions: [{ ...aiSolutionItemValues }, { ...aiSolutionItemValues }],
    title: "",
  },
  problemsAndSolutions: {
    description: "",
    problemAndSolution: [{ ...problemSolutionItemValues }],
  },
  discoverInAction: {
    actionImage: {
      image: {
        url: "",
      },
    },
    description: "",
  },
  conceptToCompletion: {
    description: "How we transformed ideas into impactful results.",
    item: [
      {
        subtitle: "Discovery phase",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/discovery.svg",
          },
        },
      },
      {
        subtitle: "Design",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/design.svg",
          },
        },
      },
      {
        subtitle: "Develop",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/development.svg",
          },
        },
      },
      {
        subtitle: "Testing",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/testing.svg",
          },
        },
      },
      {
        subtitle: "Deploy",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/deploy.svg",
          },
        },
      },
      {
        subtitle: "Support",
        text: "",
        icon: {
          image: {
            url: "/ConceptIcons/support.svg",
          },
        },
      },
    ],
  },
  featuresWeImplemented: {
    features: [{ ...featureItemValues }],
  },
  clientAboutUs: {
    clientImage: {
      image: {
        url: "",
      },
    },
    stars: 1,
    portfolioLink: "",
    name: "",
    company: "",
    gender: Gender.Man,
    linkedin: "",
    video: {
      image: {
        url: "",
      },
    },
    text: "",
  },
  impactCreated: {
    items: [
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
      {
        amount: "",
        description: "",
        aditionalText: "",
      },
    ],
  },
  categories: [],
  technologyNew: {
    name: "",
    image: {
      url: "",
    },
    main: false,
  },
  designOverview: {
    includeBlock: false,
    fontSection: {
      title: "Fonts we used",
      description: "",
      cards: [
        {
          image: null,
          imageText: "",
          title: "Primary Font",
          description: "",
        },
        {
          image: null,
          imageText: "",
          title: "Secondary Font",
          description: "",
        },
      ],
    },
    colorSection: {
      title: "Colors we used",
      description: "",
      cards: [
        {
          image: null,
          imageText: "",
          title: "Primary Color",
          description: "",
        },
        {
          image: null,
          imageText: "",
          title: "Secondary Color",
          description: "",
        },
      ],
    },
    accessibilitySection: {
      title: "Accessibility",
      description: "",
      cards: [
        {
          image: null,
          imageText: "",
          title: "First Decision",
          description: "",
        },
        {
          image: null,
          imageText: "",
          title: "Second Decision",
          description: "",
        },
      ],
    },
  },
};

export const newVacancy = {
  id: "",
  description: "",
  location: "",
  time: "",
  vacancy: "",
  position: "",
  image: { url: "" },
  stack: [],
  info: [
    {
      heading: "",
      values: [],
    },
  ],
  stars: 0,
};

export enum ROUTE_KEYS {
  AdminPage = "AdminPage",
  AdminCareers = "AdminCareers",
  AdminBlog = "AdminBlog",
  AdminPortfolio = "AdminPortfolio",
  AdminFaqPage = "AdminFaq",
  AdminPrivacy = "AdminPrivacy",
  AdminAboutUs = "AdminAboutUs",
  AdminContact = "AdminContact",
  AdminServiceMobile = "AdminServiceMobile",
  AdminServiceCloud = "AdminServiceCloud",
  AdminServiceSupport = "AdminServiceSupport",
  AdminServiceWeb = "AdminServiceWeb",
  AdminServiceDb = "AdminServiceDb",
  AdminServiceBlockchain = "AdminServiceBlockchain",
  AdminServiceUxUi = "AdminServiceUxUi",
  AdminCalculator = "AdminCalculator",
  AdminServiceMobileAudit = "AdminServiceMobileAudit",
  AdminServiceWebAudit = "AdminServiceWebAudit",
  AdminServiceDappAudit = "AdminServiceDappAudit",
  AdminServiceAiSolutions = "AdminServiceAiSolutions",
  AdminServiceAiChatbot = "AdminServiceAiChatbot",
  AdminAIAssistant = "AdminAIAssistant",
  AdminEstimationForm = "AdminEstimationForm",
  AdminRateCard = "AdminRateCard",
  AdminSupportChat = "AdminSupportChat",
  AdminCVs = "AdminCVs",
}

export const additionalEstimationFormQuestion = [
  "How do you want to process payments?",
  "What mobile features would you like to include?",
  "Your admin panel needs…",
];

export const conditionsToAppearanceQuestion = [
  {
    question:
      "Choose 3rd party integrations inside your application if you need them:",
    answer: "Payments",
  },
  {
    question: "What kind of app do you want to build?",
    answer: "Web (access via browser)",
  },
  {
    question: "Do you want to add an admin panel to the app?",
    answer: "Yes",
  },
];

export const BlogPageSize = 12;

export const CvsPageSize = 12;

export const PortfolioPageSize = 12;

export const Browsers_SearchEngines = [
  "chrome", // Google Chrome
  "firefox",
  "safari",
  "edge",
  "opera",
  "ie", // Internet Explorer
  "vivaldi",
  "brave",
  "yandex",
  "chromium",
  "ucbrowser",
  "seamonkey",
  "maxthon",
  "puffin",
  "epiphany",
  "konqueror",
  "google",
  "bing",
  "yahoo",
  "duckduckgo",
  "baidu",
  "ask",
  "aol",
];
