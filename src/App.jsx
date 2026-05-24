import { useState } from "react";
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import myPhoto from './assets/images.jpg'
import About from './components/About'
import Projects from './components/Project'
import Footer from './components/Footer'
import './index.css';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <div className={darkMode ? "dark-them" : "light-them"}>
      <button className="floating-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "light": "night"}
      </button>

      <div className='hero-section'
       >
        <Navbar
        darkMode={setDarkMode}
        setDarkMode={setDarkMode} 
        search ={search} setSearch={setSearch}/>

      <Header message ='Welcome to My Portfolio'/>
      </div>
      

      <Profile image = {myPhoto}
        title = "Web Developer"
        bio = "I am a passionate junior web developer with  a strong foundation in HTML, CSS,and JavaScript."
        />

        <About />
        <Projects />
        <Footer />

    </div>
  )
}

export default App
