
// Destructurando los componestes para ser usado aqui
import React from 'react';
// importando los componente destructuarado para evirar una linea por conponente.
import { Brand, Cta, Navbar,AboutComponent} from './components';
import {About, Blog, Services, Footer, Header,Possibility, ContactForm } from './containers';
// css tiles
import './App.css';

// Componente principal
const App = () => {
  return (
    <div className='APP'>
      <div className=''>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <About/>
        <AboutComponent/>
        <Services/>
        <Possibility/>
        <Cta/>
        <Blog/>       
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default App