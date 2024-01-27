import React, { useState } from 'react';
import '../assets/Header.css';
import Modal from 'react-modal';

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
      <Modal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        contentLabel="Καλάθι"
      >
        {/* Προσθέστε εδώ το περιεχόμενο του modal */}
        <h2>Το καλάθι σας</h2>
        <button onClick={closeCartModal}>Κλείσιμο</button>
      </Modal>
    </header>
  );
};
