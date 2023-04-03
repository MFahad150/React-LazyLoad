import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/service';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Services />
    <Gallery />
    <Footer />
  </React.StrictMode>
);
