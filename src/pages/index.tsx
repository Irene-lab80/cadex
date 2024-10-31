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

        <meta property="og:title" content="Some cool title" />
        <meta property="og:description" content="Some cool description" />
        <meta property="og:image" content="/cool-image.jfif" />
        <meta
          property="og:url"
          content="https://euphonious-kashata-07bf48.netlify.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cool_twitter" />
        <meta name="twitter:title" content='Some cool title for twitter"' />
        <meta
          name="twitter:description"
          content='"Some cool twitter description"'
        />
        <meta name="twitter:image" content="/cool-image.jfif" />
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
