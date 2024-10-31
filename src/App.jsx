// src/App.js

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Products from './components/Products/Products';


//import Testimonials from './components/Testimonials/Testimonials';
//import Testimonials from './components/Testimonials/Testimonials';
//import Gallery from './components/Gallery/Gallery';
//import FAQ from './components/FAQ/FAQ';
//import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import Objetivos from './components/Objetivos/Objetivos';
import Location from './components/Location/Location';
import Pagamentos from './components/Pagamentos/Pagamentos';
import Motivos from './components/Motivos/Motivos';
import Faq from './components/FAQ/Faq';

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <Products />
            <Objetivos />
            <Location />
            <Pagamentos />
            <Motivos />
            <Faq />
                        
            {/*<Testimonials />
            <Gallery />
            <FAQ />
            <CallToAction />*/}
            <Footer />
        </>
    );
}

export default App;