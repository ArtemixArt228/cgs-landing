import { useEffect } from "react";
import { useFormikContext } from "formik";

const getFieldErrorNames = (formikErrors: any) => {
  const transformObjectToDotNotation = (
    obj: any,
    prefix = "",
    result: any[] = []
  ) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (!value) return;

      const nextKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "object") {
        transformObjectToDotNotation(value, nextKey, result);
      } else {
        result.push(nextKey);
      }
    });

    return result;
  };

  return transformObjectToDotNotation(formikErrors);
};

const FocusError = () => {
  const { isValid, errors, submitCount } = useFormikContext();

  useEffect(() => {
    if (isValid) return;

    const fieldErrorNames = getFieldErrorNames(errors);
    if (fieldErrorNames.length <= 0) return;
    const element = document.querySelector(
      `input[name='${fieldErrorNames[0]}']`
    );
    if (!element) return;

    // Scroll to first known error into view
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [submitCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default FocusError;
