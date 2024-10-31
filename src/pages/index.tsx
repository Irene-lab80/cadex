import { HeroSection, AboutUsSection, PromoSection } from "@/components";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Some company</title>
        <meta name="description" content="Some meaningful description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutUsSection />
      <PromoSection />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
