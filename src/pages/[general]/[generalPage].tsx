import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { getAllPagePaths, getPageData } from "../../lib/dynamic-page";
import { MDXRemote } from "next-mdx-remote";
import { mdxComponents } from "../../mdx/mdxComponents";

export interface GeneralListProps {
  pages: GeneralPageProps[];
}
export interface GeneralPageProps {
  slug: string;
  matter: GeneralFrontMatter;
  content: string;
  page: any;
}

export interface GeneralFrontMatter {
  date?: string;
  category: string;
  title: string;
  slug: string;
}

const GeneralPage: NextPage<GeneralPageProps> = (props) => {
  const { matter, page } = props;

  return (
    <>
      <article className="prose lg:prose-lg text-xl prose-slate max-w-3xl mx-auto pt-4 md:pt-6">
        <h1 className="text-xl md:text-xl2 pb-12 font-medium font-LEMONMILK text-teal-500">
          {matter.title}
        </h1>
        <MDXRemote {...page.mdxSource} components={mdxComponents as any} />
      </article>
    </>
  );
};

export default GeneralPage;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const requestPageSlug = (params?.generalPage ?? "") as string;
  const pageType = (params?.general ?? "") as string;
  const postData = await getPageData(pageType, requestPageSlug);

  return {
    props: {
      content: postData.content,
      matter: postData.matter,
      page: postData.page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales
    ? getAllPagePaths("general", locales)
    : getAllPagePaths("general", ["en"]);

  return {
    paths,
    fallback: "blocking",
  };
};
