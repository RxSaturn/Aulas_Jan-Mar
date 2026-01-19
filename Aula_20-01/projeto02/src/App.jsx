import { useState } from "react";
import ButtonCounter from "./components/ButtonCounter";
function App() {
  const [contador, setContador] = useState(1);

  const handleIncrementar = () => {
    //setContador(contador + 1);  -> Inseguro
    console.log(contador);
    setContador((prevContador) => prevContador + 1);
    console.log(contador);
  };

  return (
    <>
      <h1>Contador: {contador}</h1>
      <ButtonCounter
        handleIncrementar={handleIncrementar}
        label="Incrementar"
      />
    </>
  );
}

export default App;
