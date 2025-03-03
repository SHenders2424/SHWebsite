// src/components/Sidebar.js
import React from "react";
import profilepic from "../assets/profilepic.png"; // Adjust the path if needed

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={profilepic} alt="Profile" className="profile-img" />
      <main>
        <h2>Spencer Henderson</h2>
        <p>BS in Computer Science | Minor in Mathematics</p>
        <p>University of Missouri</p>
      </main>
      <nav>
        <ul>
          <li><a href="mailto:s.henderson2424@gmail.com">Email</a></li>
          <li><a href="https://github.com/SHenders2424" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/spencer-henderson-7b6940324/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
