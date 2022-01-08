import React from 'react';
import Search from './components/Search'
import Affiche from './components/Home'
import Details from './components/Details';
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <switch>
          <Route exact path="/Liste-des-films-avec-React-/" component={Affiche} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Liste-des-films-avec-React-/search" component={Search} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/Liste-des-films-avec-React-/details/:id" component={Details} />
          <Route path="/Liste-des-films-avec-React-/404" component={NotFound} />
        </switch>
      </BrowserRouter>
      <footer>
        © Souey Ihab 2021 , All Right Reserved
      </footer>
    </div>
  );
}

export default App;
