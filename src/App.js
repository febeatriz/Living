import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/PaginaInicial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Empreendimentos from './components/pages/Empreendimentos';
import SobreLiving from './components/pages/SobreLiving';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/empreendimentos' component={Empreendimentos} />
          <Route path='/sobreLiving' component={SobreLiving} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
