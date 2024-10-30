import "@/styles/globals.css";
import theme from "@/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
