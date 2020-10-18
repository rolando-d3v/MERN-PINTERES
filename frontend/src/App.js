import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './layout/header/Header';
import Formulario from './components/formulario/Formulario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <div className='container' >
     <Switch>
        <Route exact={true} path='/formulario' component={Formulario} />
      </Switch>
     </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
