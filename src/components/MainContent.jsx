import React, { useEffect } from 'react';
import '../assets/MainContent.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    const slides = document.querySelectorAll('.mySlides');
    let currentSlide = 0;

    slides[currentSlide].classList.add('showing');

    const nextSlide = () => {
      slides[currentSlide].classList.remove('showing');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('showing');
    };

    const slideInterval = setInterval(nextSlide, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <main>
      <div className="content-container">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={image1} alt="Εικόνα 1" />
          </div>
          <div className="mySlides fade">
            <img src={image2} alt="Εικόνα 2" />
          </div>
          <div className="mySlides fade">
            <img src={image3} alt="Εικόνα 3" />
          </div>
        </div>
      </div>
      <div className="product-title">
        <h1>
          <AnimatedText text="LOOK AMAZING AND FEEL AS FAB AS EVER" />
        </h1>
      </div>
      <section className="hero">
        <div className="product-description">
          <h1>Natural Dry Oil</h1>
          <p>Φυσικό λάδι για τα μαλλιά και το δέρμα - το μυστικό ομορφιάς σας.</p>
          <button onClick={() => navigate('/products')}>Ανακαλύψτε περισσότερα</button>
        </div>
      </section>
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
