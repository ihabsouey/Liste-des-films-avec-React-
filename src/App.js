import React from 'react';
import Search from './components/Search'
import Affiche from './components/Affiche'
import Details from './components/Details';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     
     
      <BrowserRouter>
         <Route exact path="/Liste-des-films-avec-React-/" component={Affiche} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/details/:id" component={Details} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
