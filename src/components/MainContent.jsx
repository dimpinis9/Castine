import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';
import { useSprings, animated, useSpring  } from 'react-spring';
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
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  useEffect(() => {
    setShowHero(true);
  }, []);

  const imageUrls = [productImage4, productImage7];

  const addToCart = () => {
    // Εισάγετε το προϊόν που θέλετε να προσθέσετε στο καλάθι
    const newProduct = {id: 1,
      name: 'Φυσικό έλαιο CASTINE',
      price: 45.99,
      quantity: 1,
      image: productImage9,
      };

    // Προσθήκη του προϊόντος στο καλάθι
    setCartItems([...cartItems, newProduct]);
  };

  return (
    <main>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'relative' }}>
    <div className="image-container" style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        {showHero && (
          <img src={imageUrls[0]} style={{ width: "100%", height: "100vh", objectFit: 'cover' }} alt="Slideshow" />
        )}
        <animated.div className="product-title" style={{ ...fadeIn}}>
          <AnimatedText text="YOU DESERVE IT" className="deserve"/>
          <AnimatedText text="STAY BEAUTIFUL" className="stay"/>
          <AnimatedText text="INSIDE AND OUTSIDE" className="inside"/>
        </animated.div>
      </div>
</div>
 <div className="oils-introduction-card" style={{ textAlign: 'center', padding: '20px' }}>
 <h2>Τα φυσικά έλαια: Ελιξίρια ευεξίας και ομορφιάς</h2>
 <p>Από την αρχαιότητα μέχρι σήμερα, τα έλαια θεωρούνται η επιτομή της περιποίησης για άνδρες και γυναίκες. </p>
 <p> Είναι πλούσια σε θρεπτικά συστατικά και ιδανικά για την υγεία της επιδερμίδας και των μαλλιών.</p>
 <p>Ανακαλύψτε το CASTINE dry oil και επωφεληθείτε από τους θησαυρούς που κρύβει μέσα του.</p>
</div>

<div className="OrderButton" style={{ textAlign: 'center', margin: '20px 0' }}>
 <button onClick={addToCart} style={{ padding: '10px 20px', fontSize: '16px',order: 'none', borderRadius: '4px', cursor: 'pointer' }}>ΠΑΡΑΓΓΕΛΙΑ ΤΩΡΑ</button>
</div>

<div className='image-oil-card' style={{ textAlign: 'center' }}>
 <img src={imageUrls[1]}  style={{ maxWidth: '100%', width: '100%', height: 'auto' }} alt="Oil" />
</div>

  

      
    </main>
  );
};
