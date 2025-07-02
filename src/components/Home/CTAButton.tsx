import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="/projects"
      className="mt-7 inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white text-base md:text-lg py-2.5 px-8 rounded-full shadow-lg font-bold hover:from-blue-700 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Ver proyectos
    </Link>
  );
}