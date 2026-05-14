import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    title: "Dashboard",
    text: "Una vista rápida de tu estado actual, progreso y métricas principales.",
    image: "/images/Dashboard.png",
  },
  {
    title: "Peso",
    text: "Registra tu peso corporal y revisa la evolución con gráficas claras.",
    image: "/images/Peso.png",
  },
  {
    title: "Entrenos",
    text: "Lleva el control de sesiones, ejercicios y rendimiento semanal.",
    image: "/images/Entrenos.png",
  },
  {
    title: "Composición corporal",
    text: "Consulta estimaciones y medidas para entender mejor tus cambios físicos.",
    image: "/images/Composición corporal.png",
  },
];

const highlights = [
  "Peso, medidas y evolución corporal",
  "Entrenamientos y progreso",
  "Pasos y actividad física con permisos opcionales",
  "Objetivos calóricos y macros sin diario de comidas",
];

export default function FitStatsLanding() {
  return (
    <>
      <Head>
        <title>FitStats | Seguimiento fitness claro y privado</title>
        <meta
          name="description"
          content="FitStats es una app móvil para registrar peso, medidas, entrenamientos, pasos y objetivos nutricionales."
        />
      </Head>

      <section className="min-h-screen bg-[#07110d] px-5 py-8 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-12 flex flex-col gap-4 border-b border-emerald-400/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/FitStats" className="flex items-center gap-3">
              <Image
                src="/images/icon.png"
                alt="Icono de FitStats"
                width={88}
                height={88}
                className="h-11 w-11 rounded-xl"
              />
              <span className="text-2xl font-black tracking-wide text-white">
                Fit<span className="text-emerald-300">Stats</span>
              </span>
            </Link>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              <a href="#screens" className="hover:text-emerald-200">
                Capturas
              </a>
              <a href="#features" className="hover:text-emerald-200">
                Funciones
              </a>
              <Link href="/FitStats/privacy" className="hover:text-emerald-200">
                Privacidad
              </Link>
            </div>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                App móvil de seguimiento fitness
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                Tu progreso fitness, claro y bajo control.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                FitStats reúne tus registros de peso, medidas, entrenamientos,
                pasos y objetivos nutricionales en una experiencia visual,
                sencilla y pensada para revisar tu evolución sin ruido.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#screens"
                  className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
                >
                  Ver la app
                </a>
                <Link
                  href="/FitStats/privacy"
                  className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
                >
                  Privacidad
                </Link>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-3xl grid-cols-[0.9fr_1fr] items-center gap-4 sm:gap-6">
              <div className="translate-y-8">
                <div className="rounded-[2rem] border border-white/10 bg-black p-2 shadow-2xl shadow-black/40">
                  <Image
                    src="/images/Peso.png"
                    alt="Pantalla de control de peso en FitStats"
                    width={1080}
                    height={2400}
                    priority
                    className="aspect-[9/20] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-[2rem] border border-emerald-400/30 bg-black p-2 shadow-2xl shadow-emerald-950/40">
                  <Image
                    src="/images/Dashboard.png"
                    alt="Dashboard principal de FitStats"
                    width={1080}
                    height={2400}
                    priority
                    className="aspect-[9/20] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <section id="screens" className="py-20">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Una app pensada para mirar datos de un vistazo
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Cada pantalla está enfocada en una tarea concreta: consultar,
                registrar y entender tu progreso sin saturarte.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((screen) => (
                <article
                  key={screen.title}
                  className="overflow-hidden rounded-lg border border-white/10 bg-[#101513] shadow-lg shadow-black/10"
                >
                  <div className="bg-black p-2">
                    <Image
                      src={screen.image}
                      alt={`Captura de ${screen.title} en FitStats`}
                      width={1080}
                      height={2400}
                      className="aspect-[9/20] w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-emerald-300">
                      {screen.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {screen.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="features"
            className="grid gap-5 border-t border-emerald-400/20 py-14 lg:grid-cols-3"
          >
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="text-2xl font-bold text-emerald-300">
                Seguimiento útil
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Registra peso, medidas corporales, entrenamientos, pasos y
                objetivos nutricionales. FitStats no registra comidas diarias ni
                pretende sustituir asesoramiento médico.
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="text-2xl font-bold text-emerald-300">
                Datos privados
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Los datos se almacenan principalmente en tu dispositivo. FitStats
                no vende datos personales y no los usa para publicidad
                personalizada.
              </p>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="text-2xl font-bold text-emerald-300">
                Control real
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Puedes exportar datos en JSON o Excel, borrar registros desde
                ajustes y revocar permisos de Health Connect desde el sistema.
              </p>
            </article>
          </section>

          <section className="flex flex-col gap-5 border-t border-emerald-400/20 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">
                Información legal y gestión de datos
              </h2>
              <p className="mt-2 text-slate-300">
                Consulta la política de privacidad y las instrucciones para
                borrar datos de FitStats.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/FitStats/privacy"
                className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Política de privacidad
              </Link>
              <Link
                href="/FitStats/delete-data"
                className="rounded-lg bg-emerald-400 px-5 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Borrar datos
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
