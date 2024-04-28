import React from 'react';
import './App.css';
import Header from './Header';
import githubImg from './img/github.png';
import linkedinImg from './img/linkedin.png';
import itchIoImg from './img/itchio.png';
import phoebeImg from './img/Me.png';

export default function App() {
  return (
    <div className="App">
       {/* <Header /> */}
        <main>
          <div className="main-content">
              {/* <!--Splash Page--> */}
              <div id="home" className="splash-content">
                  <div className="splash-left">
                      <span className="splash-container">
                          <h1 className="splash-header">Hi, I'm Phoebe.</h1>
                          <h4>Full Stack Software Developer</h4>
                          <span className="splash-icons">
                              <a href="https://github.com/phoebeanh"><img src={githubImg} alt="github"/></a>
                              <a href="https://www.linkedin.com/in/phoebe-ngo/"><img src={linkedinImg} alt="linked in" /></a>
                              <a href="https://pngo.itch.io/"><img src={itchIoImg} alt="itch.io" /></a>
                          </span>
                      </span>
                      
                  </div>
                  <div className="splash-right">
                      <img className="splash-photo" src={phoebeImg} alt="Phoebe smiling" />
                  </div>
              </div>
          </div>
        </main>
    </div>
  );
}