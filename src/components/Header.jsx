// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="top-header">
      <h2>SPENCER HENDERSON</h2>
      <nav>
        <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
