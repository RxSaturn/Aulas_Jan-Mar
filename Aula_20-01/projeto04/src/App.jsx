import { useState } from "react";
import ShowMessage from "./components/ShowMessage";
import AlterMessage from "./components/AlterMessage";
function App() {
  const [message, setMessage] = useState("Select your language:");

  return (
    <>
      <ShowMessage mensagem={message} />
      <AlterMessage handleAlterMessage={setMessage} />
    </>
  );
}

export default App;
