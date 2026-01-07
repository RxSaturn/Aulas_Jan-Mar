{
  /* Renderizando elementos de array */
}
import EmployeeDetails from "./EmployeeDetails";
const Main = () => {
  const employees = [
    {
      matricula: "G7H2",
      nome: "OutroFulano",
      cargo: "Serviços Gerais",
      insalubridade: true,
      periculosidade: false,
    },
    {
      matricula: "I9J4",
      nome: "Ciclana",
      cargo: "Eletricista",
      insalubridade: false,
      periculosidade: true,
    },
  ];
  return (
    <>
      {employees.map((employee) => (
        <EmployeeDetails
          key={employee.matricula}
          nome={employee.nome}
          matricula={employee.matricula}
          cargo={employee.cargo}
          insalubridade={employee.insalubridade}
          periculosidade={employee.periculosidade}
        />
      ))}
    </>
  );
};

export default Main;
