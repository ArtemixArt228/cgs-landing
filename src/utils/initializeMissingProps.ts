type DefaultValues<T> = Partial<T>;

export const initializeMissingProps = <T extends object>(
  target: T,
  defaults: DefaultValues<T>
): T => {
  const result = { ...target };

  (Object.keys(defaults) as Array<keyof T>).forEach((key) => {
    if (!(key in result)) {
      result[key] = defaults[key]!;
    }
  });

  return result;
};
