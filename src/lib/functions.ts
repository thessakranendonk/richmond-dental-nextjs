export const snakeCaseToTitleCase = (str: string): string => {
  return str.replace(/_/gm, " ").replace(/\w\S*/gm, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export const alterTextForForm = (text: string) => {
  const removedCharacters = text
    .replace(/{/, "")
    .replace(/}/gm, "")
    .replace(/"|'/gm, "")
    .replace(/:/gm, ": ")
    .replace(/patientSig:(.*)[^}]/gm, "")
    .replace(/File:.*/gm, "");
  return (
    removedCharacters
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/,(?=[^\[]*\])/gm, " + ")
      .replace(/\[|\]/gm, "")
      // transform props to readable text example: firstName -> First Name

      .split(",")
      .map((i) => snakeCaseToTitleCase(i))
  );
};
