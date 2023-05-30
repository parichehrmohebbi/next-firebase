import type { AppProps } from "next/app";
import "../styles/globals.css";
import HeadConfig from "@core/siteConfig/headConfig";
import Layout from "@components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadConfig></HeadConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
