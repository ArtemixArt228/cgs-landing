import * as yup from "yup";

export const CalculatorValidation = () => {
  return yup.object({
    email: yup.string().email().required("Enter e-mail"),
    name: yup.string().required("Enter name"),
    questionsArr: yup.array(
      yup.object({
        title: yup.string(),
        tieUpDisabled: yup.boolean(),
        answer: yup.lazy((value) =>
          typeof value === "string"
            ? yup.string().when("tieUpDisabled", {
                is: true,
                then: yup.string(),
                otherwise: yup
                  .string()
                  .required("Required field")
                  .min(1, "please fill empty fields"),
              })
            : yup
                .array()
                .of(yup.string())
                .when("tieUpDisabled", {
                  is: true,
                  then: yup.array().of(yup.string()),
                  otherwise: yup
                    .array()
                    .of(yup.string())
                    .min(1)
                    .required("Required field"),
                })
        ),
      })
    ),
  });
};
