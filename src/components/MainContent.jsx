import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';
import { useSprings, animated, useSpring  } from 'react-spring';
import { useCart } from '../CartContext';
import  productImage9 from '../assets/images/image9.jpg';
import productImage4 from '../assets/images/image4.jpg';
import productImage7 from '../assets/images/image7.JPG';




const AnimatedText = ({ text }) => {
  const characters = text.split('');
  // Χρησιμοποιήστε τη useSprings για να δημιουργήσετε ένα spring για κάθε χαρακτήρα με τη δική του καθυστέρηση
  const springs = useSprings(
    characters.length,
    characters.map((_, index) => ({
      from: { opacity: 0, transform: 'translateY(-100px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: index * 100, // Δώστε σε κάθε χαρακτήρα μια καθυστέρηση
    }))
  );

  return (
    <div>
      {springs.map((props, index) => (
        <animated.span key={index} style={props}>
          {characters[index]}
        </animated.span>
      ))}
    </div>
  );
};


export const MainContent = () => {
  const [showHero, setShowHero] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-50%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 200,
  });

  useEffect(() => {
    setShowHero(true);
  }, []);

  const imageUrls = [productImage4, productImage7];

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: 1, // Μοναδικός ID για κάθε προϊόν
      name: 'Φυσικό έλαιο CASTINE',
      price: 47,
      image: productImage9, // Προσθέστε σωστή διαδρομή εικόνας
    };

    addToCart(product);
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
<button onClick={handleAddToCart}>ΠΑΡΑΓΓΕΛΙΑ ΤΩΡΑ</button>
</div>
</div>
</div>


{/* </div> */}



  

      
    </main>
  );
};
