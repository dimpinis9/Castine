import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';
import { useNavigate } from 'react-router-dom';

import productImage4 from '../assets/images/image4.jpg';
import productImage7 from '../assets/images/image7.JPG';




export const MainContent = () => {
  const [showHero, setShowHero] = useState(true);
  const navigate = useNavigate();
 
  useEffect(() => {
    setShowHero(true);
  }, []);

  const imageUrls = [productImage4, productImage7];
  const goToProductPage = () => {
    navigate('/products');
  };


  return (
    <main>
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
<button onClick={goToProductPage}>ΠΑΡΑΓΓΕΛΙΑ ΤΩΡΑ</button>
</div>
</div>
</div>

    </main>
  );
};
