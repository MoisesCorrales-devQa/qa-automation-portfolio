import Head from "next/head";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me | Moisés Corrales</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <div className="max-w-2xl w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">About Me</h1>

          {/* Presentación profesional */}
          <p className="text-lg text-blue-100 font-semibold mb-2">
            Ingeniero informático en proceso de especialización en QA Automation, con enfoque en testing de aplicaciones móviles y web, utilizando Appium y Selenium.
          </p>

          {/* Diferencial/enfoque */}
          <p className="text-base text-gray-300 mb-4">
            Me caracterizo por construir suites de pruebas sólidas, legibles y escalables, orientadas a cubrir casos funcionales reales y facilitar la integración continua. Mi atención al detalle y compromiso con las buenas prácticas permiten que los proyectos tengan una base de calidad robusta desde el inicio.
          </p>

          {/* Stack principal */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-200 mb-2">Tecnologías principales</h2>
            <ul className="list-disc pl-6 text-blue-100 space-y-1">
              <li>Appium (mobile automation)</li>
              <li>Selenium WebDriver (web automation)</li>
              <li>Java</li>
              <li>JUnit (4 y 5), Cucumber</li>
              <li>Allure Reports</li>
              <li>Git + GitHub</li>
              <li>CI con Maven / GitHub Actions</li>
            </ul>
          </div>

          {/* Motivación/corporativo */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-200 mb-2">Visión y motivación</h2>
            <p className="text-base text-gray-300">
              Creo firmemente que el testing automatizado es un pilar estratégico para acelerar los ciclos de desarrollo sin sacrificar la calidad del producto. Desde una perspectiva corporativa, invertir en calidad de software no solo reduce costes por errores en fases tardías, sino que potencia la confianza del cliente y la reputación de la organización. Me apasiona ayudar a los equipos a reducir el riesgo, optimizar procesos y garantizar que cada entrega esté respaldada por una cobertura de pruebas sólida y relevante para el negocio.
            </p>
          </div>

          {/* Disponibilidad */}
          <div>
            <h2 className="text-xl font-bold text-blue-200 mb-2">Disponibilidad</h2>
            <p className="text-base text-gray-300">
              Actualmente estoy abierto a colaboraciones freelance o posiciones remotas centradas en QA Automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}