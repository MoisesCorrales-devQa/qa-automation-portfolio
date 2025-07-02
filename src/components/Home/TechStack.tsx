const stack = [
  { name: "Appium", color: "bg-blue-900/80 text-blue-200" },
  { name: "Selenium", color: "bg-green-900/80 text-green-200" },
  { name: "JUnit", color: "bg-red-900/80 text-red-200" },
  { name: "Cucumber", color: "bg-lime-900/80 text-lime-200" },
  { name: "Allure", color: "bg-purple-900/80 text-purple-200" },
  { name: "TDD", color: "bg-gray-800/80 text-gray-200" },
  { name: "Git", color: "bg-orange-900/80 text-orange-200" },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {stack.map((tech) => (
        <span
          key={tech.name}
          className={`px-4 py-1.5 rounded-full text-sm md:text-base font-semibold shadow-md border border-white/10 ${tech.color} transition-colors duration-150 hover:brightness-125`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}