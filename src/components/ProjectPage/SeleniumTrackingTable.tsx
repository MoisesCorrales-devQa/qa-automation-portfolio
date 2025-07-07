const testCases = [
  {
    id: "TC001",
    name: "Login exitoso con usuario válido",
    module: "Login",
    preconditions: "Navegador en https://saucedemo.com/",
    steps: [
      "Ingresar usuario",
      "Ingresar password",
      "Clic en Login",
    ],
    data: "standard_user / secret_sauce",
    expected: "Redirección a página de inventario",
    automated: true,
  },
  {
    id: "TC002",
    name: "Login con credenciales inválidas",
    module: "Login",
    preconditions: "Navegador en https://saucedemo.com/",
    steps: [
      "Ingresar usuario incorrecto",
      "Ingresar password incorrecta",
      "Clic en Login",
    ],
    data: "usuario_x / secret_sauce",
    expected: "Mostrar mensaje de error de autenticación",
    automated: true,
  },
  {
    id: "TC003",
    name: "Login con usuario bloqueado",
    module: "Login",
    preconditions: "Navegador en https://saucedemo.com/",
    steps: [
      "Ingresar usuario bloqueado",
      "Ingresar password",
      "Clic en Login",
    ],
    data: "locked_out_user / secret_sauce",
    expected: "Mostrar mensaje: usuario bloqueado",
    automated: true,
  },
  {
    id: "TC004",
    name: "Login con usuario vacío",
    module: "Login",
    preconditions: "Navegador en https://saucedemo.com/",
    steps: [
      "Dejar usuario vacío",
      "Ingresar password",
      "Clic en Login",
    ],
    data: 'standard_user / ""',
    expected: "Mostrar mensaje de campo obligatorio",
    automated: true,
  },
  {
    id: "TC005",
    name: "Login con password vacía",
    module: "Login",
    preconditions: "Navegador en https://saucedemo.com/",
    steps: [
      "Introducir usuario",
      "Dejar contraseña vacía",
      "Clic en Login",
    ],
    data: "/ secret_sauce",
    expected: "Mostrar mensaje de campo obligatorio",
    automated: true,
  },
  {
    id: "TC006",
    name: "Validar nombre, descripción y precio",
    module: "Inventario",
    preconditions: "Usuario autenticado",
    steps: [
      "Acceder al inventario",
      "Revisar nombre, descripción y precio por item",
    ],
    data: "-",
    expected: "Todos los datos deben mostrarse correctamente",
    automated: true,
  },
  {
    id: "TC007.1",
    name: "Ordenamiento de productos A-Z",
    module: "Inventario",
    preconditions: "Usuario autenticado",
    steps: [
      "Abrir menú de ordenamiento",
      "Seleccionar A-Z",
    ],
    data: "-",
    expected: "Lista ordenada alfabéticamente ascendente",
    automated: true,
  },
  {
    id: "TC007.2",
    name: "Ordenamiento de productos Z-A",
    module: "Inventario",
    preconditions: "Usuario autenticado",
    steps: [
      "Abrir menú de ordenamiento",
      "Seleccionar Z-A",
    ],
    data: "-",
    expected: "Lista ordenada alfabéticamente descendente",
    automated: true,
  },
  {
    id: "TC008.1",
    name: "Ordenamiento de productos precio ascendente",
    module: "Inventario",
    preconditions: "Usuario autenticado",
    steps: [
      "Abrir menú de ordenamiento",
      "Seleccionar precio ascendente",
    ],
    data: "-",
    expected: "Lista ordenada por precio ascendente",
    automated: true,
  },
  {
    id: "TC008.2",
    name: "Ordenamiento de productos precio descendente",
    module: "Inventario",
    preconditions: "Usuario autenticado",
    steps: [
      "Abrir menú de ordenamiento",
      "Seleccionar precio descendente",
    ],
    data: "-",
    expected: "Lista ordenada por precio descendente",
    automated: true,
  },
];

export default function TrackingTable() {
  return (
    <div className="overflow-x-auto rounded border border-gray-700 bg-gray-900 mb-4">
      <table className="min-w-[1200px] w-full text-xs text-gray-200">
        <thead>
          <tr className="bg-orange-100 text-gray-900">
            <th className="p-2 font-bold">ID</th>
            <th className="p-2 font-bold">Nombre del Caso de Prueba</th>
            <th className="p-2 font-bold">Módulo / Funcionalidad</th>
            <th className="p-2 font-bold">Precondiciones</th>
            <th className="p-2 font-bold">Pasos</th>
            <th className="p-2 font-bold">Datos</th>
            <th className="p-2 font-bold">Resultado Esperado</th>
            <th className="p-2 font-bold">Automatizado</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map(tc => (
            <tr key={tc.id} className="border-t border-gray-700">
              <td className="p-2 font-semibold bg-orange-50 text-gray-900">{tc.id}</td>
              <td className="p-2 bg-orange-50 text-gray-900">{tc.name}</td>
              <td className="p-2 bg-blue-100 text-blue-900">{tc.module}</td>
              <td className="p-2">{tc.preconditions}</td>
              <td className="p-2 whitespace-pre-line">{tc.steps.map((s, i) => `${i+1}. ${s}`).join('\n')}</td>
              <td className="p-2">{tc.data}</td>
              <td className="p-2">{tc.expected}</td>
              <td className="p-2 text-center bg-green-100 text-green-700 font-bold">
                {tc.automated ? "✔️ Sí" : "❌ No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}