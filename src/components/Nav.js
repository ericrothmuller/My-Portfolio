import React from "react";
import "../Style.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="main-nav-menu">
      <section className="main-nav-items">
        <h1 className="headerTitle">Eric Rothmuller</h1>
        <ul>
          <li>
            <a
              href="#aboutme"
              onClick={() => handlePageChange("About Me")}
              className={
                currentPage === "About Me" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
