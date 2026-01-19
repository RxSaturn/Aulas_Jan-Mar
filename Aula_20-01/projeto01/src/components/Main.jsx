import ShowMessage from "./ShowMessage";

const Main = () => {
  let mensagem = "Texto original";
  console.log(mensagem);
  const handleAlterMessage = () => {
    mensagem = "Texto alterado";
    console.log(mensagem);
  };

  return (
    <>
      {mensagem}
      <ShowMessage handleAlterMessage={handleAlterMessage} />
    </>
  );
};

export default Main;
