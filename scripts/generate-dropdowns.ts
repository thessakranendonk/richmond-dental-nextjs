import { PageSection } from "../src/lib/constants";
import fs from "fs";
import path from "path";

const GENERAL_DROPDOWN_PATH = path.join(
  process.cwd(),
  "./data/dropdowns/general-dropdown.json"
);

const COSMETIC_DROPDOWN_PATH = path.join(
  process.cwd(),
  "./data/dropdowns/cosmetic-dropdown.json"
);

// remove the .mdx file type and replace dashes with spaces
// TitleCase words
const snakeCaseToTitleCase = (str: string): string => {
  return str
    .replace(/.mdx/gm, "")
    .replace(/-/gm, " ")
    .replace(/\w\S*/gm, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
};

const writeDropdownArrToFile = (page: string): void => {
  const files =
    page === PageSection.GENERAL
      ? fs.readdirSync("./data/general-data")
      : fs.readdirSync("./data/cosmetic-data");

  const pagePath =
    page === PageSection.GENERAL
      ? GENERAL_DROPDOWN_PATH
      : COSMETIC_DROPDOWN_PATH;

  let fileNames: { name: string; href: string }[] = [];
  for (let i = 0; i < files.length; i++) {
    fileNames.push({
      name: snakeCaseToTitleCase(files[i]),
      href: `/${page}/${files[i].replace(/.mdx/gm, "")}`,
    });
  }

  if (fileNames) fs.writeFileSync(pagePath, JSON.stringify(fileNames, null, 2));
};

export const main = (): void => {
  const dynamicPages = ["general", "cosmetic"];

  dynamicPages.map((page) => {
    console.debug(`generating dropdowns for ${page}`);

    return writeDropdownArrToFile(page);
  });
};

main();
