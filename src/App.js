import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "./components/build-in-components/Navbars/IndexNavbar.js";
import IndexHeader from "./components/build-in-components/Headers/IndexHeader.js";
import DarkFooter from "./components/build-in-components/Footers/DarkFooter.js";

// sections for this page
import AboutMeSection from "./components/index-sections/AboutMeSection.js";
import ContactMeSection from "./components/index-sections/ContactMeSection.js";
import SkillsSection from "./components/index-sections/SkillsSection";
import PortfolioSection from "./components/index-sections/PortfolioSection";

function App() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <IndexHeader />
          <div className="main">
            <AboutMeSection />
            <SkillsSection/>
            <PortfolioSection/>
            <ContactMeSection />
          </div>
          <DarkFooter />
        </div>
      </>
  );
}

export default App;
