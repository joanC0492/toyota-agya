import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { UIProvider } from "@/context/UIContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}
