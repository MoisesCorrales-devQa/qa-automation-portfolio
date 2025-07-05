export interface Project {
  title: string;
  type: "Web Automation" | "Mobile Automation";
  subtitle: string;
  description: string;
  technologies: {
    name: string;
    icon: string; // ruta relativa a /public
  }[];
  features: string[];
  githubUrl: string;
  allureUrl: string;
}

export const projects: Project[] = [
  {
    title: "Web Automation – SauceDemo",
    type: "Web Automation",
    subtitle: "Selenium + Cucumber",
    description:
      "Automation project for the SauceDemo web app, covering the full flow: login, cart management, navigation, side menu, and checkout.",
    technologies: [
      { name: "Selenium", icon: "/icons/selenium.svg" },
      { name: "JUnit 5", icon: "/icons/junit5.svg" },
      { name: "Allure", icon: "/icons/allure.svg" },
      { name: "Java", icon: "/icons/java.svg" },
    ],
    features: [
      "Allure reports with test environment info.",
      "Automatic error capture.",
      "Modular, maintainable test suite.",
      "Full requirements traceability."
    ],
    githubUrl: "https://github.com/MoisesCorrales-devQa/saucedemo-qa-automation",
    allureUrl: "https://reports.moisescorrales.com/selenium/"
  },
  {
    title: "Mobile Automation – SauceDemo",
    type: "Mobile Automation",
    subtitle: "Appium + Cucumber",
    description:
      "Automation project for the SauceDemo mobile app (Android), covering login, cart, context menu, complete checkout, and price validations.",
    technologies: [
      { name: "Appium", icon: "/icons/appium.svg" },
      { name: "Cucumber", icon: "/icons/cucumber.svg" },
      { name: "JUnit 4", icon: "/icons/junit.svg" },
      { name: "Allure", icon: "/icons/allure.svg" },
      { name: "Java", icon: "/icons/java.svg" },
    ],
    features: [
      "E2E automation for mobile app.",
      "Allure reports with automatic screenshots on failures.",
      "Data context between steps.",
      "Best practices (Hooks, Page Objects, Contexts)."
    ],
    githubUrl: "https://github.com/MoisesCorrales-devQa/appium-saucedemo-tests",
    allureUrl: "https://reports.moisescorrales.com/appium/"
  }
];