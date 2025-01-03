import 'react';
import Header from './components/Header';
import Welcome from "./components/Welcome.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import ApproachSection from "./components/ApproachSection.jsx";
import Why from "./components/Why.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Join from "./components/Join.jsx";
import Dreamers from "./components/Dreamers.jsx";
import PartnersShowcase from "./components/PartnersShowcase.jsx";
import CareerSlider from "./components/CareerSlider.jsx";
import NewsletterSubscription from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Welcome/>
            <WhatWeDo/>
            <ApproachSection/>
            <Why/>
            <Portfolio/>
            <Join/>
            <PartnersShowcase/>
            <Dreamers/>
            <CareerSlider/>
            <NewsletterSubscription/>
            <Footer/>
        </div>
    );
}

export default App;