export const toKebabCase = (string: string): string => {
  return string
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .trim();
};

export const truncateOnWord = (text: string, maxLength: number, ellipsis = true) => {
  if (text.length <= maxLength) return text;
  let truncatedText = text.substring(0, maxLength);
  truncatedText = truncatedText.substring(
    0,
    Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))
  );
  if (ellipsis) truncatedText += "...";
  return truncatedText;
};
