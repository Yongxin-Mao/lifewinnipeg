import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Detail from './components/Detail'
import Cart from './components/Cart/Cart'
import My from './components/My'
import Shopping from './components/Shopping'
import Default from './components/Default'
import Modal from './components/Modal'
import Tab from './components/Tab/Tab'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/shopping" component={Shopping}/>
        <Route path="/my" component={My}/>
        <Route path="/" component={Default}/>
        
      </Switch>
      <Modal/>
      <Tab/>
    </React.Fragment>
  );
}

export default App;
