import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { LayoutGroup } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LayoutGroup>
        <Component {...pageProps} />
      </LayoutGroup>
    </Layout>
  );
}

export default MyApp;
