import "@/styles/globals.css";
import SidebarMenu from "@/components/SidebarMenu";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <SidebarMenu />
      <main className="md:pl-56 transition-all">
        <Component {...pageProps} />
      </main>
    </>
  );
}