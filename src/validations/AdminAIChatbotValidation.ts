import * as Yup from "yup";
import { htmlTextValidation } from "./common.validation";

export const AdminAIChatbotValidation = Yup.object().shape({
  aichatbotHeroBlock: Yup.object().shape({
    title: htmlTextValidation("Hero section", 1, "Title"),
    text: Yup.string().required("Block 1: Hero block text is required."),
  }),
  benefitsBlock: Yup.object().shape({
    title: htmlTextValidation("Benefits block", 2, "Title"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required("Block 2: Benefit title is required."),
          subtitle: Yup.string().required(
            "Block 2: Benefit subtitle is required."
          ),
          image: Yup.mixed()
            .nullable()
            .required("Block 2: Benefit image is required."),
        })
      )
      .min(1, "Block 2: At least 1 Benefit card is required."),
  }),
  featuresBlock: Yup.object().shape({
    items: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required("Block 4: Feature title is required."),
          subtitle: Yup.string().required(
            "Block 4: Feature subtitle is required."
          ),
          image: Yup.mixed()
            .nullable()
            .required("Block 4: Feature image is required."),
        })
      )
      .min(1, "Block 4: At least 1 Feature card is required."),
    title: htmlTextValidation("Features block", 4, "Title"),
  }),
  securityAndPrivacyBlock: Yup.object().shape({
    title: htmlTextValidation("Security and Privacy", 5, "Title"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required(
            "Block 5: Security and Privacy item title is required."
          ),
          subtitle: Yup.string().required(
            "Block 5: Security and Privacy item subtitle is required."
          ),
          link: Yup.string()
            .url("Block 5: Security and Privacy link must be a valid URL.")
            .required("Block 5: Security and Privacy link is required."),
          linkText: Yup.string().required(
            "Block 5: Security and Privacy link text is required."
          ),
          image: Yup.mixed()
            .nullable()
            .required("Block 5: Security and Privacy image is required."),
        })
      )
      .min(1, "Block 5: At least 1 Security and Privacy card is required."),
  }),
  domainsBlock: Yup.object().shape({
    title: htmlTextValidation("Domains", 6, "Title"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required("Block 6: Domain title is required."),
          subtitle: Yup.string().required(
            "Block 6: Domain subtitle is required."
          ),
          image: Yup.mixed()
            .nullable()
            .required("Block 6: Domain image is required."),
        })
      )
      .min(1, "Block 6: At least 1 Domain card is required."),
  }),
  howToMakeStartupProfitable: Yup.object().shape({
    title: Yup.string().required(
      "Block 7: Title for 'How To Make Startup Profitable' is required."
    ),
    text: Yup.string().required(
      "Block 7: Text for 'How To Make Startup Profitable' is required."
    ),
    videoLink: Yup.string()
      .trim()
      .url("Block 7: Video link must be a valid URL.")
      .matches(
        /(^$|https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+)/,
        "Block 7: Video link must be a valid YouTube link."
      )
      .required("Block 7: Video link is required."),
    button: Yup.string().required("Block 7: Button text is required."),
    image: Yup.mixed()
      .nullable()
      .required(
        "Block 7: Image for 'How To Make Startup Profitable' is required."
      ),
  }),
  implementationProcessBlock: Yup.object().shape({
    title: htmlTextValidation("Implementation process", 8, "Title"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required(
            "Block 8: Implementation process item title is required."
          ),
          subtitle: Yup.string().required(
            "Block 8: Implementation process item subtitle is required."
          ),
          image: Yup.mixed()
            .nullable()
            .required(
              "Block 8: Implementation process item image is required."
            ),
        })
      )
      .min(1, "Block 8: At least 1 Implementation process card is required."),
  }),
  pricingBlock: Yup.object().shape({
    text: htmlTextValidation("Pricing"),
    title: Yup.string().required("Block 9: Pricing title is required."),
    buttonText: Yup.string().required(
      "Block 9: Pricing button text is required."
    ),
    image: Yup.mixed()
      .nullable()
      .required("Block 9: Pricing image is required."),
  }),
  faqBlock: Yup.object().shape({
    countOfQuestions: Yup.number()
      .required("Block 10: FAQ count of questions is required.")
      .min(1, "Block 10: There must be at least one question in FAQ."),
  }),
  meta: Yup.object().shape({
    metaTitle: Yup.string().required("Meta title is required."),
    customHead: Yup.string().required("Custom head content is required."),
    metaDescription: Yup.string().required("Meta description is required."),
  }),
});

export const AdminAIAssistantValidation = Yup.object().shape({
  chatFirstMessageText: Yup.string().required(
    "Chat first message text is required."
  ),
  chatAssistantName: Yup.string().required("Chat assistant name is required."),
  instructions: Yup.string()
    .min(100, "Instructions should be at least ${min} characters long")
    .max(5000, "Instructions should be at most ${max} characters long")
    .required("Assistant Instructions are required."),
  knowledgeBaseUrl: Yup.string()
    .url(
      "Assistant KnowledgeBase Url must be a valid docs.google.com/document link"
    )
    .matches(
      /(^$|https:\/\/docs\.google\.com\/document\/[^\s]+\/edit[^\s]+)/,
      "Assistant KnowledgeBase Url must be a valid docs.google.com/document link"
    )
    .required("Assistant KnowledgeBase Url is required."),
});
