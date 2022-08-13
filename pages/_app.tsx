import "../styles/globals.scss";
import "../styles/magic.min.css";
import "swiper/css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { LAYOUTS } from "@/constants";
import AppLayout from "@/components/layouts/app.layout";
import NextNProgress from "nextjs-progressbar";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  layout?: LAYOUTS;
};

type AppLayoutProps = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  switch (Component.layout) {
    case LAYOUTS.APP:
      return (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      );
    default:
      return (
        <>
          <NextNProgress color="#f43f5e" height={2} />
          <Component {...pageProps} />
        </>
      );
  }
}

export default MyApp;
