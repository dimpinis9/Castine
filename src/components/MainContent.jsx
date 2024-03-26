import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';
import { useSprings, animated } from 'react-spring';

const AnimatedText = ({ text }) => {
  const characters = text.split('');

  const springs = useSprings(
    characters.length,
    characters.map((char, index) => ({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: 100 * index,
    }))
  );

  return (
    <div>
      {springs.map((style, index) => (
        <animated.span key={index} style={style}>
          {characters[index]}
        </animated.span>
      ))}
    </div>
  );
};

const imageUrls = [
  '/src/assets/images/image1.JPG',
  '/src/assets/images/image2.JPG',
  '/src/assets/images/image3.JPG',
  '/src/assets/images/image4.JPG',
  // Προσθέστε εδώ τις δικές σας εικόνες
];

export const MainContent = () => {
  const [showHero, setShowHero] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(true);
    }, 2000);

    const imageInterval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % imageUrls.length);
    }, 5000); // Αλλαγή εικόνας κάθε 5 δευτερόλεπτα

    return () => {
      clearTimeout(timeout);
      clearInterval(imageInterval);
    };
  }, []);

  // Αντικατάσταση του video element με ένα div που περιέχει την ενεργή εικόνα
  return (
    <main>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'5%', height: '90vh', marginTop:'-100px' }}>
          <div className="image-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', maxWidth: '100%', maxHeight: '100%' }}>
            {showHero && (
              <img src={imageUrls[currentImage]} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="Slideshow" />
            )}
          <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', width: '100%', opacity: 0.7, transition: 'opacity 1s ease-in-out' }}>
        
          </div>
      
</div>
      </div>
      <div className="oils-introduction-card">
  <h2>Τα φυσικά έλαια: Ελιξίρια ευεξίας και ομορφιάς</h2>
  <p>Από την αρχαιότητα μέχρι σήμερα, τα έλαια θεωρούνται η επιτομή της περιποίησης για άνδρες και γυναίκες. Είναι πλούσια σε θρεπτικά συστατικά και ιδανικά για την υγεία της επιδερμίδας και των μαλλιών.</p>
  <p>Ανακαλύψτε το CASTINE dry oil και επωφεληθείτε από τους θησαυρούς που κρύβει μέσα του.</p>
</div>
      <div className="product-title">
        <h1 class="deserve">
          
          <AnimatedText text="YOU DESERVE IT"/>
        </h1>
        <h2 class="stay"><AnimatedText text="STAY BEAUTIFUL"  /></h2>
        <h2 class="inside"><AnimatedText text="INSIDE AND OUTSIDE" /> </h2>

        
      </div>
      
      <div className="product-summary">
        <h2>Περιγραφή Προϊόντος</h2>
        <p className="summary-text">
          Φυσικό λάδι για τα μαλλιά και το δέρμα - το μυστικό ομορφιάς σας.
          Το προϊόν μας περιέχει μια μοναδική φόρμουλα που ενυδατώνει τα μαλλιά
          σας και προσφέρει απαλότητα στο δέρμα. Ανακαλύψτε τα οφέλη τώρα!
        </p>
        <button onClick={() => navigate('/products')}>Προσθήκη στο Καλάθι</button>
      </div>
      <section className="additional-content">
       
      </section>
    </main>
  );
};
