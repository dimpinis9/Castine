import React, { useState, useEffect } from 'react';
import '../assets/MainContent.css';
import { useSprings, animated } from 'react-spring';
import productImage4 from '../assets/images/image4.jpg';

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


export const  MainContent = () => {
  const [showHero, setShowHero] = useState(true);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setShowHero(true);

    let opacityTimeout = setTimeout(() => setOpacity(1), 2000); // Αλλάξτε σταδιακά τη διαφάνεια σε 1 σε 2 δευτερόλεπτα

    return () => clearTimeout(opacityTimeout);
  }, []);

  const imageUrls = [productImage4]; // Διατηρήστε μόνο την image4

  return (
    <main>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', marginTop: '-100px' }}>
     <div className="image-container">
  {showHero && (
    <img src={imageUrls[0]} style={{ width: "100%", height: "auto", opacity: opacity }} alt="Slideshow" />
  )}
</div>
</div>
      <div className="product-title">
        <h1 className="deserve">
          <AnimatedText text="YOU DESERVE IT"/>
        </h1>
        <h2 className="stay"><AnimatedText text="STAY BEAUTIFUL"/></h2>
        <h2 className="inside"><AnimatedText text="INSIDE AND OUTSIDE" /></h2>
    
      </div>
      <div className="oils-introduction-card">
  <h2>Τα φυσικά έλαια: Ελιξίρια ευεξίας και ομορφιάς</h2>
  <p>Από την αρχαιότητα μέχρι σήμερα, τα έλαια θεωρούνται η επιτομή της περιποίησης για άνδρες και γυναίκες. Είναι πλούσια σε θρεπτικά συστατικά και ιδανικά για την υγεία της επιδερμίδας και των μαλλιών.</p>
  <p>Ανακαλύψτε το CASTINE dry oil και επωφεληθείτε από τους θησαυρούς που κρύβει μέσα του.</p>
</div>
 <div className="OrderButton">
        <button> ΠΑΡΑΓΓΕΛΙΑ ΤΩΡΑ</button>
 </div>
  
<div className="oils-introduction-card">
  <h2>Το CASTINE dry oil</h2>
  <p>Είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα. Τα ελαια και τα λιπαρά που παράγει η επιδερμίδα συμβάλουν στην προστασία και την εξισορρόπηση του προστατευτικού φραγμού της αλλά συχνά, λόγω καιρικών συνθηκών, λάθος πρακτικών περιποίησης, το πέρασμα των ετών, η παραγωγή τους μειώνεται και τότε το δέρμα αρχίζει να αφυδατώνεται.</p>
  <p>Εφαρμόστε μετά το ντουζ σε νωπή επιδερμίδα για καλύτερα αποτελέσματα.</p>
</div>

      <div className="oils-introduction-card">
      <h2>CASTINE Dry Oil: Λάμψη & Ενυδάτωση</h2>
  <p>Είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα.
     Το έλαιο σφραγίζει την υγρασία και διατηρεί τα μαλλιά ενυδατωμένα, μειώνοντας το χρόνο στεγνώματος και βοηθώντας στο styling. Βοηθάει στην αποκατάσταση των βλαβών της τρίχας, κάνει τα μαλλιά ευκολοχτένιστα και αποτρέπει το σπάσιμο της τρίχας, με αποτέλεσμα τα μαλλιά να διατηρούν το μήκος τους. Ελέγχει το φρεζάρισμα και κάνει τα μαλλιά μαλακά, απαλά, δυνατά και ελαστικά.</p>
     
</div>
      
    </main>
  );
};
