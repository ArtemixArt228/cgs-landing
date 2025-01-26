import * as yup from "yup";

export const AdminTechnologyValidation = yup.object().shape({
  name: yup.string().required(),
  image: yup
    .object()
    .shape({
      url: yup.string().trim().required().min(1),
    })
    .required(),
  main: yup.boolean().nullable().optional(),
});
