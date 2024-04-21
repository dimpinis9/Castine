import React, { useState } from 'react';
import '../assets/Header.css';
import CartModal from './CartModal'; 
import { useCart } from '../CartContext';
import logo from '../assets/images/castine_logo.png'

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <header>
      <div className="logo">
      <a href="/">
    <img src={logo} alt="Castine logo" />
  </a>
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
        
          <li><a href="/">ΑΡΧΙΚΗ</a></li>
          <li><a href="/products">ΠΡΟΙΟΝ</a></li>
          
          <li><a href="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
          <li><button onClick={() => setMenuOpen(false)}><i className="fas fa-times"></i></button></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="header-icons"> {/* Προσθέστε αυτή την κλάση γύρω από τα εικονίδια */}
        <a href="/login" className="login-icon">
          <i className="fas fa-user"></i>
        </a>
        <div className="cart" onClick={openCartModal}>
          <i className="fas fa-shopping-cart"></i>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      </div>
      <CartModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} />
    </header>
  );
  
}
