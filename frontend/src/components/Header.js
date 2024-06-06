import React from "react";
import "../styles/header.css";

// Header component
export const Header = () => {
  // Function to toggle the mobile menu
  function mobileMenu() {
    // Get the iconMenu element and displayMenu element
    const iconMenu = document.getElementById("iconMenu");
    const displayMenu = document.querySelector(".header-right");

    // If the menu is closed, open it
    if (iconMenu.classList.contains("ri-menu-line")) {
      iconMenu.classList.remove("ri-menu-line");
      iconMenu.classList.add("ri-close-line");
      displayMenu.style.height = "100%";
    } 
    // If the menu is open, close it
    else if (iconMenu.classList.contains("ri-close-line")) {
      iconMenu.classList.remove("ri-close-line");
      iconMenu.classList.add("ri-menu-line");
      displayMenu.style.height = "0";
    }
  }

  return (
    <header>
      <section className="header-container">
        <section className="header-left">
          <div className="header-logo">
            <a href="../pages/Index.jsx">
              <h2>Shortyk</h2>
              <i class="ri-links-line"></i>
            </a>
          </div>
        </section>

        <nav>
          <section className="header-right">
            {/* Navigation links */}
            <div className="header-text">
              <a href="../pages/Index.jsx">
                <span id="header-text-active">Home</span>
              </a>
              <a href="#">
                <span>Contact Us</span>
              </a>
              <a href="#">
                <span>About Us</span>
              </a>
            </div>

            <span className="line-header-mobile"></span>

            {/* Login and Sign Up links */}
            <div className="header-log">
              <a href="#">
                <span>Login</span>
              </a>
              <button>
                <i class="ri-login-circle-line"></i>Sign Up
              </button>
            </div>
          </section>
        </nav>

        {/* Mobile menu button */}
        <div onClick={mobileMenu} className="header-mobile-hamburguer-menu">
          <i id="iconMenu" class="ri-menu-line transition-icon-menu"></i>
        </div>
      </section>
    </header>
  );
};
