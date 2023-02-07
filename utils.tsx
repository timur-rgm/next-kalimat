export const isStringCyrillic = (text: string) =>
  /^[\u0400-\u04FF]+$/.test(text);
