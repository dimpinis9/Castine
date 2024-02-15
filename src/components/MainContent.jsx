import React, { useState,useEffect } from 'react';
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

export const MainContent = () => {
  const [showHero, setShowHero] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(true);
    }, 2000);


  return () => clearTimeout(timeout);
}, []);

  return (
    <main>
     
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'5%', height: '90vh', marginTop:'-100px' }}>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', maxWidth: '100%', maxHeight: '100%', }}>
        <video autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/src/assets/images/video.mp4" type="video/mp4" />
        </video>
        {showHero && (
          <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', width: '100%', opacity: 0.7, transition: 'opacity 1s ease-in-out' }}>
            <section className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', opacity: 0 }}>
              <div className="product-description">
                <h1>Natural Dry Oil</h1>
                <p>Φυσικό λάδι για τα μαλλιά και το δέρμα - το μυστικό ομορφιάς σας.</p>
                <button onClick={() => navigate('/products')}>Ανακαλύψτε περισσότερα</button>
              </div>
            </section>
          </div>
      )}
</div>
      </div>
      <div className="product-title">
        <h1>
          <AnimatedText text="LOOK AMAZING AND FEEL AS FAB AS EVER" />
        </h1>
      </div>
      
      <div className="product-summary">
        <h2>Συντόμη Περιγραφή Προϊόντος</h2>
        <p className="summary-text">
          Φυσικό λάδι για τα μαλλιά και το δέρμα - το μυστικό ομορφιάς σας.
          Το προϊόν μας περιέχει μια μοναδική φόρμουλα που ενυδατώνει τα μαλλιά
          σας και προσφέρει απαλότητα στο δέρμα. Ανακαλύψτε τα οφέλη τώρα!
        </p>
        <button onClick={() => navigate('/products')}>Προσθήκη στο Καλάθι</button>
      </div>
      <section className="additional-content">
        {/* Προσθέστε εδώ περισσότερο περιεχόμενο και φωτογραφίες */}
      </section>
    </main>
  );
};
