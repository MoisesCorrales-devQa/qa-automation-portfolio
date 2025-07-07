import Head from "next/head";
import TrackingTable from "@/components/ProjectPage/SeleniumTrackingTable";
import Image from "next/image";

export default function SeleniumProjectPage() {
  return (
      <>
        <Head>
          <title>Selenium Automation | Moisés Corrales</title>
        </Head>
        <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
          <div className="max-w-6xl w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">
              Selenium Web Automation — SauceDemo
            </h1>

            <p className="text-lg text-blue-100 font-semibold mb-4">
              Automation project for the SauceDemo web app, focused on covering the main functionalities of the platform.
            </p>

            {/* Scope */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Scope</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>User authentication</li>
                <li>Product inventory</li>
                <li>Shopping cart</li>
                <li>Checkout process</li>
                <li>Side menu and navigation</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Technologies & Tools</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Selenium WebDriver</li>
                <li>JUnit 5</li>
                <li>Java</li>
                <li>Allure Reports</li>
                <li>Page Object Model</li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Documentation & Test Tracking</h2>
              <p className="text-gray-300 mb-4">
                In addition to automated reports (JUnit + Allure), I maintain manual documentation of the test cases covered to ensure traceability and functional coverage.
              </p>
              <TrackingTable />
              <p className="text-blue-300 text-sm mt-2">
                Fragment from the manually maintained test case documentation.
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Challenges & Solutions</h2>
              <p className="text-gray-300 mb-4">
                The main challenge was defining the test structure and organizing the Page Object Model to ensure maintainability.
              </p>
              <p className="text-gray-300 mb-4">
                I analyzed the use cases and structured the Page Objects to maximize reuse and clarity.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Key Features</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Automatic screenshot capture on failures (Allure)</li>
                <li>Page Object Model for clean and reusable code</li>
                <li>Flexible configuration via external files</li>
                <li>Manual and automatic documentation for full traceability</li>
              </ul>
            </div>

            {/* Allure Report Example */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Allure Report Example</h2>
              <div className="rounded border border-blue-800 overflow-auto bg-black/40 mb-2">
                <Image
                    src="/assets/allure-example-selenium.png"
                    alt="Allure Report Summary"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                    priority
                />
              </div>
              <p className="text-blue-300 text-sm">
                Screenshot of an Allure report showing test execution results.
              </p>
            </div>

            {/* Result */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Result</h2>
              <p className="text-gray-300">
                Stable and maintainable test suite covering the most critical flows of the web application.
              </p>
            </div>

            {/* Lessons & Future Improvements */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Lessons & Future Improvements</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Deeper mastery of the Page Object Model</li>
                <li>Cross-browser testing and continuous integration in the future</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-xl font-bold text-blue-200 mb-2">Links</h2>
              <ul className="space-y-1">
                <li>
                  <a href="https://github.com/MoisesCorrales-devQa/saucedemo-qa-automation" className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://reports.moisescorrales.com/selenium/" className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                    Allure Report Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
  );
}