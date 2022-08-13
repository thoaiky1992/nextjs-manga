import { ReactNode } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className="w-full pt-[100px]">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;

// https://www.anycodings.com/2021/12/static-generation-with-nextjs-pass-page.html
