{
  /* Desustruturação de props */
}
const UserDetails = ({ cargo, idade, matricula }) => {
  return (
    <>
      <p>Cargo: {cargo}</p>
      <p>Idade: {idade}</p>
      <p>Matrícula: {matricula}</p>
    </>
  );
};

export default UserDetails;
