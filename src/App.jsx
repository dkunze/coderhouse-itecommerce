import React from 'react'
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemContainers/ItemListContainer";
import ItemDetailContainer from "./components/ItemContainers/ItemDetailContainer";
import Cart from './components/Cart/Cart'
import CartContext from './Context/cartContext'
import PageNotFound from './NotFound'

function App() {
  return (
    <Router>
      <CartContext>
        <NavBar />
        <Switch>
          <Route path='/' exact component={ItemListContainer} />
          <Route path='/categories/:categoryId' exact component={ItemListContainer} />
          <Route path='/details/:productId' exact component={ItemDetailContainer} />
          <Route path='/cart' exact component={Cart} />
          <Route component={PageNotFound} />

        </Switch>
      </CartContext>
    </Router>
  )
}

export default App;