// Combines classNames into a single string
export const cn = (...classNames: (string | undefined)[]): string =>
  classNames.filter(Boolean).join(' ');
