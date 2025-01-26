import * as yup from "yup";
import { htmlTextValidation } from "../../../validations/common.validation";

export const getAdminBlogValidation = (
  existingUrls: { _id: string; url: string }[],
  validateEmailImage = false
) =>
  yup.object({
    _id: yup.string().optional(),
    author: yup.object().shape({
      name: yup.string().required("Author name can not be empty"),
      specialization: yup
        .string()
        .required("Author specialization сan not be empty"),
    }),
    image: yup
      .object()
      .shape({
        url: yup.string().trim().min(1, "Image can not be empty"),
      })
      .required("Image can not be empty"),
    emailImage: yup
      .object()
      .test("emailImageValidation", "Email image is required", (value) => {
        if (!validateEmailImage) return true;

        const image = value?.image as { url?: string } | null;

        if (!image || !image.url) return false;

        return true;
      }),

    url: yup
      .string()
      .required("URL can not be empty")
      .min(3, "URL must be at least ${min} characters long")
      .test("checkUniqueUrl", "URL is already taken", async function (value) {
        if (!value) return false;

        try {
          const isDuplicate = existingUrls.some(
            ({ url, _id }) => _id !== this.parent._id && url === value
          );
          return !isDuplicate;
        } catch (error) {
          const err = error as unknown as { message: string };
          if (err.message.includes("Article not found")) return true;
          return false;
        }
      }),
    date: yup.string().required("Date can not be empty"),
    minutesToRead: yup
      .number()
      .positive("Minutes to read must be a positive number")
      .required("Minutes can not be empty"),
    title: yup
      .string()
      .min(10, "Title can't be less than 10 symbols")
      .max(60, "Title can't be more than 60 symbols")
      .required("Title can not be empty"),
    description: yup
      .string()
      .transform((value) => value.replace(/<[^>]+>|&nbsp;/g, ""))
      .min(20, "Description can't be less than 20 symbols")
      .max(160, "Description can't be more than 160 symbols")
      .required("Description can not be empty"),
    content: htmlTextValidation("Blog Article", undefined, "Content"),
    tags: yup
      .array()
      .of(yup.string().required("Can not be empty"))
      .min(1, "Tags can not be empty"),
  });

export const BlogSubscribeValidation = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Required"),
});
