export default function TechStack() {
  const stack = ["Appium", "Selenium", "JUnit", "Cucumber", "Allure", "TDD", "Git"];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {stack.map((tech) => (
        <span
          key={tech}
          className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-800"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
