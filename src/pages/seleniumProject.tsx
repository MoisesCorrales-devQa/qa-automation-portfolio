import Head from "next/head";

export default function ServicesPage() {
  return (
      <>
        <Head>
          <title>How I Can Help | Moisés Corrales</title>
        </Head>
        <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
          <div className="max-w-6xl w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
            {/* Header / Intro */}
            <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">
              What Can I Help You With?
            </h1>
            <p className="text-lg text-blue-100 font-semibold mb-8">
              I specialize in helping developers, teams, and companies improve the quality of their applications through automated testing.
            </p>

            {/* Test Automation */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-blue-200 mb-2">🧪 Test Automation</h2>
              <p className="text-gray-300 mb-2">
                Automated Testing for Web & Mobile Apps<br/>
                I can design and implement automated test suites for web and mobile applications to ensure functionality, stability, and scalability.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>End-to-End Testing (E2E)</li>
                <li>Regression Testing</li>
                <li>Smoke & Sanity Testing</li>
                <li>Cross-Browser and Cross-Device Testing</li>
              </ul>
              <p className="text-blue-300 text-sm mt-2">
                Tools I usually work with: Selenium, Appium, JUnit, Cucumber (BDD), Allure
              </p>
            </div>

            {/* Test Strategy & Consulting */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-blue-200 mb-2">🔍 Test Strategy & Consulting</h2>
              <p className="text-gray-300 mb-2">
                QA Strategy & Test Architecture
              </p>
              <p className="text-gray-300 mb-2">
                Need help structuring your testing process? I can assist with defining effective test strategies:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Test Plan & Coverage Definition</li>
                <li>Test Case Design & Optimization</li>
                <li>Test Architecture (Page Object Model, BDD, etc.)</li>
                <li>Test Documentation & Traceability</li>
              </ul>
            </div>

            {/* CI/CD & Automation Pipelines */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-blue-200 mb-2">🚀 Continuous Integration & Automation Pipelines</h2>
              <p className="text-gray-300 mb-2">
                Test Automation in CI/CD Pipelines
              </p>
              <p className="text-gray-300 mb-2">
                Integrating automated tests into your CI/CD pipeline ensures faster feedback and better software quality.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>CI/CD Pipeline Setup (GitHub Actions, GitLab CI, etc.)</li>
                <li>Automated Test Triggers on Every Deployment</li>
                <li>Allure Reports & Automated Documentation</li>
                <li>Basic Monitoring for Test Failures</li>
              </ul>
            </div>

            {/* Personal Projects & Mentoring */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-blue-200 mb-2">👨‍💻 Personal Projects & Mentoring</h2>
              <p className="text-gray-300 mb-2">
                Custom Testing Projects & Learning Support
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Small-Scale Testing Projects</li>
                <li>Learning Support on Selenium/Appium/CI Pipelines</li>
                <li>Reviewing or Improving Test Suites</li>
              </ul>
            </div>

            {/* Why Work With Me */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-blue-200 mb-2">✅ Why Work With Me?</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>I focus on simple, maintainable, and scalable testing solutions.</li>
                <li>I offer transparent, documented, and easy-to-understand workflows.</li>
                <li>I can adapt to your needs: from quick scripts to long-term test strategy.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mb-10 text-center">
              <h2 className="text-xl font-bold text-blue-200 mb-4">Want to improve your app s testing process?</h2>
              <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition font-bold text-lg shadow-lg"
              >
                📧 Contact Me
              </a>
            </div>

            {/* Example Projects (optional) */}
            <div>
              <h2 className="text-xl font-bold text-blue-200 mb-2">Example Projects</h2>
              <ul className="space-y-1">
                <li>
                  <a
                      href="/seleniumProject/"
                      className="text-blue-400 underline hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Selenium Web Automation — SauceDemo (Case Study)
                  </a>
                </li>
                <li>
                  <a
                      href="/appiumProject"
                      className="text-blue-400 underline hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Appium Mobile Testing (Case Study)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
  );
}