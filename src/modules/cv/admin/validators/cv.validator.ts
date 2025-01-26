import * as yup from "yup";
import { AdminTechnologyValidation } from "../../../../validations/AdminTechnologyValidation";

const urlRegex = /^$|^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

export const AdminCvValidation = yup.object().shape({
  image: yup
    .object()
    .shape({
      url: yup.string().trim().required().min(1),
    })
    .required(),
  category: yup.string().required(),
  personal: yup.object().shape({
    name: yup.string().required(),
    summary: yup.string().required(),
    role: yup.string().required(),
  }),
  info: yup.object().shape({
    title: yup.string().required(),
    content: yup
      .array()
      .of(
        yup.object().shape({
          subtitle: yup.string().required(),
          text: yup
            .string()
            .transform((value) => value.replace(/<[^>]*>|[\^|]/g, ""))
            .max(62)
            .required(),
        })
      )
      .required(),
  }),
  skills: yup.object().shape({
    title: yup.string().required(),
    card: yup
      .array()
      .of(
        yup.object().shape({
          subtitle: yup.string().optional(),
          stack: yup.array().of(yup.string()),
        })
      )
      .required(),
  }),
  projects: yup.object().shape({
    title: yup.string().required(),
    project: yup
      .array()
      .of(
        yup.object().shape({
          projectName: yup.string().required(),
          role: yup.string().required(),
          date: yup.string().required(),
          summary: yup.string().required(),
          achievements: yup.array().of(yup.string().required()).required(),
          links: yup
            .array()
            .of(
              yup.object().shape({
                text: yup.string().optional(),
                url: yup
                  .string()
                  .trim()
                  .nullable()
                  .optional()
                  .matches(urlRegex, "Must be a valid URL"),
              })
            )
            .optional(),
          technology: yup
            .array()
            .of(AdminTechnologyValidation.required("List can not be empty"))
            .min(1, "List can not be empty"),
        })
      )
      .required(),
  }),
});
