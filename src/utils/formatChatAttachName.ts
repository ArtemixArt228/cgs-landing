export const formatChatAttachName = (name: string): string => {
  if (name.length >= 15) {
    const trimedName = name.slice(0, 9) + "..." + name.slice(name.length - 6);
    return trimedName;
  }

  return name;
};
