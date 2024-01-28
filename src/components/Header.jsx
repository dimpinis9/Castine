import React, { useState } from 'react';
import '../assets/Header.css';

import CartModal from './CartModal'; // Βεβαιωθείτε ότι έχετε κάνει import το CartModal

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Λογότυπο" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Αρχική</a></li>
          <li><a href="/products">Το Προϊόν</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Επικοινωνία</a></li>
        </ul>
      </nav>
      <div className="cart" onClick={openCartModal}>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} />
    </header>
  );
};
