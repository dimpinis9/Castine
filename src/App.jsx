import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { About } from './components/About';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  // Χρησιμοποιούμε το useLocation για να πάρουμε την τρέχουσα διεύθυνση URL
  const location = useLocation();

  // Καθορίζουμε την κλάση που θα χρησιμοποιηθεί για το καλωσόρισμα
  let welcomeClass = 'welcome';

  // Εάν είμαστε στην αρχική σελίδα, χρησιμοποιούμε την κλάση 'homepage' για το καλωσόρισμα
  if (location.pathname === '/') {
    welcomeClass += ' homepage';
  } else {
    // Σε κάθε άλλη σελίδα, χρησιμοποιούμε την κλάση 'hidden' για να το κρύψουμε
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
