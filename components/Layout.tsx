import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Anurag chindaliya portfolio</title>
        <meta name="description" content="Software engineer from faridabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
