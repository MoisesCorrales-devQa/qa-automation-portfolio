import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="#proyectos"
      className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
    >
      Ver proyectos
    </Link>
  );
}
