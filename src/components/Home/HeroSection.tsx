import Image from "next/image";
import CTAButton from "./CTAButton";
import TechStack from "./TechStack";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4 w-full min-h-[75vh] justify-center">
      <Image
        src="/images/moises-avatar.png"
        alt="Photo of Moisés Corrales"
        width={152}
        height={152}
        className="object-cover rounded-full w-38 h-38 border-4 border-blue-500 shadow-xl transition-transform duration-200 hover:scale-105"
        priority
      />
      <h1 className="text-3xl md:text-5xl font-extrabold mt-7 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
        Moisés Corrales
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-300 mt-2 font-semibold drop-shadow">
        Aspiring QA Automation Engineer
      </h2>
      <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-200 font-medium leading-relaxed shadow-sm">
        Specializing in <span className="text-blue-300 font-semibold">automated testing</span> for web and mobile apps.<br />
        Hands-on with <span className="font-semibold text-blue-200">Appium, Selenium, BDD, Allure, TDD</span>.
      </p>


      <CTAButton />

      <div className="mt-10 w-full">
        <TechStack />
      </div>
    </section>
  );
}
