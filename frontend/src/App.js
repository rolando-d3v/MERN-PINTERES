import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './layout/header/Header';
import Formulario from './components/formulario/Formulario';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <div className='container' >
     <Switch>
        <Route exact={true} path='/formulario' component={Formulario} />
        <Route exact={true} path='/' component={Home} />
      </Switch>
     </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
