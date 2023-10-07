import React from "react";
import "./componants/Header/Header";
import { Header, Navbar } from "./componants";
import Secondlayout from "./componants/Secondlayout/Secondlayout";
import Corosal from "./componants/Corosal/Corosal";
import InvestmentCalculator from "./componants/investmentCalculator/InvestmentCalculator";
import Bargraphs from "./componants/bargraps/Bargraphs";
import Testimonials from "./componants/testimonials/Testimonials";
import Frequent from "./componants/Frequentquestions/Frequent";
import Footer from "./componants/footer/Footer";
import Douhnut from "./componants/investmentCalculator/Douhnut";
import Corosal2 from "./componants/Corosal/Corosal2";
import Testimonials2 from "./componants/testimonials/Testimonials2";
const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Secondlayout />
    <Corosal />
    <Bargraphs />
    <InvestmentCalculator />
    <Testimonials />
    <Frequent />
    <Footer />
  </div>
);

export default App;
