import profilepic from './assets/profilepic.png'
import emotionsGame from './assets/emotions-game.png'
import './App.css'

function App() {
  return (
    <div className="page-container">

      <header className="top-header">
        <div className="header-name">
          <span className="header-bracket">&lt;</span>
          Spencer Henderson
          <span className="header-bracket">&nbsp;/&gt;</span>
        </div>
        <a href="cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          Resume
        </a>
      </header>

      <div className="layout">

        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-img-wrapper">
              <img src={profilepic} alt="Profile" className="profile-img" />
            </div>
            <div className="profile-name">Spencer Henderson</div>
            <div className="profile-subtitle">CS Student & Developer</div>
          </div>

          <div className="sidebar-section">
            <span className="sidebar-label">Education</span>
            <div className="sidebar-info-list">
              <div className="info-item info-degree">BS Computer Science</div>
              <div className="info-item info-minor">Minor in Mathematics</div>
              <div className="info-item info-school">University of Missouri</div>
            </div>
          </div>

          <div className="sidebar-section">
            <span className="sidebar-label">Connect</span>
            <nav className="social-nav">
              <a href="mailto:s.henderson2424@gmail.com" className="social-link">
                <span className="social-icon">✉</span>
                Email
              </a>
              <a href="https://github.com/SHenders2424" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">gh</span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/spencer-henderson-7b6940324/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">in</span>
                LinkedIn
              </a>
            </nav>
          </div>
        </aside>

        <main className="content">

          <section className="section">
            <h1 className="section-title">// About Me</h1>
            <p className="section-body">
              My name is Spencer Henderson and I am a Computer Science student at the University of Missouri,
              pursuing a minor in Mathematics. I participate in the Mizzou Computing Association, intramural
              sports, and many game jams and hackathons throughout the year. Currently, I serve as an
              undergraduate research assistant with the CERI Center and the Information Experience Laboratory.
              In these roles, I contribute to cutting-edge projects, including the development of immersive VR
              experiences for neurodivergent individuals. Beyond academics and research, I am passionate about
              creating games, apps, and websites, constantly seeking opportunities to apply my skills in
              real-world scenarios.
            </p>
          </section>

          <section className="section">
            <h1 className="section-title">// Research</h1>
            <div className="research-card">
              <h2 className="card-title">USucceed</h2>
              <p className="card-body">
                As part of the USucceed project, I am developing a Virtual Reality (VR) experience designed
                to support neurodivergent individuals in learning cybersecurity concepts. My contributions
                include designing immersive 3D environments in Unity, developing interactive minigames, and
                integrating an AI-driven pedagogical agent to enhance engagement. I work closely with
                neurodivergent adults to ensure the experience is accessible, engaging, and educational.
                Key aspects I have led include the design and development of the minigames within each
                learning module, creating intuitive navigation and menu systems, and shaping the overall
                game loop to ensure a cohesive and impactful user experience.
              </p>
            </div>
          </section>

          <section className="section">
            <h1 className="section-title">// Projects</h1>
            <div className="projects-grid">

              <div className="project-card featured">
                <div className="project-image-wrap">
                  <img src={emotionsGame} alt="Emotions.io game screenshot" className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-tag">Game Dev</span>
                    <span className="project-tag">Unity</span>
                    <span className="project-tag">Multiplayer</span>
                  </div>
                  <h2 className="card-title">Emotions.io</h2>
                  <p className="card-body">
                    During the 2025 Adroit Game Jam, my team developed a fully functional multiplayer .io
                    game in just 48 hours. The game was live and playable by the end of the event. I was
                    responsible for all front-end development in Unity, including the UI, player controls,
                    core game mechanics, and the detailed leveling, stats, and abilities system. We plan to
                    continue development with the goal of launching a polished version on its own domain.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-tag">React</span>
                    <span className="project-tag">JavaScript</span>
                    <span className="project-tag">Contract</span>
                  </div>
                  <h2 className="card-title">Maple and Marsh Website</h2>
                  <p className="card-body">
                    I was contracted by a local coffee company, Maple and Marsh, to design and develop their
                    official website. The site showcases their upcoming events, menu, and contact information.
                    Built using JavaScript and React, the site features a modern and visually appealing design
                    and is fully responsive across all devices. The website is live at mapleandmarsh.com.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Data Science</span>
                    <span className="project-tag">Sports Analytics</span>
                  </div>
                  <h2 className="card-title">College Basketball Stat Predictor</h2>
                  <p className="card-body">
                    I am currently collaborating with a statistics student at the University of Missouri to
                    develop a web-based predictive tool for NCAA basketball performance. The application
                    forecasts player statistics—including points, assists, and rebounds—based on factors such
                    as average stats, the defensive efficiency of the opposing team, and game location. I
                    designed and developed the user interface for the website.
                  </p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-tag">iOS</span>
                    <span className="project-tag">Swift</span>
                    <span className="project-tag">Mobile</span>
                  </div>
                  <h2 className="card-title">Call of Duty Camo Tracker</h2>
                  <p className="card-body">
                    I designed and developed an iOS application that allows users to track their progress in
                    Call of Duty: Black Ops 6. The app features a clean, user-friendly interface and efficient
                    data models to display progress across various camo challenges. I plan to continue
                    updating the app to support future titles and add features like challenge guides and
                    progress sharing with friends.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default App
