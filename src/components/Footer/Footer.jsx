import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks for your interest in VANTOUR!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="footer-logo-white">VAN</span>
            <span className="footer-logo-red">TOUR</span>
            <span className="footer-logo-dot">.</span>
          </a>

          <p className="footer-desc">
            Elevate your everyday style with premium watches,
            signature fragrances, and timeless footwear.
            Discover the details that define you.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              f
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              X
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              ig
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Explore</h3>

          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop All</a></li>
            <li><a href="/shop?category=watches">Watches</a></li>
            <li><a href="/shop?category=perfumes">Perfumes</a></li>
            <li><a href="/shop?category=shoes">Shoes</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-column">
          <h3 className="footer-title">Customer Care</h3>

          <ul className="footer-links">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/tracking">Track Your Order</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column footer-newsletter">
          <h3 className="footer-title">Stay in the Loop</h3>

          <p className="newsletter-text">
            Get exclusive offers, new arrivals, and a first look
            at the latest VANTOUR collections.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />

            <button type="submit" className="subscribe-btn">
              Join <span>→</span>
            </button>
          </form>

          {message && (
            <p className="newsletter-message" role="status">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} VANTOUR. All rights reserved.
          </p>

          <p className="footer-tagline">
            DEFINE YOUR PRESENCE.
          </p>

          <div className="payment-methods">
            <span>VISA</span>
            <span>MC</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
