import "./AlterMessage.css";
const AlterMessage = ({ handleAlterMessage }) => {
  const text = ["Bem vindo", "Welcome", "Bienvenido"];
  return (
    <>
      <button className="btn" onClick={() => handleAlterMessage(text[0])}>
        Português
      </button>
      <button className="btn" onClick={() => handleAlterMessage(text[1])}>
        Inglês
      </button>
      <button className="btn" onClick={() => handleAlterMessage(text[2])}>
        Espanhol
      </button>
    </>
  );
};

export default AlterMessage;
