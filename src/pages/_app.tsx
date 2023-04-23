import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
    </div>
  );
}
