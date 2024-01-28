import React from 'react';
import '../assets/CartModal.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '20%',
      left: '85%',
      right: 'auto',
      bottom: 'auto',
       width: '10%',
      transform: 'translate(-50%, 0)',
    },
  };
  

const CartModal = ({ isOpen, onRequestClose }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Καλάθι"
        style={customStyles}
      >
        <div className="modal-content">
          <h2>Το καλάθι σας</h2>
          <button onClick={onRequestClose}>Κλείσιμο</button>
        </div>
      </Modal>
    );
  };
  
  export default CartModal;
  