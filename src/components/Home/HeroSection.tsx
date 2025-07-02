import Image from "next/image";
import CTAButton from "./CTAButton";
import TechStack from "./TechStack";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <Image
        src="/images/moises-avatar.png"
        alt="Foto de Moisés Corrales"
        width={160}
        height={160}
        className="object-cover rounded-full w-[160px] h-[160px] border-4 border-blue-500 shadow-md"
      />
      <h1 className="text-3xl md:text-5xl font-bold mt-6">Moisés Corrales</h1>
      <h2 className="text-xl md:text-2xl text-gray-300 mt-2">
        QA Automation Engineer
      </h2>
      <p className="mt-4 max-w-2xl text-gray-700">
        Especializado en pruebas automatizadas para aplicaciones web y móviles.
        Experto en Appium, Selenium, BDD, Allure, TDD...
      </p>

      <CTAButton />

      <div className="mt-10">
        <TechStack />
      </div>
    </section>
  );
}
