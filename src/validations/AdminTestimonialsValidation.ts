import * as yup from "yup";

export const AdminTestimonialsValidation = yup.object().shape({
  slideBanner: yup.object().shape({
    image: yup.object().shape({
      url: yup.string().url().required(),
    }),
  }),
  slideTitle: yup.string().max(64).required(),
  stars: yup.number().required(),
  name: yup.string().required(),
  company: yup.string().required(),
  videoUrl: yup.string().url().required(),
  linkedin: yup.string().url().optional(),
  link: yup.string().required(),
  text: yup.string().max(364).required(),
});
