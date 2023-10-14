import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    handleCloseMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#nav-links") && !event.target.closest("#navbar-toggle")) {
        handleCloseMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`header-2 ${isMenuOpen ? "menu-open" : ""}`}>
        <nav className="bg-primary">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <button
                className={`border border-solid border-gray-600 px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden ${
                  isMenuOpen ? "active" : ""
                }`}
                id="navbar-toggle"
                onClick={handleMenuToggle}
              >
                <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
              <div
                className={`md:flex space-x-2 items-center ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
                id="nav-links"
              >
                <NavLink
                  to="/"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/how-it-works"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  How it works?
                </NavLink>
                <NavLink
                  to="/blogs"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Blogs/Insights
                </NavLink>
                <NavLink
                  to="/faq"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  FAQs
                </NavLink>
                <NavLink
                  to="/contact-us"
                  activeClassName="active-link"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </NavLink>
              </div>
              {isMenuOpen && (
                <button
                  className="border cross-btn border-solid border-gray-600 px-3 py-1 rounded text-white md:hidden"
                  onClick={handleMenuToggle}
                >
                  <i className="fa fa-times-circle"></i>
                </button>
              )}
            </div>
            <div
              className="hidden md:flex flex-col justify-end md:flex-row md:ml-auto md:mt-0 "
              id="navbar-collapse"
            >
              <img src={logo} alt="logo" className="logo" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
