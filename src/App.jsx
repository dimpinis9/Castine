import React from 'react';
import  {Routes} from 'react-router-dom';
import {Route}  from 'react-router-dom';
import  {Header}  from './components/Header';
import {MainContent}  from './components/MainContent';
import  {Footer}  from './components/Footer';

import { About } from './components/About';
import { ContactForm }  from './components/ContactForm';
import './App.css';

function App() {
return (
<div className="App">
<Header />

<Routes>

<Route path="/about" element={<About />} />
<Route path="/contact" element={<ContactForm />} />
</Routes>
<MainContent />
<Footer />
</div>
);
}

export default App;