export const join = (styles: (string | null | undefined)[]): string =>
  styles.filter(Boolean).join(" ");
