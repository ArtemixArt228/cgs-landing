const replaceJSX = (text: string, find: string, replace: JSX.Element) => {
  const splitted = text.split(find);
  return splitted.flatMap((item, idx) =>
    idx !== splitted.length - 1 ? [item, replace] : [item]
  );
};

export default replaceJSX;
