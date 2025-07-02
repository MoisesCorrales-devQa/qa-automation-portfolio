import Head from "next/head";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moisés Corrales - QA Automation Engineer</title>
        <meta
          name="description"
          content="Portfolio profesional de Moisés Corrales, QA Automation Engineer especializado en pruebas automatizadas para apps web y móviles."
        />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
