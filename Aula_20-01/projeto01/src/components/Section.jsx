import ShowMessage from "./ShowMessage";
import { useState } from "react";

const Section = () => {
  const [mensagem, setMensagem] = useState("Texto original");
  const handleAlterMessage = () => {
    setMensagem("Texto alterado");
    console.log(mensagem);
  };
  return (
    <>
      <h2>{mensagem}</h2>
      <ShowMessage handleAlterMessage={handleAlterMessage} />
    </>
  );
};

export default Section;
