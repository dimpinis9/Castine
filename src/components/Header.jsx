import React, { useState } from 'react';
import '../assets/Header.css';
import CartModal from './CartModal'; 
import logo from '../assets/images/castine-logo.png'; // Εισαγωγή της εικόνας

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li><a href="/">Αρχική</a></li>
          <li><a href="/products">Το Προϊόν</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Επικοινωνία</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="cart" onClick={openCartModal}>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} />
    </header>
  );
};
