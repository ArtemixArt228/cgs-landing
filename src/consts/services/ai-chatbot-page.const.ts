import { IAIChatbotPageData } from "../../types/services/ai-chatbot.types";

export const featureItem = {
  title: "",
  subtitle: "",
  image: null,
};

const features = new Array(3).fill(featureItem);

export const securityPrivacyItem = {
  image: null,
  title: "",
  subtitle: "",
  link: "",
  linkText: "",
};

const securityPrivacyCards = new Array(2).fill(securityPrivacyItem);

export const domainItem = {
  image: null,
  title: "",
  subtitle: "",
};

const domainCards = new Array(2).fill(domainItem);

export const benefitItem = {
  image: null,
  title: "",
  subtitle: "",
};

const benefitCards = new Array(3).fill(benefitItem);

export const implementationProcessItem = {
  title: "",
  subtitle: "",
  image: null,
};

const implementationProcessItems = [
  {
    title: "Discovery",
    subtitle: "",
    image: {
      url: "/ConceptIcons/discovery.svg",
    },
  },
  {
    title: "Design",
    subtitle: "",
    image: {
      url: "/ConceptIcons/design.svg",
    },
  },
  {
    title: "Development",
    subtitle: "",
    image: {
      url: "/ConceptIcons/development.svg",
    },
  },
  {
    title: "Testing",
    subtitle: "",
    image: {
      url: "/ConceptIcons/testing.svg",
    },
  },
  {
    title: "Deploy",
    subtitle: "",
    image: {
      url: "/ConceptIcons/deploy.svg",
    },
  },
  {
    title: "Support phase",
    subtitle: "",
    image: {
      url: "/ConceptIcons/support.svg",
    },
  },
];

export const AiChatbotServicePageDefaultValues: IAIChatbotPageData = {
  aichatbotHeroBlock: {
    title: "",
    text: "",
    chatFirstMessageText: "",
    chatAssistantName: "",
  },
  featuresBlock: {
    items: features,
    title: "",
  },
  benefitsBlock: {
    title: "",
    items: benefitCards,
  },
  pricingBlock: {
    text: "",
    title: "",
    buttonText: "",
    buttonLink: "",
    image: null,
  },
  faqBlock: {
    countOfQuestions: 4,
  },
  howToMakeStartupProfitable: {
    title: "",
    text: "",
    videoLink: "",
    button: "",
    buttonLink: "",
    image: null,
  },
  securityAndPrivacyBlock: {
    title: "",
    items: securityPrivacyCards,
  },
  domainsBlock: {
    title: "",
    items: domainCards,
  },
  implementationProcessBlock: {
    title: "",
    items: implementationProcessItems,
  },
  meta: {
    metaTitle: "",
    customHead: "",
    metaDescription: "",
  },
};
