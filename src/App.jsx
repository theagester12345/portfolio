import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services'

function App() {
  return (
   <React.Fragment>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   </React.Fragment>
  );
}

export default App;
