import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Product from "./components/Product";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import ReturnPolicy from "./components/ReturnPolicy";
import Terms from "./components/Terms";
import ShippingInfo from "./components/ShippingInfo";
import PaymentMethods from "./components/PaymentMethods";

import "./App.css";

function App() {
  // const location = useLocation();

  let welcomeClass = "welcome";

  // if (location.pathname === '/') {
  //   welcomeClass += ' homepage';
  // } else {

  //   welcomeClass += ' hidden';
  // }

  return (
    <div className="App">
      {/* Εφαρμόζουμε την κατάλληλη κλάση στο καλωσόρισμα */}
      <div className={welcomeClass}>
        Με την εγγραφή σας, κερδίζετε 10% έκπτωση στην πρώτη σας αγορά!
      </div>
      <Header />
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContent />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<ContactForm />} />

          <Route path="/login" element={<Login />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/shippingInfo" element={<ShippingInfo />} />

          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/payment-methods" component={<PaymentMethods />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
