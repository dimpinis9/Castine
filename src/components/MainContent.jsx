import React, { useEffect } from 'react';
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
          <h1>LOOK AMAZING AND FEEL AS FAB AS EVER</h1>
          <p>Φυσικό λάδι για τα μαλλιά και το δέρμα - το μυστικό ομορφιάς σας.</p>
          {/* Χρησιμοποιήστε το onClick για την πλοήγηση προς τη σελίδα /products */}
          <button onClick={() => navigate('/products')}>Ανακαλύψτε περισσότερα</button>
        </div>
      </section>
      <section className="additional-content">
        {/* Προσθέστε εδώ περισσότερο περιεχόμενο και φωτογραφίες */}
      </section>
    </main>
  );
};
