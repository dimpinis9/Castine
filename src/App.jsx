import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import  {About}  from './components/About';
import  Product  from './components/Product';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  
  const location = useLocation();

 
  let welcomeClass = 'welcome';

  
  if (location.pathname === '/') {
    welcomeClass += ' homepage';
  } else {
    
    welcomeClass += ' hidden';
  }

  return (
    <div className="App">
      {/* Εφαρμόζουμε την κατάλληλη κλάση στο καλωσόρισμα */}
      <div className={welcomeClass}>
        Καλώς ήρθατε στην Ιστοσελίδα μας!
      </div>
      <Header />
      <div className="content-container"> 
        
        <Routes>
          <Route path="/" element={
            <>
              <MainContent />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Product />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
