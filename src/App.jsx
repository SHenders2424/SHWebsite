import { useState } from 'react'
import profilepic from './assets/profilepic.png'
import emotionsGame from './assets/emotions-game.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="top-header">
        <h2>Spencer Henderson</h2>
        <nav>
        <a href="cv.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
  Resume
</a>
        </nav>
      </header>

    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={profilepic} alt="Profile" className="profile-img" />
        <main className="sidebar-info">
          <p>
            BS in Computer Science 
          </p>
          <p>
            Minor in Mathematics
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
          <p>My name is Spencer Henderson and I am a Computer Science student at the University of Missouri, pursuing a minor in Mathematics. 
            I participate in the Mizzou Computing Association, intramural sports, and many game jams and hackathons throughout the year. 
            Currently, I serve as an undergraduate research assistant with the CERI Center and the Information Experience Laboratory. In these 
            roles, I contribute to cutting-edge projects, including the development of immersive VR experiences for neurodivergent individuals. 
            Beyond academics and research, I am passionate about creating games, apps, and websites, constantly seeking opportunities to apply my 
            skills in real-world scenarios.
          </p>
        </header>
        <main>
          <h1>Research</h1>
          <h2>USucceed</h2>
          <p>As part of the USucceed project, I am developing a Virtual Reality (VR) experience designed to support neurodivergent individuals in learning 
            cybersecurity concepts. My contributions include designing immersive 3D environments in Unity, developing interactive minigames, and integrating 
            an AI-driven pedagogical agent to enhance engagement. I work closely with neurodivergent adults to ensure the experience is accessible, engaging, 
            and educational. Key aspects I have led include the design and development of the minigames within each learning module, creating intuitive 
            navigation and menu systems, and shaping the overall game loop to ensure a cohesive and impactful user experience.
          </p>
          <h1>Projects</h1>
          <h2>Emotions.io</h2>
          <img src={emotionsGame} alt="Screenshot of Emotions.io game" className="project-img" />
          <p>During the 2025 Adroit Game Jam, my team developed a fully functional multiplayer .io game in just 48 hours. The game was live and playable 
             by the end of the event, and both judges and participants were able to join and engage with it during our presentation. I was responsible for all 
             front-end development in Unity, including the UI, player controls, core game mechanics, and the detailed leveling, stats, and abilities system. 
             This project taught me how to work collaboratively under tight time constraints and solidified my ability to deliver a complete product on a 
             deadline. We plan to continue development, with the goal of launching a polished version on its own domain with a robust server and expanded content.
          </p>
          <h2>Maple and Marsh Website</h2>
          <p>I was contracted by a local coffee company, Maple and Marsh, to design and develop their official website. The site showcases their upcoming 
            events, menu, and contact information. Built using JavaScript and React, the site features a modern and visually appealing design and is fully 
            responsive across all devices. The website is live at mapleandmarsh.com. 
          </p>
          <h2>College Basketball Stat Predictor</h2>
          <p>I am currently collaborating with a statistics student at the University of Missouri to develop a web-based predictive tool for NCAA basketball 
            performance. The application forecasts player statistics—including points, assists, and rebounds—based on various factors such as the player's 
            average stats, the defensive efficiency of the opposing team, and game location (home, neutral, or away). I designed and developed the user 
            interface for the website, allowing users to input player and matchup data and receive a predictive performance analysis.
          </p>
          <h2>Call of Duty Camo Tracker</h2>
          <p>I designed and developed an iOS application that allows users to track their progress in Call of Duty: Black Ops 6. The app features a clean, 
            user-friendly interface and efficient data models to display progress across various camo challenges. I plan to continue updating the app to 
            support future titles in the Call of Duty franchise, making it a versatile tool for long-term users of the series. I want to also add more features
            to allow my app to stand out from other competitors, like guides on how to complete the challenges and the ability to share progress with friends.
          </p>
        </main>
      </div>
    </div>
    </div>
  );
}

export default App;