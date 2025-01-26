import * as yup from "yup";
import { Gender } from "../consts";
import { AdminTechnologyValidation } from "./AdminTechnologyValidation";

const imageValidator = yup.object().shape({
  image: yup
    .object()
    .shape({
      url: yup
        .string()
        .trim()
        .required("Image can not be empty")
        .min(1, "Image can not be empty"),
    })
    .required("Image can not be empty"),
});

const clientImageValidator = yup.object().shape({
  image: yup
    .object()
    .shape({
      url: yup.string().trim().optional(),
    })
    .nullable(),
});

const getConditionalPartAiSolutionsToAchieveGoal = (includeBlock: boolean) => {
  if (includeBlock) {
    return yup.object().shape({
      title: yup.string().required("AI Solutions block title is required"),
      includeBlock: yup.boolean(),
      solutions: yup
        .array()
        .of(
          yup.object().shape({
            title: yup
              .string()
              .required("AI Solutions item title is required")
              .max(44, "Max length for solution title is ${max}"),
            featureTitle: yup
              .string()
              .required("AI Solutions item connected feature is required"),
            description: yup
              .string()
              .required("AI Solutions item description is required")
              .max(89, "Max length for solution description is ${max}"),
            featureImage: yup.object().shape({
              image: yup
                .object()
                .shape({
                  url: yup
                    .string()
                    .trim()
                    .required("AI Solutions item image is required")
                    .min(1),
                })
                .required("AI Solutions item image is required"),
            }),
          })
        )
        .min(
          2,
          "Block 2: At least 2 cards are required if the block is included"
        )
        .max(5, "Block 2: No more than 5 cards are allowed"),
    });
  } else {
    return yup.object().shape({
      title: yup.string(),
      includeBlock: yup.boolean().required(),
      solutions: yup.array().of(
        yup.object().shape({
          title: yup.string(),
          description: yup.string(),
          featureTitle: yup.string(),
          featureImage: yup.object().shape({
            image: yup.object().shape({
              url: yup.string().trim(),
            }),
          }),
        })
      ),
    });
  }
};
const getConditionalPartDesignOverview = (includeBlock: boolean) => {
  if (includeBlock) {
    return yup
      .object({
        includeBlock: yup.boolean().required(),
        fontSection: yup
          .object({
            title: yup
              .string()
              .required("Design Overview font section title is required"),
            description: yup
              .string()
              .required("Design Overview font section description is required"),
            cards: yup
              .array()
              .of(
                yup.object({
                  _id: yup.string().optional(),
                  title: yup
                    .string()
                    .required(
                      "Design Overview font section card title is required"
                    ),
                  description: yup
                    .string()
                    .required(
                      "Design Overview font section card description is required"
                    ),
                  imageText: yup
                    .string()
                    .required(
                      "Design Overview font section card image text is required"
                    ),
                  image: yup
                    .object({
                      url: yup.string(),
                    })
                    .nullable(),
                })
              )
              .required(),
          })
          .required(),
        colorSection: yup
          .object({
            title: yup
              .string()
              .required("Design Overview color section title is required"),
            description: yup
              .string()
              .required(
                "Design Overview color section description is required"
              ),
            cards: yup
              .array()
              .of(
                yup.object({
                  _id: yup.string().optional(),
                  title: yup
                    .string()
                    .required(
                      "Design Overview color section card title is required"
                    ),
                  description: yup
                    .string()
                    .required(
                      "Design Overview color section card description is required"
                    ),
                  imageText: yup
                    .string()
                    .matches(
                      /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/,
                      "Invalid HEX color format"
                    )
                    .required(
                      "Design Overview color section card image color is required"
                    ),
                  image: yup
                    .object({
                      url: yup.string(),
                    })
                    .nullable(),
                })
              )
              .required(),
          })
          .required(),
        accessibilitySection: yup
          .object({
            title: yup
              .string()
              .required(
                "Design Overview accessibility section title is required"
              ),
            description: yup
              .string()
              .required(
                "Design Overview accessibility section description is required"
              ),
            cards: yup
              .array()
              .of(
                yup.object({
                  _id: yup.string().optional(),
                  title: yup
                    .string()
                    .required(
                      "Design Overview accessibility section card title is required"
                    ),
                  description: yup
                    .string()
                    .required(
                      "Design Overview accessibility section card description is required"
                    ),
                  imageText: yup.string(),
                  image: yup
                    .object({
                      url: yup
                        .string()
                        .required(
                          "Design Overview accessibility section card image is required"
                        ),
                    })
                    .required(
                      "Design Overview accessibility section card image is required"
                    ),
                })
              )
              .required(),
          })
          .required(),
      })
      .required();
  } else {
    return yup.object().shape({
      includeBlock: yup.boolean().required(),
    });
  }
};
export const AdminPortfolioValidation = (
  aiSolutionsIncludeBlock: boolean,
  designOverviewIncludeBlock: boolean
) => {
  return yup.object().shape({
    imageBanner: imageValidator,
    imageProjectBanner: imageValidator,
    categories: yup
      .array()
      .of(yup.string().required("Please select at least one category"))
      .min(1, "You must select at least one category"),
    general: yup
      .object()
      .shape({
        aboutProject: yup
          .string()
          .min(
            10,
            "The project description must be at least 10 characters long"
          )
          .max(1200, "The project description cannot exceed 1200 characters")
          .required("Please enter a description for the project"),
        industry: yup.string().required("Please select an industry"),
        title: yup
          .string()
          .min(3, "The project title must be at least 3 characters long")
          .max(50, "The project title cannot exceed 50 characters")
          .required("Please enter a project title"),
        country: yup.string().required("Please select a country"),
        _id: yup.string().optional(),
        NDA: yup.boolean().optional(),
        tags: yup
          .array()
          .of(
            yup
              .string()
              .trim()
              .min(1, "blog-tags cannot be empty")
              .required("Each tag is required")
          )
          .min(1, "You must provide at least one tag")
          .required("blog-tags are required"),
        web_link: yup.string().url("Please enter a valid URL for the web link"),
        ios_link: yup.string().url("Please enter a valid URL for the iOS link"),
        android_link: yup
          .string()
          .url("Please enter a valid URL for the Android link"),
      })
      .test(
        "at-least-one",
        "You must provide at least one of the following: Web, iOS, or Android link",
        (value) => {
          if (!value.NDA) {
            return !!value.ios_link || !!value.android_link || !!value.web_link;
          }
          return true;
        }
      ),
    aiSolutionsToAchieveGoal: getConditionalPartAiSolutionsToAchieveGoal(
      aiSolutionsIncludeBlock
    ),
    projectOverview: yup
      .object()
      .shape({
        showCaseTitle: yup
          .string()
          .min(3, "Showcase title must be at least 3 characters long")
          .max(200, "Showcase title cannot exceed 200 characters")
          .required("Please enter a showcase title"),
        description: yup
          .string()
          .min(10, "The description must be at least 10 characters long")
          .max(1200, "The description cannot exceed 1200 characters")
          .required("Please provide a description"),
        budget: yup
          .string()
          .min(2, "The budget must be at least 2 characters long")
          .max(10, "The budget cannot exceed 10 characters")
          .required("Please specify the budget"),
        releaseDate: yup
          .number()
          .typeError("Release date must be a number")
          .integer("Release date must be a whole number")
          .min(1900, "Release date must be from 1900 onwards")
          .max(
            new Date().getFullYear(),
            `Release date cannot exceed ${new Date().getFullYear()}`
          )
          .required("Please enter the release date"),
        timeframe: yup
          .number()
          .integer("Timeframe must be an integer")
          .positive("Timeframe must be a positive number")
          .required("Please specify the timeframe"),
        teamSize: yup
          .number()
          .integer("Team size must be an integer")
          .positive("Team size must be a positive number")
          .required("Please enter the team size"),
        platform: yup.object().shape({
          ios: yup.boolean().optional(),
          android: yup.boolean().optional(),
          web: yup.boolean().optional(),
        }),
        technologies: yup
          .array()
          .of(
            AdminTechnologyValidation.required(
              "Technology list can not be empty"
            )
          )
          .min(1, "List can not be empty")
          .test(
            "at-least-one",
            "At least one technology should be main",
            (value) => {
              return value!.some((item) => item.main);
            }
          ),
      })
      .test(
        "at-least-one-platform",
        "You must check at least one platform: iOS, Android, or Web",
        (value) =>
          !!value.platform.ios ||
          !!value.platform.android ||
          !!value.platform.web
      ),
    problemsAndSolutions: yup.object().shape({
      description: yup
        .string()
        .min(10, "The description must be at least 10 characters long")
        .max(1200, "The description cannot exceed 1200 characters")
        .required("Please provide a description"),
      problemAndSolution: yup
        .array()
        .of(
          yup
            .object({
              solutionImage: imageValidator,
              problemTitle: yup
                .string()
                .max(200, "Problem title cannot exceed 200 characters")
                .required("Please provide a problem title"),
              problemSubtitle: yup
                .string()
                .max(100, "Problem subtitle cannot exceed 100 characters")
                .optional(),
              solutionDescription: yup
                .string()
                .max(1200, "Solution description cannot exceed 1200 characters")
                .required("Please provide a solution description"),
            })
            .required("Problem and solution details are required")
        )
        .min(1, "You must provide at least one problem and solution"),
    }),
    designOverview: getConditionalPartDesignOverview(
      designOverviewIncludeBlock
    ),
    discoverInAction: yup
      .object()
      .shape({
        actionImage: yup.object().shape({
          image: yup
            .object()
            .shape({
              url: yup
                .string()
                .trim()
                .matches(
                  /(^$|https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+)/,
                  "Discover in action URL must be a valid YouTube link"
                )
                .optional(),
            })
            .required("Image URL is required"),
        }),
        description: yup.string().optional(),
      })
      .test(
        "discover-validation",
        "Both 'Action Image' and 'Description' must be filled or both left blank",
        (value) => {
          return (
            (!!value.actionImage.image.url && !!value.description) ||
            (!value.actionImage.image.url && !value.description)
          );
        }
      ),
    conceptToCompletion: yup.object().shape({
      description: yup.string().required("Please provide a description"),
      item: yup
        .array()
        .of(
          yup.object({
            icon: imageValidator,
            subtitle: yup.string().required("Please provide a subtitle"),
            text: yup.string().required("Please provide text"),
          })
        )
        .optional(),
    }),
    featuresWeImplemented: yup.object().shape({
      features: yup
        .array()
        .of(
          yup.object({
            featureImage: imageValidator,
            title: yup.string().required("Please provide a feature title"),
            description: yup
              .string()
              .required("Please provide a feature description"),
          })
        )
        .optional(),
    }),
    clientAboutUs: yup.object().shape({
      clientImage: clientImageValidator,
      name: yup.string().required("Please enter the client's name"),
      company: yup.string().optional(),
      stars: yup
        .number()
        .integer("Rating must be an integer")
        .required("Please provide a rating"),
      gender: yup
        .string()
        .oneOf(
          [Gender.Man, Gender.Woman],
          'Gender must be either "man" or "woman"'
        )
        .required("Please specify the client's gender"),
      portfolioLink: yup.string().optional(),
      video: clientImageValidator,
      linkedin: yup
        .string()
        .url("Please enter a valid LinkedIn URL")
        .optional(),
      text: yup.string().required("Please provide feedback text"),
    }),
    impactCreated: yup.object().shape({
      items: yup
        .array()
        .of(
          yup.object({
            amount: yup.string().required("Please provide an amount"),
            description: yup
              .string()
              .max(35, "Description cannot exceed 35 characters")
              .required("Please provide a description"),
            aditionalText: yup
              .string()
              .max(150, "Additional text cannot exceed 150 characters")
              .required("Please provide additional text"),
          })
        )
        .required("Please provide at least one impact item"),
    }),
  });
};
