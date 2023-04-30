export const snakeCaseToTitleCase = (str: string): string => {
  return str.replace(/_/gm, " ").replace(/\w\S*/gm, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};
