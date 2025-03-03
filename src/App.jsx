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
        <nav>
          <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
            Resume
          </a>
        </nav>
      </header>

    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={profilepic} alt="Profile" className="profile-img" />
        <main>
          <h2>Spencer Henderson</h2>
          <p>
            BS in Computer Science Minor in Mathematics
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
            I am also working on getting a minor in Mathematics.  I participate in the Mizzou Computing Association, intermural sports,
            and many game jams and hackathons throughout the year. 
            I am an undergraduate research assistant with the CERI Center, and I am working on a project with the
            Information Experience Laboratory. In this project, called USucceed, I develop a VR experience for neurodivergent 
            individuals using Unity and C#. Outside of my research and studies, I like to develop games and apps and create websites.
          </p>
        </header>
        <main>
          <h1>Research</h1>
          <h2>USucceed</h2>
          <p>My work on the USucceed project involves creating an immersive world in Unity that can be navigated in VR, developing engaging
            minigames and curriculum, and integrating an AI pedagogical agent to enhance the experience. I work alongside neurodivergent adults
            to create a supportive learning environment, ensuring users can engage effectively and gain valuable skills in cybersecurity. 
            Some of the main aspects of the projectthat I have played a major role in creating are the minigames in each unit, the navigation and
            menu system, and shaping the overall game loop to create a cohesive and interactive experience.
          </p>
        </main>
      </div>
    </div>
    </div>
  );
}

export default App;