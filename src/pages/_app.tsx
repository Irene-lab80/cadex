import "@/styles/globals.css";
import theme from "@/theme";
import { ConfigProvider } from "antd";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ConfigProvider theme={theme}>
      <DefaultSeo
        title="Default cool title"
        description="Default cool description."
        canonical="https://euphonious-kashata-07bf48.netlify.app"
        openGraph={{
          url: "https://euphonious-kashata-07bf48.netlify.app",
          title: "Cool Open Graph Title",
          description: "Cool Open Graph Description",
          images: [
            {
              url: "/cool-image.jfif",
              width: 800,
              height: 600,
              alt: "Cool Og Image Alt",
            },
          ],
          site_name: "Some cool site name",
        }}
        twitter={{
          handle: "@cool_twitter",
          site: "@cool_site",
          cardType: "summary_large_image",
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  );
};

export default App;
