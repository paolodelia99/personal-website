import React from "react";

// core components
import MainNavbar from "./components/MainNavbar.js";
import MainHeader from "./components/MainHeader.js";
import DarkFooter from "./components/DarkFooter.js";

// sections for this page
import AboutMeSection from "./components/main-sections/AboutMeSection.js";
import ContactMeSection from "./components/main-sections/ContactMeSection.js";
import PortfolioSection from "./components/main-sections/PortfolioSection";

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
        <MainNavbar />
        <div className="wrapper">
          <MainHeader />
          <div className="main">
            <AboutMeSection />
            <PortfolioSection/>
            <ContactMeSection />
          </div>
          <DarkFooter />
        </div>
      </>
  );
}

export default App;
