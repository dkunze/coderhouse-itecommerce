import {NavBar} from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemContainers/ItemListContainer";

function App() {
  return (
    <div className="container">      
      <NavBar />
      <div className="text-center">
        <ItemListContainer gretting="Hey there! This is my first ReactJs App!" />
      </div>
    </div>
  );
}

export default App;
