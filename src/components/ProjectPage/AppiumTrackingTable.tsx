const appiumTestCases = [
  {
    id: "F001-S01",
    feature: "Login de usuario",
    scenario: "Login válido",
    automated: true,
    featureFile: "login.feature",
  },
  {
    id: "F001-S02",
    feature: "Login de usuario",
    scenario: "Login fallido",
    automated: true,
    featureFile: "login.feature",
  },
  {
    id: "F001-S03",
    feature: "Login de usuario",
    scenario: "Login bloqueado",
    automated: true,
    featureFile: "login.feature",
  },
  {
    id: "F001-S04",
    feature: "Login de usuario",
    scenario: "Login con contraseña vacía",
    automated: true,
    featureFile: "login.feature",
  },
  {
    id: "F001-S05",
    feature: "Login de usuario",
    scenario: "Login con usuario vacío",
    automated: true,
    featureFile: "login.feature",
  },
  {
    id: "F002-S01",
    feature: "Funcionalidad del carrito",
    scenario: "Añadir un producto al carrito",
    automated: true,
    featureFile: "cart.feature",
  },
  {
    id: "F002-S02",
    feature: "Funcionalidad del carrito",
    scenario: "Eliminar un producto del carrito",
    automated: true,
    featureFile: "cart.feature",
  },
  {
    id: "F002-S03",
    feature: "Funcionalidad del carrito",
    scenario: "Añadir múltiples productos y verificar el total",
    automated: true,
    featureFile: "cart.feature",
  },
];

export default function AppiumTrackingTable() {
  return (
    <div className="overflow-x-auto rounded border border-gray-700 bg-black/30 mb-4">
      <table className="min-w-[900px] w-full text-xs text-gray-200">
        <thead>
          <tr className="bg-orange-100 text-gray-900">
            <th className="p-2 font-bold">ID</th>
            <th className="p-2 font-bold">Feature</th>
            <th className="p-2 font-bold">Escenario</th>
            <th className="p-2 font-bold">Automatizado</th>
            <th className="p-2 font-bold">Archivo Feature</th>
          </tr>
        </thead>
        <tbody>
          {appiumTestCases.map(tc => (
            <tr key={tc.id} className="border-t border-gray-700">
              <td className="p-2 font-semibold bg-orange-50 text-gray-900">{tc.id}</td>
              <td className={`p-2 ${tc.feature.startsWith("Login") ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"}`}>{tc.feature}</td>
              <td className="p-2">{tc.scenario}</td>
              <td className="p-2 text-center bg-green-100 text-green-700 font-bold">
                {tc.automated ? "✔️ Sí" : "❌ No"}
              </td>
              <td className="p-2 bg-green-50 text-green-900">{tc.featureFile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}