import React from "react";

import TopNavbar from "./navs/TopNavbar";
import MoreInfo from "./ctas/MoreInfo";
import FirstSlideShowSection from "./blocks/FirstSlideShowSection";
import FirstCardSection from "./blocks/FirstCardSection";
import Testimonials from "./blocks/Testimonials";
import SecondCardSection from "./blocks/SecondCardSection";
import CTAContact from "./ctas/Contact";
import CompleteSoftware from "./blocks/CompleteSoftware";
import StaffQuality from "./blocks/StaffQuality";
import ContactSection from "./blocks/ContactSection";
import Footer from "./blocks/Footer";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="container-fluid h100">
        <TopNavbar />
        <MoreInfo />
        <FirstSlideShowSection />
        <FirstCardSection />
        <Testimonials />
        <SecondCardSection />
        <CTAContact />
        <CompleteSoftware />
        <StaffQuality />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default App;
