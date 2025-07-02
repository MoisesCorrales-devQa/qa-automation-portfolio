import Head from "next/head";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <>
      <Head>
        <title>Contact | Moisés Corrales</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <div className="max-w-lg w-full bg-black/30 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">Contact</h1>

          {/* Mensaje de bienvenida / llamada a la acción */}
          <p className="text-lg text-blue-100 mb-6">
            ¿Tienes una oportunidad interesante o alguna pregunta? <br />
            Estoy abierto a propuestas relacionadas con QA Automation, testing en apps móviles y web.<br />
            <span className="font-semibold text-blue-200">No dudes en escribirme.</span>
          </p>

          {/* Datos de contacto */}
          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[1.5em]">📧</span>
              <span className="text-blue-100 text-lg select-all align-middle leading-none">
                moisescorrales.testing@gmail.com
              </span>
            </div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/moisés-corrales-bosch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-[1.5em] text-blue-300 group-hover:text-blue-500 transition" />
              <span className="text-blue-100 text-lg underline underline-offset-2 group-hover:text-blue-300 align-middle leading-none">
                linkedin.com/in/moisés-corrales-bosch
              </span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/MoisesCorrales-devQa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:text-blue-400 transition"
            >
              <FaGithub className="text-[1.5em] text-blue-300 group-hover:text-blue-500 transition" />
              <span className="text-blue-100 text-lg underline underline-offset-2 group-hover:text-blue-300 align-middle leading-none">
                github.com/MoisesCorrales-devQa
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}