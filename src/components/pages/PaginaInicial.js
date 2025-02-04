import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import Footer from '../Footer';
import Contact from '../Contact';
import StatsAnimation from '../StatsAnimation';
import Carrossel from '../Carrossel';
function Home() {
  return (
    <div >
      <MainSection />
      <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Cards />
      <StatsAnimation />
      <Carrossel/>
      <Contact />
      <Footer />
    </div>
      
    </div>
  );
}

export default Home;
