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
          <p>My name is Spencer Henderson and I am a Computer Science student at the University of Missouri.
            I am also working on getting a minor in Mathematics.  I participate in the Mizzou Computing Association, intramural sports,
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
            Some of the main aspects of the project that I have played a major role in creating are the minigames in each unit, the navigation and
            menu system, and shaping the overall game loop to create a cohesive and interactive experience.
          </p>
          <h1>Projects</h1>
          <h2>Emotions.io</h2>
          <img src={emotionsGame} alt="Screenshot of Emotions.io game" className="project-img" />
          <p>During the 2025 Adroit Game Jam, my group created a fully functioning multiplayer io game that runs on a server with minimal bugs in only
            48 hours. The game was working by the end of the time limit, and the judges and other participants were able to join and play the game during our
            presentation. I did the front end Unity development for the project, creating all of the UI, player controls, game mechanics, and the detailed
            leveling, stats, and ability system for the game. I gained valuable skills about working with a team to create a product, and working with a very restrictive
            time constraint. We plan on developing this game into a fully polished game with its own domain and robust server in the future, and add much more
            content.
          </p>
          <h2>College Basketball Stat Predictor</h2>
          <p>I am working on a project with a statistics student at the University of Missouri that is a website that predicts the points, assists, and 
            rebounds of any player in college basketball when they play any team. The model we created takes into consideration the players average stats,
            the defensive effiency of the team their playing against, and whether the game is played at home, neutral or away. For this project I produced a 
            website that allows the user to input the player name, team their playing against, and location of the game, and it will determine a predicted
            outcome of that player's performance.
          </p>
        </main>
      </div>
    </div>
    </div>
  );
}

export default App;