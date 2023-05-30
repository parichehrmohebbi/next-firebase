import type { AppProps } from "next/app";
import "../styles/globals.css";
import HeadConfig from "@core/siteConfig/headConfig";
import Layout from "@components/layout/layout";
import { AuthContextProvider } from "@src/context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadConfig></HeadConfig>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
