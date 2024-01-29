import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productImage1 from '../assets/images/image1.jpg';
import productImage2 from '../assets/images/image2.jpg';
import productImage3 from '../assets/images/image3.jpg';
import productImage4 from '../assets/images/image4.jpg';
import '../assets/Product.css';

const Product = () => {
  // Λεπτομέρειες του προϊόντος
  const product = {
    name: 'Φυσικό λάδι για τα μαλλιά και το δέρμα',
    description:
      'Αυτό το προϊόν περιέχει μια μοναδική φόρμουλα που ενυδατώνει τα μαλλιά σας και προσφέρει απαλότητα στο δέρμα. Ανακαλύψτε τα οφέλη τώρα!',
    price: 19.99,
  };
  // Συνάρτηση για προσθήκη στο καλάθι
  const addToCart = () => {
    // Εδώ μπορείτε να προσθέσετε τη λογική για προσθήκη στο καλάθι
  };

  return (
    <div className="product-details">
      {/* Swiper (Carousel) για τις φωτογραφίες */}
      <Carousel showArrows={true}>
        <div>
          <img src={productImage1} alt="Εικόνα 1" />
        </div>
        <div>
          <img src={productImage2} alt="Εικόνα 2" />
        </div>
        <div>
          <img src={productImage3} alt="Εικόνα 3" />
        </div>
        <div>
          <img src={productImage4} alt="Εικόνα 4" />
        </div>
      </Carousel>

      <div className="product-introduction">
  <p>
    Είμαστε χαρούμενοι που σας παρουσιάζουμε το προϊόν μας, το φυσικό λάδι για τα μαλλιά και το δέρμα. Το προϊόν μας περιέχει μια μοναδική φόρμουλα που ενυδατώνει τα μαλλιά σας και προσφέρει απαλότητα στο δέρμα. Είναι η ιδανική λύση για τη φροντίδα της ομορφιάς σας.
  </p>
  <p>
    Στη σελίδα μας, μπορείτε να βρείτε πληροφορίες σχετικά με το προϊόν, τις συστατικές του, καθώς και οδηγίες χρήσης. Επιπλέον, μπορείτε να δείτε φωτογραφίες που αποτυπώνουν την ποιότητα και τα οφέλη του προϊόντος μας.
  </p>
  <p>
    Αν σας ενδιαφέρει το προϊόν μας, μπορείτε εύκολα να το προσθέσετε στο καλάθι σας με ένα απλό κλικ στο κουμπί 'Προσθήκη στο Καλάθι'. Επισκεφθείτε τη σελίδα μας για περισσότερες λεπτομέρειες και αγοράστε το φυσικό λάδι που θα σας κάνει να νιώθετε ακόμα πιο όμορφοι και φροντισμένοι.
  </p>
        <button onClick={addToCart}>Προσθήκη στο Καλάθι</button>
        <p>Τιμή: {product.price}€</p>
</div>


      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Συστατικά: Έλαια από αργκάν, ελιά, και βιταμίνη Ε</p>
        <p>Οδηγίες Χρήσης: Απλώστε μικρή ποσότητα στα μαλλιά και το δέρμα και κάντε απαλό μασάζ.</p>
        
      </div>
    </div>
  );
};

export default Product;
