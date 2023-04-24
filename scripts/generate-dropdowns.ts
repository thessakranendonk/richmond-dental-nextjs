import fs from "fs";
import path from "path";
var files = fs.readdirSync("./general-data");

const GENERAL_DROPDOWN_PATH = path.join(
  process.cwd(),
  "./data/dropdowns/general-dropdown.json"
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

let fileNames: { name: string; href: string }[] = [];
for (let i = 0; i < files.length; i++) {
  fileNames.push({
    name: snakeCaseToTitleCase(files[i]),
    href: `/general/${files[i].replace(/.mdx/gm, "")}`,
  });
}

if (fileNames)
  fs.writeFileSync(GENERAL_DROPDOWN_PATH, JSON.stringify(fileNames, null, 2));
