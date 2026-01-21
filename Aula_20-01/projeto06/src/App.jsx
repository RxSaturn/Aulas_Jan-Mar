import CardEmployee from "./components/CardEmployee";
import { useState } from "react";

function App() {
  const [nDesligados, setNDesligados] = useState(0);
  const handleAtivar = () => {
    setNDesligados((prev) => prev + 1);
  };
  const handleInativar = () => {
    setNDesligados((prev) => prev - 1);
  };

  const employees = [
    { id: 1, nome: "Alice", cargo: "Gerente" },
    { id: 2, nome: "Roberto", cargo: "Motorista" },
    { id: 3, nome: "Carlos", cargo: "Supervisor" },
  ];
  return (
    <>
      <h1>
        Número de colaboradores desligados:{" "}
        <b>{nDesligados > 0 ? nDesligados : "Nenhum"}</b>
      </h1>
      {employees.map((employee) => (
        <CardEmployee
          key={employee.id}
          id={employee.id}
          nome={employee.nome}
          cargo={employee.cargo}
          inativar={handleInativar}
          ativar={handleAtivar}
        />
      ))}
    </>
  );
}

export default App;
