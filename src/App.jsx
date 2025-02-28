import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <p>This is a React-powered website using Vite!</p>
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
