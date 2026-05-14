import Head from "next/head";

const collectedData = [
  "Datos de perfil físico, como edad, altura, sexo, peso objetivo y objetivos calóricos o de macronutrientes.",
  "Registros de peso corporal introducidos por el usuario.",
  "Medidas corporales registradas en la app.",
  "Datos de entrenamiento, como ejercicios, sesiones, volumen, progreso y rendimiento.",
  "Datos de pasos o actividad física cuando el usuario concede permisos a través de Health Connect o servicios equivalentes.",
  "Datos relacionados con compras o estado premium cuando se utilizan compras dentro de la app.",
];

const purposes = [
  "Mostrar la evolución del usuario y sus estadísticas dentro de la app.",
  "Generar gráficas y resúmenes visuales de progreso.",
  "Calcular estimaciones relacionadas con composición corporal, objetivos y rendimiento.",
  "Permitir la exportación de datos bajo acción explícita del usuario.",
  "Gestionar funciones premium y validar el estado de compra o suscripción.",
];

const sections = [
  {
    title: "Datos que recopilamos",
    body: (
      <ul className="space-y-3">
        {collectedData.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Finalidad del uso de los datos",
    body: (
      <ul className="space-y-3">
        {purposes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Almacenamiento de datos",
    body: (
      <>
        <p>
          Los datos de FitStats se almacenan principalmente de forma local en el
          dispositivo del usuario. Esto significa que la información de
          seguimiento fitness permanece, por defecto, bajo el control del usuario
          en su propio dispositivo.
        </p>
        <p>
          FitStats no vende datos personales y no utiliza los datos del usuario
          para publicidad personalizada ni con fines publicitarios.
        </p>
      </>
    ),
  },
  {
    title: "Datos de salud y actividad física",
    body: (
      <>
        <p>
          FitStats puede acceder a datos de pasos o actividad física mediante
          Health Connect, Google Fit u otros servicios equivalentes, siempre que
          el usuario conceda los permisos correspondientes.
        </p>
        <p>
          Estos permisos son opcionales. El usuario puede revocarlos en cualquier
          momento desde los ajustes del sistema o desde la configuración de
          permisos del dispositivo.
        </p>
        <p>
          Los datos de salud y actividad física se utilizan solo para mostrar
          estadísticas, gráficas y evolución dentro de FitStats. No se usan para
          publicidad ni se venden a terceros.
        </p>
      </>
    ),
  },
  {
    title: "Compartición con terceros",
    body: (
      <>
        <p>
          FitStats utiliza Google Play Billing, Google Play Services y
          RevenueCat para procesar, validar o gestionar compras premium,
          suscripciones o licencias.
        </p>
        <p>
          Estos terceros procesan solamente la información necesaria para prestar
          sus servicios, como verificar una compra o mantener activo el acceso a
          funciones premium. FitStats no comparte datos personales con terceros
          para fines publicitarios.
        </p>
      </>
    ),
  },
  {
    title: "Exportación de datos",
    body: (
      <p>
        FitStats puede permitir al usuario generar archivos exportados, como JSON
        o Excel, bajo una acción explícita dentro de la app. El usuario decide
        dónde guarda esos archivos y con quién los comparte. Una vez exportados,
        el tratamiento de esos archivos depende de las acciones y servicios que
        el usuario elija utilizar.
      </p>
    ),
  },
  {
    title: "Seguridad",
    body: (
      <>
        <p>
          Aplicamos medidas razonables de seguridad para proteger la información
          gestionada por FitStats frente a accesos no autorizados, alteración o
          pérdida accidental.
        </p>
        <p>
          Cuando sea necesaria la transmisión de datos hacia servicios externos,
          por ejemplo para validar compras premium, se utilizarán conexiones
          seguras mediante HTTPS siempre que el proveedor lo permita.
        </p>
      </>
    ),
  },
  {
    title: "Eliminación de datos",
    body: (
      <>
        <p>
          El usuario puede borrar registros desde la propia app cuando esta
          funcionalidad esté disponible. Si los datos se almacenan localmente,
          también puede eliminarlos desinstalando FitStats del dispositivo.
        </p>
        <p>
          Para solicitudes relacionadas con privacidad o eliminación de datos, el
          usuario puede contactar en{" "}
          <a
            href="mailto:TU_EMAIL_DE_SOPORTE"
            className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
          >
            TU_EMAIL_DE_SOPORTE
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Menores",
    body: (
      <p>
        FitStats no está dirigida a menores de 13 años. No recopilamos
        conscientemente datos personales de menores de 13 años. Si un padre,
        madre o tutor cree que un menor ha proporcionado información personal,
        puede contactar con nosotros para solicitar su revisión o eliminación.
      </p>
    ),
  },
  {
    title: "Cambios en esta política",
    body: (
      <p>
        Podemos actualizar esta Política de Privacidad para reflejar cambios en
        FitStats, requisitos legales o mejoras en nuestras prácticas de
        privacidad. La versión publicada en esta página indicará siempre la fecha
        de última actualización.
      </p>
    ),
  },
  {
    title: "Contacto",
    body: (
      <p>
        Para cualquier pregunta sobre esta Política de Privacidad o sobre el
        tratamiento de datos en FitStats, puedes contactar con el desarrollador
        en{" "}
        <a
          href="mailto:TU_EMAIL_DE_SOPORTE"
          className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
        >
          TU_EMAIL_DE_SOPORTE
        </a>
        .
      </p>
    ),
  },
];

export default function FitStatsPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | FitStats</title>
        <meta
          name="description"
          content="Política de privacidad de la aplicación FitStats."
        />
      </Head>

      <section className="min-h-screen bg-[#07110d] px-5 py-16 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-emerald-400/20 pb-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              FitStats
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Política de Privacidad de FitStats
            </h1>
            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-slate-100">
                  Última actualización:
                </span>{" "}
                14 de mayo de 2026
              </p>
              <p>
                <span className="font-semibold text-slate-100">
                  Responsable/desarrollador:
                </span>{" "}
                Moises Corrales
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold text-slate-100">Contacto:</span>{" "}
                <a
                  href="mailto:TU_EMAIL_DE_SOPORTE"
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                >
                  TU_EMAIL_DE_SOPORTE
                </a>
              </p>
            </div>
          </header>

          <div className="mb-8 rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 text-base leading-8 text-slate-200 shadow-2xl shadow-black/20">
            <p>
              Esta Política de Privacidad explica cómo FitStats trata la
              información relacionada con el seguimiento fitness del usuario.
              FitStats permite registrar peso corporal, medidas corporales,
              entrenamientos, pasos y objetivos nutricionales. La app no registra
              comidas diarias, no ofrece coaching médico ni planes
              personalizados, no vende datos personales y no utiliza los datos
              con fines publicitarios.
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10"
              >
                <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-300">
                  {section.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
