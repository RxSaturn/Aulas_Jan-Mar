{
  /*Introdução a Props */
}
const ShowUserLogged = (props) => {
  return (
    <>
      <h3>
        Usuário logado: <b>{props.login}</b> - {props.nomeCompleto}
      </h3>
    </>
  );
};

export default ShowUserLogged;
