import React, { useEffect, useState } from 'react';
import '../assets/MainContent.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import { useNavigate } from 'react-router-dom';

export const MainContent = () => {

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

  const navigate = useNavigate();

  return (
    <main>
      <div className="product-title">
      <h1 className="typing-text">LOOK AMAZING AND FEEL AS FAB AS EVER</h1>
      </div>
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
      <section className="hero">
        <div className="product-description">
          <h1>Castine</h1>
          <h2>Natural Dry Oil</h2>
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
        <button onClick={() => navigate('/products')}>Παραγγελία</button>
      </div>
      <section className="additional-content">
        {/* Προσθέστε εδώ περισσότερο περιεχόμενο και φωτογραφίες */}
      </section>
    </main>
  );
};


