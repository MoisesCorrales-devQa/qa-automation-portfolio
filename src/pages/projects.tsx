import Head from "next/head";

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>Proyectos | Moisés Corrales</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">Proyectos</h1>
        <p className="text-lg text-gray-300">Aquí irán destacados tus trabajos y proyectos.</p>
      </section>
    </>
  );
}