import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={reactLogo} alt="Profile" className="profile-img" />
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="content">
        <header className="App-header">
          <h1>About</h1>
          <p>My name is Spencer Henderson and I am a Computer Science student at the University of Missouri.
            I am an undergraduate research assistant with the CERI Center, and I am working on a project with the
            Information Experience Laboratory. In this project, I develop a VR experience for neurodivergent 
            individuals using Unity and C#. Outside of my research, I like to develop games and create websites and apps.
          </p>
        </header>
        <main>
          <section id="about">
            <h2>About</h2>
            <p>This section is where you can describe your website or project.</p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <p>Here, you can showcase your work.</p>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;