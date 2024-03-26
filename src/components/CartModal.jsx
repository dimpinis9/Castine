import React from 'react';
import '../assets/CartModal.css';
import Modal from 'react-modal';



const CartModal = ({ isOpen, onRequestClose }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Καλάθι"
       
      >
        <div className="modal-content">
          <h2>Το καλάθι σας</h2>
          <button onClick={onRequestClose}>Κλείσιμο</button>
        </div>
      </Modal>
    );
  };
  
  export default CartModal;
  