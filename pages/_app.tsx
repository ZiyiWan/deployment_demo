import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../services/msal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
