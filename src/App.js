import {NavBar} from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">      
      <NavBar />
      <div class="text-center">
        <ItemListContainer gretting="Hey there! This is my first ReactJs App!" />
      </div>
    </div>
  );
}

export default App;
