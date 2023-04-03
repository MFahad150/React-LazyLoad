import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';

const Navbar = lazy(() =>import('./components/Navbar'));
const About = lazy(() =>import('./components/About'));
const Services = lazy(() =>import('./components/service'));
const Gallery = lazy(() =>import('./components/Gallery'));
const Footer = lazy(() =>import('./components/Footer'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Services />
    <Suspense fallback={<h1>Loading gallery images...</h1>}> 
      <Gallery /> 
    </Suspense>
    <Footer />
  </React.StrictMode>
);
