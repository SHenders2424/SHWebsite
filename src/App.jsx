import { useState } from 'react'
import profilepic from './assets/profilepic.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="top-header">
        <h2>SPENCER HENDERSON</h2>
      </header>

    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={profilepic} alt="Profile" className="profile-img" />
        <main>
          <h2>Spencer Henderson</h2>
          <p>
            BS in Computer Science and Minor in Mathematics
          </p>
          <p>
            University of Missouri
          </p>
        </main>
        <nav>
          <ul>
            <li><a href="mailto:s.henderson2424@gmail.com">Email</a></li>
            <li><a href="https://github.com/SHenders2424" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/spencer-henderson-7b6940324/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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
            individuals using Unity and C#. Outside of my research and studies, I like to develop games and apps and create websites.
          </p>
        </header>
        <main>
          
        </main>
      </div>
    </div>
    </div>
  );
}

export default App;