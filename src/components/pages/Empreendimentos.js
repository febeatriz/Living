import React from 'react';
import MainEmpreendimentos from './../../newComponents/MainEmpreendimentos';
import Cards from './../../newComponents/CardsEmpreendimentos';
import '../../App.css';
import Dropdown from '../../newComponents/Dropdown';
import Footer from '../Footer';
import Contact from '../../newComponents/Contact';


function Empreendimentos(){
  return(
    <div>
      <MainEmpreendimentos/>
      <Dropdown />
      <Contact/>
      <Footer />
    </div>
  );
}

export default Empreendimentos;
