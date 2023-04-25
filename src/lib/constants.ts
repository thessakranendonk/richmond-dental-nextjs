import path from "path";

export const pageDropdownDirectory = (page: string) => {
  const pageType =
    page === "general" ? PageSection.GENERAL : PageSection.COSMETIC;
  return path.join(process.cwd(), `./data/dropdowns`);
};

/**
 * Enum of Page sections/topics
 */
export enum PageSection {
  GENERAL = "general",
  COSMETIC = "cosmetic",
}
