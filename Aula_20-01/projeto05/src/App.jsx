import InputText from "./components/InputText";

function App() {
  return (
    <>
      <InputText nome="item" tipo="text" label="Item" />
      <br />
      <InputText nome="quantidade" tipo="number" label="Quantidade" />
      <br />
      <InputText nome="unidade" tipo="text" label="Unidade de medida" />
    </>
  );
}

export default App;
