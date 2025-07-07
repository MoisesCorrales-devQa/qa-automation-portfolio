import AppiumTrackingTable from "@/components/ProjectPage/AppiumTrackingTable";
import Head from "next/head";
import Image from "next/image";

export default function AppiumProjectPage() {
    return (
        <>
            <Head>
                <title>Mobile Automation | Moisés Corrales</title>
            </Head>
            <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
                <div className="max-w-6xl w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">
                        Mobile Automation — SauceDemo
                    </h1>

                    <p className="text-lg text-blue-100 font-semibold mb-4">
                        End-to-end automation project for the SauceDemo mobile app (Android). Covers essential flows: login, cart, context menu, checkout, and price validations.
                    </p>

                    {/* Scope */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Scope</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>User authentication (Login)</li>
                            <li>Shopping cart management</li>
                            <li>Context menu navigation</li>
                            <li>Complete checkout flow</li>
                            <li>Price calculation and validations</li>
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Technologies & Tools</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>Appium</li>
                            <li>Cucumber (BDD)</li>
                            <li>JUnit 5</li>
                            <li>Java</li>
                            <li>Allure Reports</li>
                        </ul>
                    </div>

                    {/* Documentation */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Documentation & Test Tracking</h2>
                        <p className="text-gray-300 mb-4">
                            In addition to automated reports (JUnit + Allure), I maintain manual documentation of the test cases covered to ensure traceability and functional coverage.
                        </p>
                        <AppiumTrackingTable />
                        <p className="text-blue-300 text-sm mt-2">
                            Fragment from the manually maintained test case documentation.
                        </p>
                    </div>

                    {/* Technical Challenges */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Technical Challenges</h2>
                        <p className="text-gray-300 mb-4">
                            Coming from a more traditional testing approach, adapting to BDD with Cucumber required some effort, despite being familiar with Gherkin syntax.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Solutions Implemented</h2>
                        <p className="text-gray-300 mb-4">
                            I started with simple tests using JUnit and gradually migrated them to BDD, which helped me better understand the structure and flow of Cucumber-based automation.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Key Features</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>End-to-end mobile flow automation</li>
                            <li>Allure Reports with automatic screenshot capture on failures</li>
                            <li>Data sharing between test steps</li>
                            <li>Best practices: Hooks, Page Object Model, and Context Management</li>
                        </ul>
                    </div>

                    {/* Allure Report Example */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Screenshot Example in Allure</h2>
                        <div className="rounded border border-blue-800 overflow-auto bg-black/40 mb-2">
                            <Image
                                src="/assets/allure-example-appium.png"
                                alt="Allure Screenshot Example"
                                width={1200}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                        <p className="text-blue-300 text-sm">
                            Example of a test execution result screenshot on mobile.
                        </p>
                    </div>

                    {/* Result */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Result</h2>
                        <p className="text-gray-300">
                            Stable and maintainable mobile test suite covering key functionalities of the app.
                            Although its scope is slightly smaller than the web version, it is easy to extend and adapt.
                        </p>
                    </div>

                    {/* Lessons & Future Improvements */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Lessons & Future Improvements</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-1">
                            <li>Deeper knowledge of BDD with Cucumber and reporting with Allure</li>
                            <li>Next steps: improved cross-device testing and CI integration</li>
                        </ul>
                    </div>

                    {/* Repository Links */}
                    <div>
                        <h2 className="text-xl font-bold text-blue-200 mb-2">Repository</h2>
                        <ul className="space-y-1">
                            <li>
                                <a href="https://github.com/MoisesCorrales-devQa/appium-saucedemo-tests" className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a href="https://reports.moisescorrales.com/appium/" className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">
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
