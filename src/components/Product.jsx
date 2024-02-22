import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/Product.css';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


Modal.setAppElement('#root');

// Εισάγετε τις εικόνες
import productImage1 from '../assets/images/image1.jpg';
import productImage2 from '../assets/images/image2.jpg';
import productImage3 from '../assets/images/image3.jpg';
import productImage4 from '../assets/images/image4.jpg';

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
    <div className="product-container">
      <div className="product-carousel">
        <Carousel showArrows={true} showThumbs={true}>
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
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Τιμή: {product.price}€</p>
        <button className="add-to-cart-button" onClick={addToCart}>
          Προσθήκη στο Καλάθι
        </button>
      </div>
      
      <HowToUseSection />
      <Card />
      
  {/* Άλλα components */}
</div>
     
  );
};

const HowToUseSection = () => {
  return (
    <div className="how-to-use-container">
    <div className="how-to-use-content">
      <h2>ΟΔΗΓΙΕΣ ΧΡΗΣΗΣ</h2>
      <Tabs>
        <div className="tabsbtn">
          <Tab>Νωπά μαλλιά</Tab>
          <Tab>Στεγνά μαλλιά</Tab>
          </div>
        <TabPanel>
          <p>Εδώ θα πάει η περιγραφή για τα νωπά μαλλιά...</p>
        </TabPanel>
        <TabPanel>
          <p>Εδώ θα πάει η περιγραφή για τα στεγνά μαλλιά...</p>
        </TabPanel>
      </Tabs>
      <div className="complete-routine">
        <h3>ΚΑΘΗΜΕΡΙΝΗ ΧΡΗΣΗ</h3>
        <p>Η καθημερινή ρουτίνα είναι σημαντική για τα μέγιστα αποτελέσματα.</p>
      </div>
    </div>
    <div className="image-container">
      <img src="/src/assets/images/image2.jpg" alt="" />
    </div>
  </div>
    
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    padding: '20px',
    width: '80%',
    width: window.innerWidth <= 768 ? '100%' : '80%', // Αλλάζει το πλάτος σε 100% για οθόνες μικρότερες ή ίσες με 768px

  },
};

const Card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="card">
        <div className="card-content">
            <h2>ΑΝΑΚΑΛΥΨΤΕ ΤΑ ΣΥΣΤΑΤΙΚΑ ΜΑΣ</h2>
            <p>Τα συστατικά μας είναι 100% φυσικά και οργανικά.</p>
            <button onClick={() => setModalIsOpen(true)}>Δείτε τα συστατικά</button>
            <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setModalIsOpen(false)}
              style={customStyles}
              contentLabel="Συστατικά Modal"
            >
                <h2>Συστατικά</h2>
                <ul>
                    <li>
                        <h3>Φυτική Σιλικόνη</h3>
                        <p>Η Φυτική Σιλικόνη είναι μια μαλακτική ουσία που προέρχεται από τα Λιπαρά Οξέα της καρύδας. Δρα ως ισχυρό λιπαντικό στην επιφάνεια του δέρματος, σχηματίζοντας μια λεπτή μη λιπαρή μεμβράνη, χαρίζοντας στην επιδερμίδα απαλή, λεία και σφριγηλή όψη. Εφαρμόζεται στα μαλλιά και το δέρμα που οι μαλακτικές ιδιότητες είναι πολύ σημαντικές.</p>
                    </li>
                    <li>
                        <h3>Βιταμίνη Ε</h3>
                        <p>Είναι γνωστή για την πλούσια αντιοξειδωτική της δράση, η οποία βοηθά στην εξουδετέρωση των ελευθέρων ριζών που προκαλούν βλάβη στα μαλλιά και το δέρμα. Έχει ισχυρές μαλακτικές ιδιότητες, αυτό σημαίνει ότι σφραγίζει την υγρασία στα μαλλιά και στο δέρμα διατηρώντας τα ενυδατωμένα. Με συχνή χρήση αντιμετωπίζει τη ξηρότητα καθιστώντας τα μαλλιά και το δέρμα μαλακά και λαμπερά.</p>
                    </li>
                    <li>
                        <h3>Έλαιο Μαύρου Σταφυλιού</h3>
                        <p>Είναι εξαιρετικά πλούσιο σε Ω-6 και σε Βιταμίνη Ε. Έχει αντιφλεγμονώδη, αντισηπτικές, μαλακτικές και αναπλαστικές ιδιότητες. Χαρίζει στο δέρμα αίσθηση μεταξένιας απαλότητας και επιβραδύνει τη διαδικασία γήρανσης. Τα Φλαβονοειδή τα οποία είναι τα βασικά συστατικά των σταφυλιών σε συνδυασμό με την Βιταμίνη Ε εμποδίζουν τη βλαβερή επίδραση των ελευθέρων ριζών.</p>
                    </li>
                    <li>
                        <h3>Ηλιέλαιο</h3>
                        <p>Είναι πλούσιο σε Λινολεϊκό Οξύ και Λεκιθίνη, καθώς επίσης και σε Βιταμίνες Ε, Α, Β, D, Πρωτεΐνες και Ιχνοστοιχεία, ουσίες με μεγάλη θεραπευτική και κοσμητολογική αξία. Οι μεγάλες ποσότητες αντιοξειδωτικών που περιέχει συμβάλουν στον περιορισμό των ζημιών που προκαλούν οι ελεύθερες ρίζες, προστατεύοντας το δέρμα από τη φυσική γήρανση αλλά και από τις βλάβες της ηλιακής ακτινοβολίας. Ενώ βοηθούν και στην προστασία του κολλαγόνου και της ελαστινης στο δέρμα, διατηρώντας τα κύτταρα υγιή και ζωντανά. Λειτουργεί ως παράγοντας διατήρησης της υγρασίας μέσα στα δερματικά κύτταρα, βοηθώντας το δέρμα να παραμένει ενυδατωμένο για μεγαλύτερο χρονικό διάστημα, ως εκ τούτου πιο απαλό και ελαστικό. Είναι ιδανικό για τη φροντίδα των μαλλιών.</p>
                    </li>
                    <li>
                        <h3>Λάδι Αβησσυνίας</h3>
                        <p>Είναι πλούσιο σε ακόρεστα Λιπαρά Οξέα μακράς αλυσίδας ω-6 και ω-9, Βιταμίνες A, B, C, E, Πρωτεΐνες αλλά και Μέταλλα. Διαπερνά τα εξωτερικά στρώματα της επιδερμίδας, θρέφει σε βάθος και ενυδατώνει παρέχοντας ένα απαλό στρώμα προστασίας κατά της αφυδάτωσης. Το έλαιο Αβησσυνίας ενισχύει την ελαστικότητα του δέρματος. Έχει σπουδαίες δυνατότητες conditioning για τα μαλλιά καθώς προσφέρει ενυδάτωση, λάμψη, απαλότητα και ενδυνάμωση των ινών της τρίχας, προστατεύει από το σπάσιμο.</p>
                    </li>
                </ul>
                <button onClick={() => setModalIsOpen(false)}>Κλείσιμο</button>
            </Modal>
        </div>
    </div> 
  );
};

export default Product;
