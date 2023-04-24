import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { generalPageDirectory } from "./constants";

export const getGeneralPageData = async (requestPageSlug: string) => {
  const filename = requestPageSlug;
  const fullPath = path.join(`./general-data`, `${filename}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    ...(matterResult.data as {
      slug: string;
    }),
    matter: matterResult.data as {
      slug: string;
      date: string;
      title: string;
    },
    content: matterResult.content,
    page: matterResult
      ? {
          mdxSource: await serialize(matterResult.content, {
            scope: matterResult.data,
          }),
        }
      : undefined,
  };
};

export function getAllGeneralPagePaths(locales: string[]) {
  let paths: { params: { id: string }; locale: string }[] = [];

  const postIds = fs.readdirSync(generalPageDirectory);

  for (let id of postIds) {
    for (let locale of locales) {
      let fullpath = path.join(generalPageDirectory, id, "index.md");
      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { id }, locale });
    }
  }

  return paths;
}

/**
 * Return the path of the content folder corresponding to the given `section` + `locale` that contains MDX files
 * containing translated page content.
 */
export const getGeneralFolderLocalePath = (locale: string = "en"): string => {
  return path.join(process.cwd(), `./general-data`);
};

export const getGeneralPageList = async (locale: string | undefined) => {
  const pageContentFolderPath = getGeneralFolderLocalePath();
  const pageFilenames = await fs.readdirSync(pageContentFolderPath);

  const pages = await Promise.all(
    pageFilenames.map(async (filename) => {
      const pagePath = path.join(pageContentFolderPath, filename);
      const pageData = await fs.readFileSync(pagePath, "utf-8");
      const { data } = matter(pageData);

      const slug = filename.replace(/\.[^\d]+\.mdx/, "");

      return {
        slug,
        matter: data,
      };
    })
  );

  return {
    pages: pages.sort((a: any, b: any) =>
      a.matter.title > b.matter.title ? 1 : -1
    ),
  };
};
