import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/Product.css";
import Modal from "react-modal";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { Collapse, Card } from "antd";
const { Panel } = Collapse;
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCart } from "../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

// Εισάγετε τις εικόνες
import productImage1 from "../assets/images/image9.jpg";
import productImage2 from "../assets/images/image10.jpg";
import productImage3 from "../assets/images/image15.jpg";
import productImage4 from "../assets/images/image20.jpg";
import productImage5 from "../assets/images/image115.JPG";
import productImage6 from "../assets/images/image8.JPG";

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Αυτή η συνάρτηση αλλάζει την κατάσταση του isExpanded
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Αν το κείμενο δεν είναι αναπτυγμένο, εμφάνισε μόνο τα πρώτα 100 χαρακτήρες
  const displayedDescription = isExpanded
    ? description
    : `${description.substring(0, 125)}...`;

  return (
    <div>
      <p className="product-description">{displayedDescription}</p>
      <Button
        className="read-more-button"
        type="link"
        onClick={toggleDescription}
      >
        {isExpanded ? "Διαβάστε Λιγότερα" : "Διαβάστε Περισσότερα..."}
      </Button>
    </div>
  );
};

const Product = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Φυσικό έλαιο CASTINE",
      price: 47,
      image: productImage1,
    };

    addToCart(product);
    toast.success(`${product.name} προστέθηκε με επιτυχία στο καλάθι!`);
  };

  const description =
    "Φυσικό ξηρό λάδι με φυτοστερόλες από λάδι Αβυσσηνίας, που βελτιώνουν σημαντικά την ελαστικότητα των μαλλιών και του δέρματος. Έχοντας διάφανη βελούδινη υφή και άμεση απορρόφηση, περιέχει σύμπλεγμα φυτικών μαλακτικών από Ηλίανθο, Αμύγδαλο, Τζοτζόμπα, Αργκάν και Πράσινο Τσάϊ σε συνδυασμό με αντιοξειδωτικά έλαια Μαύρου Σταφυλιού Ελληνικού Ελαιολάδου οργανικής καλλιέργειας και βιταμίνης Ε. Εμπλουτισμένο με φυτική σιλικόνη για μια μοναδική αίσθηση μεταξένιας απαλότητας στα μαλλιά και το σώμα που διαρκεί, περιέχει συστατικά φυτικής προέλευσης 98%.";
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="product-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Carousel
        autoplay
        swipeable={!isMobile}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        stopOnHover={true}
      >
        <div>
          <img src={productImage1} alt="Image 1" />
        </div>
        <div>
          <img src={productImage2} alt="Image 2" />
        </div>
        <div>
          <img src={productImage3} alt="Image 3" />
        </div>
        <div>
          <img src={productImage4} alt="Image 4" />
        </div>
        <div className="image5">
          <img src={productImage5} alt="Image 5" />
        </div>
      </Carousel>

      <div className="product-details">
        <h1>Natural Dry Oil</h1>
        <h3>Hair & Body</h3>
        <ProductDescription description={description} />
        <p className="product-price">Αξία: 47€</p>
        <Button
          onClick={handleAddToCart}
          className="add-to-cart-button"
          type="primary"
        >
          Προσθήκη στο Καλάθι
        </Button>
      </div>

      <div className="oils-introduction-card">
        <h2>Κατάλληλο για...</h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Μαλλιά" key="1">
            <p>
              Το CASTINE dry oil είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης
              απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα. Το έλαιο
              σφραγίζει την υγρασία και διατηρεί τα μαλλιά ενυδατωμένα. Μειώνει
              το χρόνο στεγνώματος και βοηθάει στο styling. Βοηθάει στην
              αποκατάσταση των βλαβών της τρίχας. Κάνει τα μαλλιά ευκολοχτένιστα
              και αποτρέπει το σπάσιμο της τρίχας με αποτέλεσμα τα μαλλιά να
              διατηρούν το μήκος τους. Ελέγχει το φρεζάρισμα και κάνει τα μαλλιά
              μαλακά, απαλά, δυνατά και ελαστικά.
            </p>
          </TabPane>
          <TabPane tab="Δέρμα" key="2">
            <p>
              Το CASTINE dry oil είναι ένα σύμπλεγμα φυσικών ελαίων άμεσης
              απορρόφησης που προσφέρει ακαταμάχητη λάμψη και άρωμα. Τα έλαια
              και τα λιπαρά που παράγει η επιδερμίδα συμβάλουν στην προστασία
              και την εξισορρόπηση του προστατευτικού φραγμού της αλλά συχνά,
              λόγω καιρικών συνθηκών, λάθος πρακτικών περιποίησης, το πέρασμα
              των ετών, η παραγωγή τους μειώνεται και τότε το δέρμα αρχίζει να
              αφυδατώνεται. Τα έλαια που περιέχει το προϊόν είναι ιδανικά για να
              εισχωρήσουν στην επιδερμίδα και να συγκρατήσουν στο εσωτερικό της
              την απαραίτητη υγρασία ώστε να παραμείνει ενυδατωμένη, ελαστική,
              λαμπερή και απαλή σαν μετάξι.
            </p>
          </TabPane>
        </Tabs>
      </div>

      <div className="image-container">
        <img src={productImage6} />
      </div>
      <HowToUseSection />
      <IngredientsTabs />
      <FAQCollapse />
    </div>
  );
};

const HowToUseSection = () => {
  // Κρατήστε το ενεργό Tab για το κύριο Tabs και για το εσωτερικό Tabs
  const [activeMainTab, setActiveMainTab] = useState("1");
  const [activeHairTab, setActiveHairTab] = useState("1");

  return (
    <div className="how-to-use-container">
      <div className="how-to-use-content">
        <h2>ΟΔΗΓΙΕΣ ΧΡΗΣΗΣ</h2>
        <Tabs defaultActiveKey="1" onChange={(key) => setActiveMainTab(key)}>
          <TabPane tab="Μαλλιά" key="1">
            <Tabs
              defaultActiveKey="1"
              onChange={(key) => setActiveHairTab(key)}
            >
              <h3 className="h3">Για Νωπά Μαλλιά</h3>
              <p>
                Απλώστε μερικές σταγόνες στις παλάμες σας και τρίψτε τα χέρια
                σας μέχρι να απλωθεί το προϊόν στις παλάμες και τα δάχτυλα σας.
                Στη συνέχεια, χρησιμοποιήστε τα δάχτυλα σας με μια κίνηση
                χτενίσματος για να κατανείμετε ομοιόμορφα το προϊόν από το
                μεσαίο μήκος έως τις άκρες. Σε νωπά μαλλιά βοηθάει στο
                ξεμπέρδεμα και στο styling.
              </p>
              <h3 className="h3">Για Στεγνά Μαλλιά</h3>
              <p>
                Σε στεγνά μαλλια βοηθάει στον έλεγχο του φριζαρίσματος και δίνει
                λάμψη. Ιδανικά κάθε φορά που κάνετε εφαρμογή είτε σε νωπά είτε
                σε στεγνά μαλλιά, αν το επιτρέπει το χτένισμα,προχωρήστε σε ένα
                πέρασμα με τη χτένα για ομοιόμορφη κατανομή του προϊόντος και
                δώστε λίγα λεπτά να απορροφηθεί. Το χτένισμα να γίνετε πάντα από
                κάτω προς τα πάνω και σε ελαφρώς νωπά ή στεγνά μαλλιά για να
                αποφευχθεί το σπάσιμο της τρίχας.
              </p>
              <h3 className="h3">Παραπάνω Θρέψη</h3>
              <p>
                Προσθέστε μερικές σταγόνες από το λάδι στη μάσκα μαλλιών σας
                όποτε τα μαλλιά χρειάζονται περισσότερη θρέψη.
              </p>
              <h3 className="h3">Παρατεταμένη θρέψη</h3>
              <p>
                Χωρίστε τα μαλλιά σας σε 2 τμήματα και προσθέστε ικανοποιητική
                ποσότητα λαδιού ώστε να καλύψει τα μαλλια και στις 2 πλευρές.
                Δημιουργήστε 2 πλεξούδες και αφήστε να δράσει για λίγες ώρες η
                όλο το βράδυ.Αν δεν έχει απορροφηθεί πλήρως προχωράτε στο
                λούσιμο των μαλλιών.
              </p>
            </Tabs>
          </TabPane>
          <TabPane tab="Δέρμα" key="2">
            <p>
              Εφαρμόστε μια ποσότητα στα χέρια και απλώστε σε νωπό ή στεγνό
              δέρμα. Για επιπλέον ενυδάτωση και θρέψη εφαρμοστέ την κρέμα σας
              και στη συνέχεια το λάδι για να σφραγίσει την υγρασία.
            </p>
          </TabPane>
        </Tabs>
        <div className="complete-routine">
          <h3>Καθημερινή Χρήση</h3>
          <p>
            Η καθημερινή ρουτίνα είναι σημαντική για τα μέγιστα αποτελέσματα.
          </p>
        </div>
      </div>
    </div>
  );
};

function FAQCollapse() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="faq-container-section">
      <div className="faq-container">
        <h2>ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ</h2>
        <p>Όλα όσα πρέπει να γνωρίζετε για το Castine Natural Dry Oil.</p>
        <Collapse accordion>
          <Panel header="Σε ποιον απευθύνεται αυτό το προϊόν;" key="1">
            <p>
              Αυτό το προϊόν είναι κατάλληλο για όλους άνω των 6 ετών.Unisex
              άρωμα.
            </p>
          </Panel>
          <Panel header="Είναι το προϊόν φυσικό;" key="3">
            <p>Το προϊόν ειναι 98% φυσικό </p>
          </Panel>
          <Panel
            header="Πόσες σταγόνες πρέπει να χρησιμοποιήσω για τον τύπο των μαλλιών μου;"
            key="2"
          >
            <p>
              Εξαρτάται από την ποιότητα,την πυκνότητα και το μήκος των μαλλιών.
              Για λεπτά μαλλιά 3-4 σταγόνες Για μεσαία μαλλιά 4-5 σταγόνες Για
              πυκνά μαλλιά 5-6 σταγόνες Πειραματιστείτε για να βρείτε την
              κατάλληλη ποσότητα για τον τύπο των μαλλιών σας.
            </p>
          </Panel>
          <Panel header="Το προϊόν δοκιμάζετε σε ζώα;" key="5">
            <p>
              Όχι!Το προϊόν δεν δοκιμάζετε σε ζώα. Το προϊόν παράγεται στην
              Ελλάδα,μια χώρα της Ερωπαϊκής Ένωσης που βάση νόμου απαγορεύει τις
              δοκιμές στα ζώα.
            </p>
          </Panel>
          <Panel
            header="Περιέχει το προϊόν συστατικά  ζωικής προέλευσης;"
            key="6"
          >
            <p>Όχι!Το προϊόν δεν περιέχει συστατικά ζωικής προέλευσης</p>
          </Panel>
        </Collapse>
        {/* {showMore && (
        <div style={{ marginTop: '1rem' }}>
          <Collapse accordion>
            
          </Collapse>
        </div>
        )}
        <button style={{ marginTop: '1rem' }} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less' : 'See More'}
        </button> */}
      </div>
    </div>
  );
}

const IngredientsTabs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="ingredients-section">
      <div className="ingredients-tabs-container">
        <Card bordered={false}>
          <div className="ingredients-header">
            <h2>ΑΝΑΚΑΛΥΨΤΕ ΤΑ ΣΥΣΤΑΤΙΚΑ ΜΑΣ</h2>
            <p></p>
          </div>
          <Tabs defaultActiveKey="1" type="card" size="large">
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Ελαιόλαδο
                </span>
              }
              key="1"
            >
              <p>
                Το Ελαιόλαδο είναι πλούσιο σε Σκουαλένιο, ένα φυσικό συστατικό
                που χαρίζει έξτρα απαλότητα, ενυδάτωση και λάμψη. Περιέχει
                αντιοξειδωτικά που αντιμετωπίζουν την ζημιά που προκαλούν οι
                ρύποι και η ακτίνες του ηλίου. Είναι από τα καλύτερα προϊόντα
                που μας βοηθά να διατηρούμε τα μαλλιά και το δέρμα μας υγιή.
                Πλούσιο σε Βιταμίνες Κ και Ε, είναι ελιξίριο για τα μαλλιά καθώς
                προσφέρει θρέψη, ενυδατώνει σε βάθος ενώ επανορθώνει τις
                σπασμένες και κατεστραμμένες άκρες.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Λάδι Αργκάν
                </span>
              }
              key="2"
            >
              <p>
                Το λάδι Αργκάν είναι γνωστό και ώς <em>Δέντρο της Ζώης</em> για
                τα πολλαπλά οφέλη του.Πλούσιο σε Ω-6 (Λινελαϊκό Οξύ) και Ω-9
                (Ελαϊκό Οξύ) ακόρεστα Λιπαρά Οξέα, περιέχει επίσης φυσικές
                Τοκοφερόλες (Βιταμίνη Ε),Φαινόλες,Φαινολικά οξέα και
                Καροτενοειδή,που καθυστερούν τα ορατά σημάδια της γήρανσης και
                προστατεύουν από τις ελεύθερες ρίζες.Το έλαιο Αργκάν ενισχύει
                την αναγέννηση και την ελαστικότητα του δέρματος, καθώς και την
                ανανέωση των κυττάρων.Επιπλέον προσφέρει θρέψη και βαθιά
                ενυδάτωση επαναφέροντας τα λιπίδια του δέρματος διατηρώντας την
                υγρασία του.Το έλαιο Αργκάν είναι εξαιρετικό μαλακτικό μαλλιών
                και ειδικά για τα ξηρά και ταλαιπωρημένα μαλλιά, μειώνει το
                φρεζάρισμα.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Έλαιο Μαύρου Σταφυλιού
                </span>
              }
              key="3"
            >
              <p>
                Ειναι εξαιρετικά πλούσιο σε Ω-6 και σε Βιταμίνη Ε.Έχει
                αντιφλεγμονώδη,αντισηπτικές,μαλακτικές και αναπλαστικές
                ιδιότητες. Χαρίζει στο δέρμα αίσθηση μεταξένιας απαλότητας και
                επιβραδύνει τη διαδικασία γήρανσης. Τα Φλαβονοειδή τα οποία
                είναι τα βασικά συστατικά των σταφυλιών σε συνδυασμό με την
                Βιταμίνη Ε εμποδίζουν την βλαβερή επίδραση των ελευθέρων ριζών.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Πράσινο Τσάι
                </span>
              }
              key="5"
            >
              <p>
                Το Πράσινο Τσάι είναι ένα από τα ισχυρότερα φυσικά
                αντιοξειδωτικά.To Πράσινο Τσάι, λόγω της ισχυρά αντιοξειδωτικής
                και αντιφλεγμονώδους δράσης του, χρησιμοποιείται κατά κύριο λόγο
                για την προστασία των μαλλιών και του δέρματος από τις βλαβερές
                επιπτώσεις της ρύπανσης και της έκθεσης στον ήλιο.Ένα ακόμη
                στοιχείο που υπάρχει στο Πράσινο Τσάι είναι η Καφεΐνη που μπορεί
                να διεγείρει τη ροή του αίματος για καλύτερη κυκλοφορία.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Jojoba oil
                </span>
              }
              key="4"
            >
              <p>
                Το Έλαιο Jojoba έχει ένα μοναδικό χαρακτηριστικό που το κάνει να
                ξεχωρίζει από τα υπόλοιπα έλαια,η οργανική του σύνθεση
                προσομοιάζει στη σύνθεση του σμήγματος της ανθρώπινης
                επιδερμίδας. Στην πραγματικότητα, "μιμείται" το φυσικό κολλαγόνο
                του δέρματος. Έτσι, είναι ιδιαίτερα ενυδατικό, ενώ ταυτόχρονα
                θρέφει, μαλακώνει και προστατεύει τα μαλλιά και την επιδερμίδα.
                Είναι πλούσιο σε Βιταμίνες (Α, Β1, Β2, B6, και ιδιαίτερα Ε).{" "}
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Λάδι Αβησσυνίας
                </span>
              }
              key="10"
            >
              <p>
                Ειμαι πλούσιο σε ακόρεστα Λιπαρά Οξέα μακράς αλυσίδας ω-6 και
                ω-9,Βιταμίνες A,B,C,E, Πρωτεΐνες αλλά και Μέταλλα. Διαπερνά τα
                εξωτερικά στρώματα της επιδερμίδας,θρέφει σε βάθος και
                ενυδατώνει παρέχοντας ένα απαλό στρώμα προστασίας κατα της
                αφυδάτωσης. Το έλαιο Αβησσυνίας ενισχύει την ελαστικότητα του
                δέρματος. Έχει σπουδαίες δυνατότητες conditioning για τα μαλλιά
                καθώς προσφέρει ενυδάτωση,λάμψη,απαλότητα και ενδυνάμωση των
                ινών της τρίχας ,προστατεύει από το σπάσιμο.{" "}
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Αμυγδαλέλαιο
                </span>
              }
              key="6"
            >
              <p>
                Το Αμυγδαλέλαιο είναι πλούσιο σε Λιπαρά Οξέα, Βιταμίνες
                (Α,Κ,Ε,C,Β),Ιχνοστοιχεία και Μέταλλα όπως
                Ασβέστιο,Μαγνήσιο,Φώσφορο,Ψευδάργυρο και Σίδηρο. Λόγω της
                θρεπτικής του σύνθεσης είναι γνωστό για τα πολλαπλά οφέλη του
                στο δέρμα και τα μαλλιά. Προσφέρει μαλακτικές
                ιδιότητες,αποκαθιστά τον υδρολιπιδικό φραγμό,αποτρέπει την
                απώλεια υγρασίας και ενισχύει την ελαστικότητα και την
                σφριγηλότητα της επιδερμίδας. Ισχυρός σύμμαχος για την υγεία των
                μαλλιών βοηθάει τις ταλαιπωρημένες άκρες.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Ηλιέλαιο
                </span>
              }
              key="9"
            >
              <p>
                Ειναι πλούσιο σε Λινολεϊκό Οξύ και Λεκιθίνη,καθώς επίσης και σε
                Βιταμίνες Ε,Α,Β,D, Πρωτεΐνες και Ιχνοστοιχεία,ουσίες με μεγάλη
                θεραπευτική και κοσμητολογική αξία. Οι μεγάλες ποσότητες
                αντιοξειδωτικών που περιέχει συμβάλουν στον περιορισμό των
                ζημιών που προκαλούν οι ελεύθερες ρίζες, προστατεύονταν το δέρμα
                από την φυσική γήρανση αλλά και από τις βλάβες την ηλιακής
                ακτινοβολίας. Ενώ βοηθούν και στην προστασία του κολλαγόνου και
                της ελαστινης στο δέρμα,διατηρώντας τα κύτταρα υγιή και ζωντανά.
                Λειτουργεί ως παράγοντας διατήρησης της υγρασίας μέσα στα
                δερματικά κύτταρα,βοηθώντας το δέρμα να παραμένει ενυδατωμένο
                για μεγαλύτερο χρονικό διάστημα, ως εκ τούτου πιο απαλό και
                ελαστικό. Ειναι ιδανικό για την φροντίδα των μαλλιών.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Βιταμίνη Ε
                </span>
              }
              key="7"
            >
              <p>
                Είναι γνωστή για την πλούσια αντιοξειδωτική της δράση, η οποία
                βοηθά στην εξουδετέρωση των ελευθέρων ριζών πού προκαλούν βλάβη
                στα μαλλιά και το δέρμα. Έχει ισχυρές μαλακτικές ιδιότητες,αυτό
                σημαίνει ότι σφραγίζει την υγρασία στα μαλλιά και στο δέρμα
                διατηρώντας τα ενυδατωμένα. Με συχνή χρήση αντιμετωπίζει την
                ξηρότητα καθιστώντας τα μαλλιά και το δέρμα μαλακά και λαμπερά.
              </p>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusCircleOutlined />
                  Φυτική Σιλικόνη
                </span>
              }
              key="8"
            >
              <p>
                Η Φυτική Σιλικόνη είναι μια μαλακτική ουσία που προέρχεται από
                τα Λιπαρά Οξέα της καρύδας. Δρα ως ισχυρό λιπαντικό στην
                επιφάνεια του δέρματος , σχηματίζοντας πάνω μια λεπτή μη λιπαρή
                μεμβράνη,χαρίζοντας στην επιδερμίδα απαλή,λεία και σφριγηλή όψη.
                Εφαρμόζεται στα μαλλιά και το δέρμα που οι μαλακτικές ιδιότητες
                είναι πολυ σημαντικές.
              </p>
            </TabPane>
          </Tabs>
          <Button
            type="primary"
            onClick={openModal}
            className="see-all-ingredients-button"
          >
            Δείτε όλα τα συστατικά
          </Button>
        </Card>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="All Ingredients Modal"
        className="ingredients-modal"
        overlayClassName="ingredients-modal-overlay"
      >
        <h2>Πλήρης Κατάλογος Συστατικών</h2>
        <p>
          DICAPRYLYL CARBONATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, SIMMONDSIA
          CHINENSIS (JOJOBA) SEED OIL, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND)
          OIL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, CETEARYL ISONONANOATE,
          DICAPRYLYL ETHER, COCO-CAPRYLATE/CAPRATE, VITIS VINIFERA (BLACK GRAPE)
          SEED OIL, CAMELLIA SINENSIS (GREEN TEA) SEED OIL, CRAMBE ABYSSINICA
          SEED OIL PHYTOSTEROL ESTERS, ARGANIA SPINOSA (ARGAN) KERNEL OIL, OLEA
          EUROPAEA (OLIVE) FRUIT OIL*,*ORGANIC CULTIVATED, PARFUM (FRAGRANCE),
          HYDROGENATED ETHYLHEXYL OLIVATE, GLYCERYL CAPRYLATE, TOCOPHERYL
          ACETATE, HYDROGENATED OLIVE OIL UNSAPONIFIABLES, HEXYL CINNAMAL,
          LINALOOL, BENZYL ALCOHOL, COUMARIN.
        </p>

        <Button onClick={closeModal} className="close-modal-button">
          Κλείσιμο
        </Button>
      </Modal>
    </div>
  );
};

export default Product;
