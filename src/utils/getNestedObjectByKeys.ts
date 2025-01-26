// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNested = (obj: any, ...args: string[]) => {
  return args.reduce((obj, level) => obj && obj[level], obj);
};
