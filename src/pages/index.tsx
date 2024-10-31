import { HeroSection, AboutUsSection, PromoSection } from "@/components";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cool Company",
  description: "Cool company description.",
  url: "https://euphonious-kashata-07bf48.netlify.app/",
  image: "/cool-image.jfif",
  isPartOf: {
    "@type": "WebSite",
    name: "Some Company",
    url: "https://euphonious-kashata-07bf48.netlify.app/",
    description: "A short description of cool company.",
  },
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="Some cool title for main page"
        description="Some cool description for main page."
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
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
