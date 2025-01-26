import { ITestimonialsBlock } from "../Admin/AdminHomePage.types";
import { IPricingBlock, IServiceFeature } from "../Admin/AdminServices.types";
import { IMetaBlock } from "../Admin/Response.types";
import { IFaqBlock, IHowToMakeStartupSectionProps } from "../Services.types";

export interface IAIChatbotHeroBlock {
  title: string;
  text: string;
  chatFirstMessageText: string;
  chatAssistantName: string;
}

export type IImage = { url: string } | null;

export interface IBlockWithCardsItem {
  _id?: string;
  image: IImage;
  title: string;
  subtitle: string;
}
export interface IBlockWithCards {
  title: string;
  items: IBlockWithCardsItem[];
}

export interface ISecurityPrivacyCard extends IBlockWithCardsItem {
  link: string;
  linkText: string;
}

export interface ISecurityPrivacyBlock extends IBlockWithCards {
  items: ISecurityPrivacyCard[];
}

export interface IFeaturesBlock {
  title: string;
  items: IServiceFeature[];
}
export interface IAIChatbotPageData {
  aichatbotHeroBlock: IAIChatbotHeroBlock;
  benefitsBlock: IBlockWithCards;
  testimonialsBlock?: ITestimonialsBlock;
  featuresBlock: IFeaturesBlock;
  securityAndPrivacyBlock: ISecurityPrivacyBlock;
  domainsBlock: IBlockWithCards;
  howToMakeStartupProfitable: IHowToMakeStartupSectionProps;
  implementationProcessBlock: IBlockWithCards;
  pricingBlock: IPricingBlock;
  faqBlock: IFaqBlock;
  meta: IMetaBlock;
}

export interface IAiAssistantData {
  chatFirstMessageText: string;
  chatAssistantName: string;
  instructions: string;
  knowledgeBaseUrl: string;
  messageSuggestions: string[];
}
