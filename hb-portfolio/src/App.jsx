import React, { useEffect } from 'react';
import './App.css';
import Preloader from './assets/preloader';
import hbLogo from './assets/HBLOGO.png';
import heroFoto from './assets/foto.png';
import pdfFile from './assets/CV_HB.pdf';
import project1image from './assets/Artboard1.png';
import project2image from './assets/Artboard2.png';
import project3image from './assets/Artboard3.png';
import project4image from './assets/Artboard4.png';
import project5image from './assets/Artboard5.png';
import project6image from './assets/Artboard6.png';
import Lottie from 'lottie-react';
import animationData from './assets/TbDRL9TZU1.json';


// Externe stylesheet link
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

function App() {
  useEffect(() => {
    // Animatie event listeners
    var square = document.getElementsByClassName('square');

    for (var i = 0; i < square.length; i++) {
      square[i].addEventListener('mouseenter', function () {
        this.classList.add("rubberBand");
        this.addEventListener("animationend", function () {
          this.classList.remove("rubberBand");
        }, false);
      });
    }

    // Scroll event listener
    const scrollContainer = document.querySelector('.project-scroll-container');

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      e.preventDefault();

      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Render
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Navbar */}
      <div className='App'>
        <nav className="navbar">
          <div className="left-side">

  <div className="logo" onClick={() => { window.location = window.location.pathname }}>
            <img src={hbLogo} alt="HB Logo" />
            </div>
            <div className="nav-items">
            <a href="#project">Project</a>
            <a href="#about">About</a>
            </div>
          </div>
          <div className="right-side">
            <a href={pdfFile} target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="mailto:h.bidaoui@hotmail.com">Contact Me</a>
          </div>
        </nav>
      </div>

      {/* Hero-sectie */}
      <div class="heropage">
        <div class="hero-section">
          <div class="content-container">
            <div class="intro-text">
              <h2 class="animated-text">
                <span class="square">H</span>
                <span class="square">i</span>
                <span class="square">n</span>
                <span class="square">d</span>
                <span class="square">&nbsp;</span>
                <span class="square">B</span>
                <span class="square">i</span>
                <span class="square">d</span>
                <span class="square">a</span>
                <span class="square">o</span>
                <span class="square">u</span>
                <span class="square">i</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Projecten */}
  <div id="project" className="project">
        <div className="projects">
          <h2 className="section-title">Projects</h2>
          <div className="project-scroll-container">
            <div className="project-card">
              <img src={project1image} alt="project1image" />Rising Tight
            </div>
            <div className="project-card">
              <img src={project2image} alt="project1image" />Tony Chocolonely
            </div>
            <div className="project-card">
              <img src={project3image} alt="project1image" />Podcast
            </div>
            <div className="project-card">
              <img src={project4image} alt="project1image" />IDA
            </div>
            <div className="project-card">
              <img src={project5image} alt="project1image" />Brabants Water
            </div>
          </div>
        </div>
      </div>

      {/* Over sectie */}
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="text-container">
          <h2>About</h2>
          <p>
            Ik ben Hind, een enthousiaste werker die graag de handen uit de mouwen steekt. Stressbestendigheid, gedreven en creatief zijn eigenschappen die mij als persoon goed omschrijven. Ik hou van uitdagingen en vaak is niets mij te gek.
            <br />
            <br />
            Mijn talenten liggen in het creëren van eindproducten die niet alleen esthetisch aantrekkelijk zijn, maar ook functioneel en gebruiksvriendelijk. Mijn doel is om mijn passie voor design en development om te zetten in een bloeiende carrière waarin ik met een eigen unieke stijl en visie werkzaam kan zijn op de arbeidsmarkt.
          </p>
        </div>
        <div className="animation-container">
          <Lottie
            animationData={animationData}
          style={{ width: '500px', height: '500px' }}
          />
        </div>
      </div>
    </div>

<div className="about-section">
  <div className="about-content">
    {/* Informatie over jezelf */}
    {/* ... (voorgaande code blijft hetzelfde) */}
    
    {/* Vaardigheden sectie */}
   <div className="skills-section">
  <h2>Skills</h2>
  
</div>
     
  </div>
</div>


    </>
  );
}

export default App;
