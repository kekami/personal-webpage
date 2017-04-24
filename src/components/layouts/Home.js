import React from 'react';
import Sidebar from '../presentation/Sidebar';
import Header from '../presentation/Header';
import About from '../presentation/About';
import Skillset from '../presentation/Skillset';
import Portfolio from '../presentation/Portfolio';
import Contact from '../presentation/Contact';
import Footer from '../presentation/Footer';

const Home = () => (
  <div className="container-fluid">
    <Sidebar />
    <Header />
    <About />
    <Skillset />
    <Portfolio />
    <Contact />
    <Footer />  
  </div>
);

export default Home;