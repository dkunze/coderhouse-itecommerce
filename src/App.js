import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";

function App() {
  return (
    <div className="container">
      <CartWidget />
      <NavBar />
      <div class="text-center">
        <ItemListContainer gretting="Hey there! This is my first ReactJs App!" />
      </div>
    </div>
  );
}

export default App;
