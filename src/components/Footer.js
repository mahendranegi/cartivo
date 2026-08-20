import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        {/* About */}
        <div className="footerColumn">
          <h3>ABOUT</h3>

          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">Our Stores</a>
        </div>

        {/* Help */}
        <div className="footerColumn">
          <h3>HELP</h3>

          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation & Returns</a>
          <a href="#">FAQ</a>
        </div>

        {/* Customer Policy */}
        <div className="footerColumn">
          <h3>CUSTOMER POLICY</h3>

          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
          <a href="#">Sitemap</a>
        </div>

        {/* Social */}
        <div className="footerColumn">
          <h3>FOLLOW US</h3>

          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>

        {/* Contact */}
        <div className="footerColumn contactColumn">
          <h3>CONTACT</h3>

          <p>123 Market Street</p>
          <p>New Delhi, India</p>
          <p>Email: support@example.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footerBottom">

        <div className="footerLogo">
          <h2>PrimeStore</h2>
        </div>

        <p>
          © 2026 PrimeStore. All rights reserved.
        </p>

        <div className="paymentMethods">
          <span>VISA</span>
          <span>UPI</span>
          <span>COD</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;