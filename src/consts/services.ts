import {
  IServiceAi,
  IServiceBlockItem,
  IServiceFeature,
  ISuccessCase,
  ITechnologyBlockItem,
  IUpcomingProduct,
  IPricingBlock,
} from "../types/Admin/AdminServices.types";

export const AIServiceFeatureInit: IServiceFeature = {
  title: "",
  subtitle: "",
  imageWeb: {
    image: null,
  },
  imageTablet: {
    image: null,
  },
  imageMobile: {
    image: null,
  },
  descriptionModal: "",
  imageModal: {
    image: null,
  },
};
export const AIServiceFeatures: IServiceFeature[] = new Array(6).fill(
  AIServiceFeatureInit
);

export const AIServiceItemInit: IServiceBlockItem = {
  subtitle: "",
  text: "",
  icon: { image: { url: "" } },
};

export const AIServiceItemsArray: IServiceBlockItem[] = new Array(6).fill(
  AIServiceItemInit
);

export const AIServiceTechItemInit: ITechnologyBlockItem = {
  title: "",
  image: null,
};

export const AIServiceTechItemsArray: ITechnologyBlockItem[] = new Array(
  9
).fill(AIServiceTechItemInit);

export const AIServiceSuccessCaseInit: ISuccessCase = {
  amount: "",
  amountDescription: "",
  additionalText: "",
  link: "",
  logo: {
    image: null,
  },
  image: null,
};

export const AIServiceSuccessCasesArray: ISuccessCase[] = new Array(4).fill(
  AIServiceSuccessCaseInit
);

export const PricingBlock: IPricingBlock = {
  title: "",
  text: "",
  buttonText: "",
  buttonLink: "",
  image: null,
};

export const AIServiceUpcomingProductItemInit: IUpcomingProduct = {
  title: "",
  text: "",
  image: null,
  videoLink: "",
};

export const AiServicePageDefaultValues: IServiceAi = {
  headerBlock: {
    title: "",
    button: "",
    buttonLink: "",
    image: null,
    text: "",
  },
  featuresBlock: {
    features: AIServiceFeatures,
  },
  servicesBlock: {
    title: "",
    services: AIServiceItemsArray,
  },
  technologiesBlock: {
    title: "",
    text: "",
    image: null,
    technologies: AIServiceTechItemsArray,
  },
  successCasesBlock: {
    title: "",
    successCases: AIServiceSuccessCasesArray,
    footer: {
      amount: "",
      amountDescription: "",
      additionalText: "",
    },
  },
  pricingBlock: PricingBlock,

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
  upcomingProducts: {
    title: "",
    products: [],
  },
};
