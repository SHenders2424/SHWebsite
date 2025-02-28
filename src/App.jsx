import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>My name is Spencer Henderson and I am a Computer Science student at the University of Missouri.
          I am a undergraduate research assistant with the CERI Center, and I am working on a project with the
          Information Experience Laboratory. In this project, I develop a VR experience for neurodivergergent 
          individuals using Unity and C#. Outside of my research, I like to develop games and create websites and apps.
        </p>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This section is where you can describe your website or project.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Get in touch with us!</p>
        </section>
      </main>
    </div>
  )
}

export default App
