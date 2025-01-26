import React from "react";
import { toast } from "react-toastify";
import { ValidationError } from "yup";
type NestedError = string | { [key: string]: NestedError } | NestedError[];

// Utility to create a nested object
export const createNestedObject = (
  base: Record<string, string | Record<string, string>>,
  path: string[],
  value: string
): void => {
  path.reduce<Record<string, string | Record<string, string>>>(
    (acc, key, index) => {
      if (index === path.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = acc[key] || {};
      }
      return acc[key] as Record<string, string | Record<string, string>>;
    },
    base
  );
};

// Main function to parse validation errors
export function parseValidationErrors(
  errors: unknown,
  isSubmitting: React.MutableRefObject<boolean>
): Record<string, NestedError> {
  const result: Record<string, NestedError> = {};

  if (errors instanceof ValidationError) {
    errors.inner.forEach(({ path, message }) => {
      const pathParts = path?.split(".");
      if (!path || !pathParts || pathParts.length === 0) {
        result.general = message; // General error
        return;
      }

      let currentLevel = result;

      for (let i = 0; i < pathParts.length; i++) {
        const part = pathParts[i];
        const match = part.match(/^([^\[]+)\[([0-9]+)\]$/);

        if (match) {
          const [, key, index] = match;
          if (!currentLevel[key]) currentLevel[key] = [];
          const array = currentLevel[key] as NestedError[];
          if (!array[Number(index)]) array[Number(index)] = {};
          currentLevel = array[Number(index)] as Record<string, NestedError>;
        } else {
          if (!currentLevel[part]) {
            currentLevel[part] = i === pathParts.length - 1 ? message : {};
          }
          currentLevel = currentLevel[part] as Record<string, NestedError>;
        }
      }
    });

    if (isSubmitting.current) {
      toast.error(`Error occurred: \n ${errors}`);
      toast.error(
        <>
          Please fill all form fields <br />
          {errors.errors.slice(0, 5).map((item, ind) => (
            <div key={ind}>
              {ind + 1}. {item}
              <br />
            </div>
          ))}
        </>
      );
    }
  }

  isSubmitting.current = false;
  return result;
}
