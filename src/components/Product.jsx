import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/Product.css';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


Modal.setAppElement('#root');

// Εισάγετε τις εικόνες
import productImage1 from '../assets/images/image5.JPG';
import productImage2 from '../assets/images/image6.JPG';
import productImage3 from '../assets/images/image7.JPG';
import productImage4 from '../assets/images/image8.JPG';

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
    <Tab>Μαλλιά</Tab>
    <Tab>Σώμα</Tab>
  </div>
  <TabPanel>
    <Tabs>
      <div className="tabsbtn1">
        <Tab>Νωπά μαλλιά</Tab>
        <Tab>Στεγνά μαλλιά</Tab>
      </div>
      <TabPanel>
        <p>Απλώστε μερικές σταγόνες στις παλάμες σας και τρίψτε τα χέρια σας μέχρι να απλωθεί το προϊόν στις παλάμες και τα δάχτυλα σας. Στη συνέχεια, χρησιμοποιήστε τα δάχτυλα σας με μια κίνηση χτενίσματος για να κατανείμετε ομοιόμορφα το προϊόν από το μεσαίο μήκος έως τις άκρες.
Σε νωπά μαλλιά βοηθάει στο ξεμπέρδεμα και στο styling.</p>
       <h3>
        Παραπάνω Θρέψη
       </h3>
       <p>Προσθέστε μερικές σταγόνες από το λάδι στη μάσκα μαλλιών σας όποτε τα μαλλιά χρειάζονται περισσότερη θρέψη.</p>
       <h3>
       Παρατεταμένη θρέψη
       </h3>
       <p>Χωρίστε τα μαλλιά σας σε 2 τμήματα και προσθέστε ικανοποιητική  ποσότητα λαδιού ώστε να καλύψει τα μαλλια  και στις 2 πλευρές. Δημιουργήστε 2 πλεξούδες και αφήστε να δράσει για λίγες ώρες η όλο το βράδυ.Αν δεν έχει απορροφηθεί πλήρως προχωράτε στο λούσιμο των μαλλιών.</p>
      </TabPanel>
      <TabPanel>
        <p>Σε στεγνά μαλλια βοηθάει στον έλεγχο του φριζαρίσματος και δίνει λάμψη.
Ιδανικά κάθε φορά που κάνετε εφαρμογή είτε σε νωπά είτε σε στεγνά μαλλιά,
αν το επιτρέπει το χτένισμα,προχωρήστε σε ένα πέρασμα με τη χτένα 
για ομοιόμορφη κατανομή του προϊόντος και δώστε λίγα λεπτά να απορροφηθεί.
 Το χτένισμα να γίνετε πάντα από κάτω προς τα πάνω και σε ελαφρώς νωπά ή στεγνά  μαλλιά για να αποφευχθεί 
 το σπάσιμο της τρίχας.</p>
 <h3>
        Παραπάνω Θρέψη
       </h3>
       <p>Προσθέστε μερικές σταγόνες από το λάδι στη μάσκα μαλλιών σας όποτε τα μαλλιά χρειάζονται περισσότερη θρέψη.</p>
       <h3>
       Παρατεταμένη θρέψη
       </h3>
       <p>Χωρίστε τα μαλλιά σας σε 2 τμήματα και προσθέστε ικανοποιητική  ποσότητα λαδιού ώστε να καλύψει τα μαλλια  και στις 2 πλευρές. Δημιουργήστε 2 πλεξούδες και αφήστε να δράσει για λίγες ώρες η όλο το βράδυ.Αν δεν έχει απορροφηθεί πλήρως προχωράτε στο λούσιμο των μαλλιών.</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
  <TabPanel>
    <p>Εφαρμόστε μια ποσότητα στα χέρια και απλώστε σε νωπό ή στεγνό δέρμα. Για επιπλέον ενυδάτωση και θρέψη εφαρμοστέ την κρέμα σας και στη συνέχεια το λάδι για να σφραγίσει την υγρασία.</p>
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

  
  function FlipCard({ title, description, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} />
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Χρήση του Component της FlipCard
<FlipCard
  title="Φυτική Σιλικόνη"
  description="Η Φυτική Σιλικόνη είναι μια μαλακτική ουσία που προέρχεται από τα Λιπαρά Οξέα της καρύδας. Δρα ως ισχυρό λιπαντικό στην επιφάνεια του δέρματος, σχηματίζοντας μια λεπτή μη λιπαρή μεμβράνη, χαρίζοντας στην επιδερμίδα απαλή, λεία και σφριγηλή όψη. Εφαρμόζεται στα μαλλιά και το δέρμα που οι μαλακτικές ιδιότητες είναι πολύ σημαντικές."
  image="path_to_your_image"
/>
  
    return (
      <div className="card-container">
        <h2>Συστατικά</h2>
        <div className="flip-card-container">
          <FlipCard
            title="Φυτική Σιλικόνη"
            description="Η Φυτική Σιλικόνη είναι μια μαλακτική ουσία που προέρχεται από τα Λιπαρά Οξέα της καρύδας. Δρα ως ισχυρό λιπαντικό στην επιφάνεια του δέρματος, σχηματίζοντας μια λεπτή μη λιπαρή μεμβράνη, χαρίζοντας στην επιδερμίδα απαλή, λεία και σφριγηλή όψη. Εφαρμόζεται στα μαλλιά και το δέρμα που οι μαλακτικές ιδιότητες είναι πολύ σημαντικές."
            image="path_to_your_image"
          />
          <FlipCard
            title="Αργκάν έλαιο"
            description="Το έλαιο αργκάν είναι ένα από τα πλουσιότερα έλαια σε βιταμίνες και αντιοξειδωτικά. Είναι πλούσιο σε βιταμίνη Ε, Ωμέγα-6 και Ωμέγα-9 λιπαρά οξέα. Είναι ένα έλαιο που ενυδατώνει τα μαλλιά και το δέρμα, τα θρέφει και τα προστατεύει από την ξηρότητα."
            image="path_to_your_image"
          />

          </div>
          </div>
    );
}

export default Product;
