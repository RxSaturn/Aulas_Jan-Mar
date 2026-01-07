import Aside from "./container/Aside";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Main from "./container/Main";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer login="maurohs">Último login em 07/01/2026 às 09:00</Footer>
    </>
  );
}

export default App;
