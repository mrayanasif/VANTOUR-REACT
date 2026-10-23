import React, { useState, useEffect } from "react";
import "./Navbar.css";
import searchIcon from "../../assets/search-interface-symbol.png";
import shoppingBag from "../../assets/shopping-bag.png";
import loginIcon from "../../assets/login.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const mobileMenu = document.getElementById("mobileMenu");
      const toggleBtn = document.getElementById("toggleBtn");
      if (
        mobileMenu &&
        toggleBtn &&
        !mobileMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
       <div className="brand-name">
  <span className="brand-black">VAN</span>
  <span className="brand-red">TOUR</span>
</div>
        </div>

        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Account
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-container">
            <div className="search-box">
              <input type="text" placeholder="Search products..." />
              <button type="button">
                {" "}
                <img src={searchIcon} alt="Search" className="search-icon" />
              </button>
            </div>
          </div>
          <button className="cart-btn">
            <img src={shoppingBag} alt="Cart" className="cart-icon" />
            <span className="cart-badge">3</span>
          </button>
          <button className="purchase-btn">
            <img src={loginIcon} alt="Login" className="login-icon" />
          </button>
          <button className="toggle-btn" id="toggleBtn" onClick={toggleMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
        id="mobileMenu"
      >
        <div className="mobile-menu-content">
          <div className="mobile-search-box">
            <input type="text" placeholder="Search products..." />
            <button type="button">🔍</button>
          </div>
          <div className="mobile-menu-actions">
            <button className="purchase-btn" style={{ width: "100%" }}>
              <span>Login</span>
            </button>
            <a href="#" className="mobile-menu-item">
              My Account
            </a>
            <a href="#" className="mobile-menu-item">
              Wishlist
            </a>
            <a href="#" className="mobile-menu-item">
              Cart
            </a>
            <a href="#" className="mobile-menu-item">
              Settings
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
