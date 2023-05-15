import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <ProjectLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </ProjectLayout>
    </div>
  );
}
