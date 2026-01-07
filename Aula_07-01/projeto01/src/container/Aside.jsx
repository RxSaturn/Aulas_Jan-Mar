import EmployeeDetails from "./EmployeeDetails";
import ShowUserLogged from "./ShowUserLogged";
import UserDetails from "./UserDetails";

const Aside = () => {
  return (
    <>
      <ShowUserLogged login="maurohs" nomeCompleto="Mauro Henrique Silva" />
      <UserDetails cargo="Técnico de TI" matricula="2233477" idade={33} />
      <EmployeeDetails
        nome="Fulano"
        matricula="A2B5"
        cargo="Almoxarife"
        insalubridade={true}
        periculosidade={false}
      />
      <EmployeeDetails
        nome="Ciclano"
        matricula="C8D3"
        cargo="Motorista"
        insalubridade={false}
        periculosidade={true}
      />
      <EmployeeDetails
        nome="Beltrano"
        matricula="E4F1"
        cargo="Vigia"
        insalubridade={false}
        periculosidade={true}
      />
    </>
  );
};

export default Aside;
