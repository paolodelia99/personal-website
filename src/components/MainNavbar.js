import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
              className="custom-navbar"
            >
              Paolo D'Elia
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  className="custom-navbar"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("about-me-section")
                      .scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  <p>About</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    href="#pablo"
                    className="custom-navbar"
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("portfolio-section")
                          .scrollIntoView({behavior: 'smooth'});
                    }}
                >
                  <p>Projects</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    href="#pablo"
                    className="custom-navbar"
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("contact-me-section")
                          .scrollIntoView({behavior: 'smooth'});
                    }}
                >
                  <p>Contact</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://paolodelia99.github.io/blog/" className="custom-navbar">
                  <p>Blog</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
