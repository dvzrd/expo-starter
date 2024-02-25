export const cn = (...classNames: (string | undefined)[]): string => {
  return classNames.filter(Boolean).join(' ');
};
