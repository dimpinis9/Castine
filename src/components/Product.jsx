import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/Product.css';
import Modal from 'react-modal';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { Collapse } from 'antd';
const { Panel } = Collapse;


import { Button } from 'antd';





Modal.setAppElement('#root');

// Εισάγετε τις εικόνες
import productImage1 from '../assets/images/image9.jpg';
import productImage2 from '../assets/images/image10.jpg';
import productImage3 from '../assets/images/image15.jpg';
import productImage4 from '../assets/images/image20.jpg';
import productImage5 from '../assets/images/image115.JPG';
import productImage6 from '../assets/images/image8.JPG';

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Αυτή η συνάρτηση αλλάζει την κατάσταση του isExpanded
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };


  // Αν το κείμενο δεν είναι αναπτυγμένο, εμφάνισε μόνο τα πρώτα 100 χαρακτήρες
  const displayedDescription = isExpanded ? description : `${description.substring(0, 125)}...`;

  return (
    <div>
      <p>{displayedDescription}</p>
      <Button className='read-more-button' type="link" onClick={toggleDescription}>
        {isExpanded ? 'Διαβάστε Λιγότερα' : 'Διαβάστε Περισσότερα...'}
      </Button>
    </div>
  );
};



const Product = () => {

  const description = "Φυσικό ξηρό λάδι με φυτοστερόλες από λάδι Αβυσσηνίας, που βελτιώνουν σημαντικά την ελαστικότητα των μαλλιών και του δέρματος. Έχοντας διάφανη βελούδινη υφή και άμεση απορρόφηση, περιέχει σύμπλεγμα φυτικών μαλακτικών από Ηλίανθο, Αμύγδαλο, Τζοτζόμπα, Αργκάν και Πράσινο Τσάϊ σε συνδυασμό με αντιοξειδωτικά έλαια Μαύρου Σταφυλιού Ελληνικού Ελαιολάδου οργανικής καλλιέργειας και βιταμίνης Ε. Εμπλουτισμένο με φυτική σιλικόνη για μια μοναδική αίσθηση μεταξένιας απαλότητας στα μαλλιά και το σώμα που διαρκεί, περιέχει συστατικά φυτικής προέλευσης 98%.";


  return (
    <div className="product-container">
    <Carousel autoplay showArrows={false}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      swipeable={true}
      stopOnHover={true} >
      {[productImage1, productImage2, productImage3, productImage4, productImage5].map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>

    <div className="product-details">
        <h1>Natural Dry Oil</h1>
        <h3>Hair & Body</h3>
        <ProductDescription className="product-description" description={description} />
        <p className="product-price">Αξία: 47€</p>
        <Button className='add-to-cart-button' type="primary">Προσθήκη στο Καλάθι</Button>
      </div>
     
      <div className="oils-introduction-card">
      <h2>Κατάλληλο για...</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Μαλλιά" key="1">
          <p>Είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα. Το έλαιο σφραγίζει την υγρασία και διατηρεί τα μαλλιά ενυδατωμένα. Μειώνει το χρόνο στεγνώματος και βοηθάει στο styling. Βοηθάει στην αποκατάσταση των βλαβών της τρίχας. Κάνει τα μαλλιά ευκολοχτένιστα και αποτρέπει το σπάσιμο της τρίχας με αποτέλεσμα τα μαλλιά να διατηρούν το μήκος τους. Ελέγχει το φρεζάρισμα και κάνει τα μαλλιά μαλακά, απαλά, δυνατά και ελαστικά.</p>
        </TabPane>
        <TabPane tab="Δέρμα" key="2">
          <p>Το CASTINE dry oil είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα. Τα έλαια και τα λιπαρά που παράγει η επιδερμίδα συμβάλουν στην προστασία και την εξισορρόπηση του προστατευτικού φραγμού της αλλά συχνά, λόγω καιρικών συνθηκών, λάθος πρακτικών περιποίησης, το πέρασμα των ετών, η παραγωγή τους μειώνεται και τότε το δέρμα αρχίζει να αφυδατώνεται. Τα έλαια που περιέχει το προϊόν είναι ιδανικά για να εισχωρήσουν στην επιδερμίδα και να συγκρατήσουν στο εσωτερικό της την απαραίτητη υγρασία ώστε να παραμείνει ενυδατωμένη, ελαστική, λαμπερή και απαλή σαν μετάξι.</p>
        </TabPane>
      </Tabs>
    </div>
 
    <div className="image-container">
      <img src={productImage6}  />
    </div>
      <HowToUseSection />
      <FAQCollapse />

  
</div>

     
  );
};

const HowToUseSection = () => {
  // Κρατήστε το ενεργό Tab για το κύριο Tabs και για το εσωτερικό Tabs
  const [activeMainTab, setActiveMainTab] = useState('1');
  const [activeHairTab, setActiveHairTab] = useState('1');

  return (
    <div className="how-to-use-container">
      <div className="how-to-use-content">
        <h2>ΟΔΗΓΙΕΣ ΧΡΗΣΗΣ</h2>
        <Tabs defaultActiveKey="1" onChange={(key) => setActiveMainTab(key)}>
          <TabPane tab="Μαλλιά" key="1">
            <Tabs defaultActiveKey="1" onChange={(key) => setActiveHairTab(key)}>  
              <h3 className='h3'>
        Για Νωπά Μαλλιά
       </h3>
              <p>Απλώστε μερικές σταγόνες στις παλάμες σας και τρίψτε τα χέρια σας μέχρι να απλωθεί το προϊόν στις παλάμες και τα δάχτυλα σας. Στη συνέχεια, χρησιμοποιήστε τα δάχτυλα σας με μια κίνηση χτενίσματος για να κατανείμετε ομοιόμορφα το προϊόν από το μεσαίο μήκος έως τις άκρες.
         Σε νωπά μαλλιά βοηθάει στο ξεμπέρδεμα και στο styling.</p>
          <h3 className='h3'>
        Για Στεγνά Μαλλιά
       </h3>
         <p>Σε στεγνά μαλλια βοηθάει στον έλεγχο του φριζαρίσματος και δίνει λάμψη.
Ιδανικά κάθε φορά που κάνετε εφαρμογή είτε σε νωπά είτε σε στεγνά μαλλιά,
αν το επιτρέπει το χτένισμα,προχωρήστε σε ένα πέρασμα με τη χτένα 
για ομοιόμορφη κατανομή του προϊόντος και δώστε λίγα λεπτά να απορροφηθεί.
 Το χτένισμα να γίνετε πάντα από κάτω προς τα πάνω και σε ελαφρώς νωπά ή στεγνά  μαλλιά για να αποφευχθεί 
 το σπάσιμο της τρίχας.</p>
        <h3 className='h3'>
        Παραπάνω Θρέψη
       </h3>
       <p>Προσθέστε μερικές σταγόνες από το λάδι στη μάσκα μαλλιών σας όποτε τα μαλλιά χρειάζονται περισσότερη θρέψη.</p>
        <h3 className='h3'>
       Παρατεταμένη θρέψη
       </h3>
       <p>Χωρίστε τα μαλλιά σας σε 2 τμήματα και προσθέστε ικανοποιητική  ποσότητα λαδιού ώστε να καλύψει τα μαλλια  και στις 2 πλευρές. Δημιουργήστε 2 πλεξούδες και αφήστε να δράσει για λίγες ώρες η όλο το βράδυ.Αν δεν έχει απορροφηθεί πλήρως προχωράτε στο λούσιμο των μαλλιών.</p>
        <h3 className='h3'>
        Παραπάνω Θρέψη
       </h3>
       <p>Προσθέστε μερικές σταγόνες από το λάδι στη μάσκα μαλλιών σας όποτε τα μαλλιά χρειάζονται περισσότερη θρέψη.</p>
        <h3 className='h3'>
       Παρατεταμένη θρέψη
       </h3>
       <p>Χωρίστε τα μαλλιά σας σε 2 τμήματα και προσθέστε ικανοποιητική  ποσότητα λαδιού ώστε να καλύψει τα μαλλια  και στις 2 πλευρές. Δημιουργήστε 2 πλεξούδες και αφήστε να δράσει για λίγες ώρες η όλο το βράδυ.Αν δεν έχει απορροφηθεί πλήρως προχωράτε στο λούσιμο των μαλλιών.</p>
              
              
            </Tabs>
          </TabPane>
          <TabPane tab="Δέρμα" key="2">
          <p>Εφαρμόστε μια ποσότητα στα χέρια και απλώστε σε νωπό ή στεγνό δέρμα. Για επιπλέον ενυδάτωση και θρέψη εφαρμοστέ την κρέμα σας και στη συνέχεια το λάδι για να σφραγίσει την υγρασία.</p>
          </TabPane>
        </Tabs>
      <div className="complete-routine">
        <h3>Καθημερινή Χρήση</h3>
        <p>Η καθημερινή ρουτίνα είναι σημαντική για τα μέγιστα αποτελέσματα.</p>
      </div>
    </div>
  
  </div>
  
    
  );
};

function FAQCollapse() {
  const [showMore, setShowMore] = useState(false);
  return (
   <div className='faq-container-section'>
    <div className="faq-container">
      <h2>ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ</h2>
      <p>Όλα όσα πρέπει να γνωρίζετε για το Castine Natural Dry Oil.</p>
      <Collapse accordion>
        <Panel header="Σε ποιον απευθύνεται αυτό το προϊόν;" key="1">
          <p>Αυτό το προϊόν είναι κατάλληλο για όλους άνω των 6 ετών.Unisex άρωμα.</p>
        </Panel>
        <Panel header="Είναι το προϊόν φυσικό;" key="3">
          <p>Το προϊόν ειναι 98% φυσικό </p>
        </Panel>
        <Panel header="Πόσες σταγόνες πρέπει να χρησιμοποιήσω για τον τύπο των μαλλιών μου;" key="2">
          <p>
            Εξαρτάται από την ποιότητα,την πυκνότητα και το μήκος  των μαλλιών.
            Για λεπτά μαλλιά 3-4 σταγόνες 
            Για μεσαία μαλλιά 4-5 σταγόνες 
            Για πυκνά μαλλιά 5-6 σταγόνες
            Πειραματιστείτε για να βρείτε την κατάλληλη ποσότητα για τον τύπο των μαλλιών σας.</p>
        </Panel>
        
        <Panel header="Είναι το προϊόν ασφαλές;" key="4">
          <p>Το προϊόν παρασκευάζεται και συσκευάζεται σύμφωνα με την Ευρωπαϊκή Νομοθεσία σε πιστοποιημένο εργαστήριο από τον Ε.Ο.Φ.
           Είναι γνωστοποιημένο στον Ευρωπαϊκό Οργανισμό ( CPNP ) και στον Ε.Ο.Φ</p>
        </Panel>
      </Collapse>
      {showMore && (
        <div style={{ marginTop: '1rem' }}>
          <Collapse accordion>
            <Panel header="Το προϊόν δοκιμάζετε σε ζώα;" key="5">
          <p>Όχι!Το προϊόν δεν δοκιμάζετε σε ζώα. Το προϊόν παράγεται στην Ελλάδα,μια χώρα της Ερωπαϊκής Ένωσης που βάση νόμου απαγορεύει τις δοκιμές στα ζώα.</p>
        </Panel>
        <Panel header="Περιέχει το προϊόν συστατικά  ζωικής προέλευσης;" key="6">
          <p>Όχι!Το προϊόν δεν περιέχει συστατικά ζωικής προέλευσης</p>
          </Panel>
          </Collapse>
        </div>
        )}
        <button style={{ marginTop: '1rem' }} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less' : 'See More'}
        </button>
    </div>
    </div>

  );
}



export default Product;
