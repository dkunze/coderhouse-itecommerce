import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemContainers/ItemListContainer";
import ItemDetailContainer from "./components/ItemContainers/ItemDetailContainer";
import Cart from './components/Cart/Cart'
import CartContext from './Context/cartContext'

function App() {  
  return (
    <CartContext>
      <Router>
        <div className="container">
          <NavBar />

          <Switch>
            <div className="text-center">
              <Route path='/' exact>
                <ItemListContainer gretting="Hey there! This is my first ReactJs App!" />
              </Route>
              <Route path='/categories/:categoryId' exact component={ItemListContainer} />
              <Route path='/details/:productId' exact component={ItemDetailContainer} />
            </div>
            <Route path='/cart' exact>
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContext>
  );
}

export default App;
