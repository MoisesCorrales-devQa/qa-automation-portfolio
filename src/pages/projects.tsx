import Head from "next/head";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Moisés Corrales</title>
      </Head>
      <ProjectsSection />
    </>
  );
}