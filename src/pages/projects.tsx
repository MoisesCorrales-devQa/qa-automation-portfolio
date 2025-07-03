import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Moisés Corrales</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">Projects</h1>
        <p className="text-lg text-gray-300 text-center max-w-xl">
          Here you will find a selection of my automation testing projects.
          <br />
          🚧 This section is currently under construction. I’m actively working on it to showcase my best work in mobile and web automated testing using tools such as Appium, Selenium, and more.
        </p>
      </section>
    </>
  );
}
