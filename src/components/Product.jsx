import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/Product.css';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


Modal.setAppElement('#root');

// Εισάγετε τις εικόνες
import productImage1 from '../assets/images/image9.jpg';
import productImage2 from '../assets/images/image10.jpg';
import productImage3 from '../assets/images/image15.jpg';
import productImage4 from '../assets/images/image20.jpg';
import productImage5 from '../assets/images/image115.jpg';

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Αυτή η συνάρτηση αλλάζει την κατάσταση του isExpanded
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Αν το κείμενο δεν είναι αναπτυγμένο, εμφάνισε μόνο τα πρώτα 100 χαρακτήρες
  const displayedDescription = isExpanded ? description : `${description.substring(0, 125)}...`;

  return (
    <div className="product-description">
      <p>{displayedDescription}</p>
      <span onClick={toggleDescription} className="read-more-button">
        {isExpanded ? 'Διαβάστε λιγότερο' : 'Διαβάστε περισσότερα...'}
      </span>
    </div>
  );
};



const Product = () => {

  const description = "Φυσικό ξηρό λάδι με φυτοστερόλες από λάδι Αβυσσηνίας, που βελτιώνουν σημαντικά την ελαστικότητα των μαλλιών και του δέρματος. Έχοντας διάφανη βελούδινη υφή και άμεση απορρόφηση, περιέχει σύμπλεγμα φυτικών μαλακτικών από Ηλίανθο, Αμύγδαλο, Τζοτζόμπα, Αργκάν και Πράσινο Τσάϊ σε συνδυασμό με αντιοξειδωτικά έλαια Μαύρου Σταφυλιού Ελληνικού Ελαιολάδου οργανικής καλλιέργειας και βιταμίνης Ε. Εμπλουτισμένο με φυτική σιλικόνη για μια μοναδική αίσθηση μεταξένιας απαλότητας στα μαλλιά και το σώμα που διαρκεί, περιέχει συστατικά φυτικής προέλευσης 98%.";


  return (
    <div className="product-container">
      <div className="product-carousel">
        <Carousel showArrows={false} showThumbs={true}>
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
          <div>
            <img src={productImage5} alt="Εικόνα 4" />
          </div>
        </Carousel>
        
      </div>

      <div className="product-details">
        <h1>Natural Dry Oil</h1>
        <h3>Hair & Body</h3>
        <ProductDescription description={description} />
          <p className="product-price"> Αξία: 47€</p>
        <button className="add-to-cart-button">
          Προσθήκη στο καλάθι
        </button>
      </div>

     
      <div className="oils-introduction-card">
      <h2>Κατάλληλο για...</h2>
      <Tabs>
        <TabList className="tabsbtn-properties">
          <Tab>Μαλλιά</Tab>
          <Tab>Δέρμα</Tab>
        </TabList>
        <TabPanel>
          <p>Είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα.
Το έλαιο σφραγίζει την υγρασία και διατηρεί τα μαλλιά ενυδατωμένα.
Μειώνει το χρόνο στεγνώματος και βοηθάει στο styling.
Βοηθάει στην αποκατάσταση των βλαβών της τρίχας.
Κάνει τα μαλλιά ευκολοχτένιστα και αποτρέπει το σπάσιμο της τρίχας με αποτέλεσμα τα μαλλιά να διατηρούν το μήκος τους.
Ελέγχει το φρεζάρισμα και κάνει τα μαλλιά μαλακά,απαλά,δυνατά και ελαστικά.</p>
        </TabPanel>
        <TabPanel>
          <p>Το CASTINE dry oil είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα.
Τα ελαια και τα λιπαρά που παράγει η επιδερμίδα συμβάλουν στην προστασία και την εξισορρόπηση του προστατευτικού φραγμού της αλλά συχνά ,λόγω καιρικών συνθηκών, λάθος πρακτικών περιποίησης,το πέρασμα των ετών, η παραγωγή τους μειώνεται και τότε το δέρμα αρχίζει να αφυδατώνεται. Τα έλαια που περιέχει το προϊόν είναι ιδανικά για να εισχωρήσουν στην επιδερμίδα και να συγκρατήσουν στο εσωτερικό της την απαραίτητη υγρασία ώστε να παραμείνει ενυδατωμένη, ελαστική, λαμπερή και απαλή σαν μετάξι.
Εφαρμόστε μετά το ντουζ σε νωπή επιδερμίδα.</p>
        </TabPanel>
      </Tabs>
    </div>

 
    <div className="image-container">
      <img src="/src/assets/images/image8.jpg"/>
    </div>
      <HowToUseSection />
  {/* Άλλα components */}

  
</div>

     
  );
};

const HowToUseSection = () => {
  const [tabIndex, setTabIndex] = useState(-1);
  const [hairTabIndex, setHairTabIndex] = useState(-1);
  return (
    <div className="how-to-use-container">
    <div className="how-to-use-content">
      <h2>ΟΔΗΓΙΕΣ ΧΡΗΣΗΣ</h2>

      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
  <div className="tabsbtn">
    <Tab>Μαλλιά <i class="fa fa-plus" aria-hidden="true"></i></Tab>
    <Tab>Δέρμα  <i class="fa fa-plus" aria-hidden="true"></i></Tab>
  </div>
  <TabPanel>
  <Tabs selectedIndex={hairTabIndex} onSelect={index => setHairTabIndex(index)}>
      <div className="tabsbtn1">
        <Tab>Νωπά μαλλιά  <i className="fa fa-plus" aria-hidden="true"></i></Tab>
        <Tab>Στεγνά μαλλιά <i className="fa fa-plus" aria-hidden="true"></i></Tab>
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
  
  </div>
  
    
  );
};



export default Product;
