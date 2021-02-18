/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function MainHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
    className="page-header-image"
    style={{
      backgroundImage: "url(" + require("../assets/img/code_background.jpeg") + ")"
    }}
    ref={pageHeader}
    />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Hello World!</h1>
            <h3 className="name-text">I'm Paolo D'Elia</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MainHeader;
