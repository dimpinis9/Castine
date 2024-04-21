import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';

import { useCart } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  productImage9 from '../assets/images/image9.jpg';
import productImage4 from '../assets/images/image4.jpg';
import productImage7 from '../assets/images/image7.JPG';




export const MainContent = () => {
  const [showHero, setShowHero] = useState(true);
 
  useEffect(() => {
    setShowHero(true);
  }, []);

  const imageUrls = [productImage4, productImage7];

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: 1, 
      name: 'Φυσικό έλαιο CASTINE',
      price: 47,
      image: productImage9, 
    };

    addToCart(product);
    toast.success(`${product.name} προστέθηκε με επιτυχία στο καλάθι!`);
  };

  return (
    <main>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  <div className='image-lmp'>
      <div className="image-container">
        {showHero && (
          <img src={imageUrls[0]} />
        )}
         <div className="product-title" >
          <div className="deserve">YOU DESERVE IT</div>
          <div className="stay">STAY BEAUTIFUL</div>
          <div className="inside">INSIDE AND OUTSIDE</div>
          </div>
      </div>
    </div>
<div className="oils-introduction-card">
  <h2>Τα φυσικά έλαια: Ελιξίρια ευεξίας και ομορφιάς</h2>
  <p>Από την αρχαιότητα μέχρι σήμερα, τα έλαια θεωρούνται η επιτομή της περιποίησης για άνδρες και γυναίκες. </p>
  <p> Είναι πλούσια σε θρεπτικά συστατικά και ιδανικά για την υγεία της επιδερμίδας και των μαλλιών.</p>
  {/* */}
  {/* Προσθήκη της εικόνας */}
  
</div>
 <div className="order-card">
<div className='image-oil-card'>
<img src={imageUrls[1]}   />
{/* <div className="oils-introduction-card"> */}
<p>Ανακαλύψτε το CASTINE dry oil και επωφεληθείτε από τους θησαυρούς που κρύβει μέσα του.</p>
<div className="OrderButton">
<button onClick={handleAddToCart}>ΠΑΡΑΓΓΕΛΙΑ ΤΩΡΑ</button>
</div>
</div>
</div>

    </main>
  );
};
