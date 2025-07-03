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

          {/* Professional introduction */}
          <p className="text-lg text-blue-100 font-semibold mb-2">
            Computer Engineering student specializing in QA Automation, focused on automated testing for mobile and web applications using Appium and Selenium.
          </p>

          {/* Strengths / Approach */}
          <p className="text-base text-gray-300 mb-4">
            I am passionate about building solid, maintainable, and scalable test suites that cover real-world functional scenarios and support continuous integration. My attention to detail and commitment to best practices help establish a strong foundation of software quality from the very beginning.
          </p>

          {/* Main tech stack */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-200 mb-2">Core Technologies</h2>
            <ul className="list-disc pl-6 text-blue-100 space-y-1">
              <li>Appium (mobile automation)</li>
              <li>Selenium WebDriver (web automation)</li>
              <li>Java</li>
              <li>JUnit (4 & 5), Cucumber</li>
              <li>Allure Reports</li>
              <li>Git + GitHub</li>
              <li>CI with Maven / GitHub Actions</li>
            </ul>
          </div>

          {/* Motivation */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-200 mb-2">Vision & Motivation</h2>
            <p className="text-base text-gray-300">
              I strongly believe that automated testing is a key driver to accelerate development cycles without compromising product quality. From a business perspective, investing in software quality not only reduces costs associated with late-stage bugs but also increases customer trust and strengthens the company’s reputation. I enjoy helping teams reduce risk, optimize processes, and deliver with confidence through meaningful and effective test coverage.
            </p>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-xl font-bold text-blue-200 mb-2">Availability</h2>
            <p className="text-base text-gray-300">
              Currently open to freelance collaborations or remote opportunities focused on QA Automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
