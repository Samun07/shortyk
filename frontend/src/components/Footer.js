import React from "react";
import "../styles/footer.css";

// Footer component
export const Footer = () => {
  return (
    <footer>
      {/* Footer logo */}
      <div className="footer-logo">
        <a href="../pages/Index.jsx">
          <h1>Shortyk</h1>
          <i class="ri-links-line"></i>
        </a>
      </div>

      {/* Container for footer sections */}
      <section className="container-footer">
        {/* Footer sections containing links */}
        <section className="section-footer">
          <span>Info</span>
          <ul>
            {/* Info links */}
            <a href="#">
              <li>Formats</li>
            </a>
            <a href="#">
              <li>Compression</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Status</li>
            </a>
            <a href="#">
              <li>Policy</li>
            </a>
          </ul>
        </section>
        {/* More footer sections with links */}
        <section className="section-footer">
          <span>Getting Started</span>
          <ul>
            <a href="#">
              <li>Introduction</li>
            </a>
            <a href="#">
              <li>Themes</li>
            </a>
            <a href="#">
              <li>Documentation</li>
            </a>
            <a href="#">
              <li>Usages</li>
            </a>
            <a href="#">
              <li>Elements</li>
            </a>
            <a href="#">
              <li>Global</li>
            </a>
          </ul>
        </section>
        <section className="section-footer">
          <span>Resources</span>
          <ul>
            <a href="#">
              <li>API</li>
            </a>
            <a href="#">
              <li>Form Validation</li>
            </a>
            <a href="#">
              <li>Accessibility</li>
            </a>
            <a href="#">
              <li>Marketplace</li>
            </a>
            <a href="#">
              <li>Visibility</li>
            </a>
            <a href="#">
              <li>Community</li>
            </a>
          </ul>
        </section>
        <section className="section-footer">
          <span>Newsletter</span>
          <p>
            Suscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>

          <form className="input-suscribe-footer">
            <input
              type="email"
              placeholder="Your email"
              autoComplete="off"
              required
            ></input>
            <button type="submit">SUSCRIBE</button>
          </form>

          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/samuel-sanchez-5174a51b4/"
              target="_blank"
            >
              <i className="ri-linkedin-fill"></i>
            </a>

            <a href="https://github.com/Samun07" target="_blank">
              <i className="ri-github-fill"></i>
            </a>

            <a href="tel:+573160973364">
              <i className="ri-phone-fill"></i>
            </a>

            <a href="mailto:samuelsanchez.szr@gmail.com">
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
};
