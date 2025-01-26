import { useFormikContext } from "formik";
import * as yup from "yup";

type Schema = yup.ObjectSchema<any, any>;

type InputEvent =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  | { target: { name: string } };

export const useFieldValidation = (schema: Schema) => {
  const { setFieldError, values } = useFormikContext();

  const handleBlur = (event?: InputEvent, fieldName?: string) => {
    const name = event?.target.name ?? (fieldName || "");

    schema
      .validate(values, { abortEarly: false })
      .catch((error: yup.ValidationError) => {
        if (error instanceof yup.ValidationError) {
          const fieldErrors = error.inner
            .filter((err) => err.path === name)
            .map((err) => err.message);
          setFieldError(name, fieldErrors[0]);
        }
      });
  };

  return handleBlur;
};
