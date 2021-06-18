import React from "react";
import cereact from "../../assets/CEReact.preview.png";
import ceprev from "../../assets/ce.preview.png";
import displatehtml from "../../assets/displatehtml.png";
import langsynthprev from "../../assets/langsynth.preview.png";
import linkedinhtml from "../../assets/linkedinhtml.png";
import portfolioprev from "../../assets/portfolio.preview.png";
import soylenthtml from "../../assets/soylenthtml.png";
import transamericahtml from "../../assets/transamericahtml.png";
import walmarthtml from "../../assets/walmarthtml.png";
import webdevquine from "../../assets/webdevquine.preview.png";
import { HashLink as Link } from "react-router-hash-link";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div>
        <h2 className="extensionHeader">Portfolio</h2>
        <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.1.0 </a>
        <p className="extensionDescription">An exploration of web dev technologies including HTML5, CSS3, JavaScript, JQuery, React, and Angular</p>
        <hr/>
        <h3>HTML Emails:</h3>
        <div className="portfolioGrid">
          <div className="card"><div className="iwrapper">
            <img src={walmarthtml} alt="Preview of Walmart Email"/>
            <Link to="/portfolio/walmartemail.html" title="Check out this project!" alt="Preview of walmart email"/>
          </div><p>Walmart HTML Email</p></div>
          <div className="card"><div className="iwrapper">
            <img src={displatehtml} alt="Preview of Displate Email"/>
            <Link to="/portfolio/displateemail.html" title="Check out this project!" alt="Preview of displate email"/>
          </div><p>Displate HTML Email</p></div>
          <div className="card"><div className="iwrapper">
            <img src={linkedinhtml} alt="Preview of LinkedIn Email"/>
            <Link to="/portfolio/linkedinemail.html" title="Check out this project!" alt="Preview of linkedin email"/>
          </div><p>LinkedIn HTML Email</p></div>
          <div className="card"><div className="iwrapper">
            <img src={soylenthtml} alt="Preview of Soylent Email"/>
            <Link to="/portfolio/soylentemail.html" title="Check out this project!" alt="Preview of soylent email"/>
          </div><p>Soylent HTML Email</p></div>
          <div className="card"><div className="iwrapper">
            <img src={transamericahtml} alt="Preview of TransAmerica Email"/>
            <Link to="/portfolio/transamericaemail.html" title="Check out this project!" alt="Preview of transamerica email"/>
          </div><p>TransAmerica HTML Email</p></div>
        </div>
        <h3>React Projects:</h3>
        <div className="portfolioGrid">
          <div className="card"><div className="iwrapper">
            <img src={portfolioprev} alt="Preview of react portfolio"/>
            <a href="https://codesandbox.io/s/unruffled-voice-ks4ns" target="_blank" rel="noreferrer" title="Check out this portfolio">&nbsp;</a>
          </div><p>VS Code Portfolio - this project here!</p></div>
          <div className="card"><div className="iwrapper">
            <img src={cereact} alt="Callouts Evolved Preview"/>
            <a href="https://codesandbox.io/s/cereact-q9oyx" target="_blank" rel="noreferrer" title="Callouts Evolved React Rebuild preview (Not finished!)">&nbsp;</a>
          </div><p>Callouts Evolved Dev Environment - Work in Progress</p></div>
        </div>
        <h3>Angular Projects:</h3>
        <div className="portfolioGrid">
          <div className="card"><div className="iwrapper">
            <img src={langsynthprev} alt="Langsynth preview -- looks like google translate"/>
            <a href="https://qre2k.csb.app/" target="_blank" rel="noreferrer" title="Check out this project similar to Roseta Stone!">&nbsp;</a>
          </div><p>Langsynth - Inspired by Roseta Stone / Google Translate</p></div>
        </div>
        <h3>Miscelaneous Projects:</h3>
        <div className="portfolioGrid mb">
          <div className="card"><div className="iwrapper">
            <img src={ceprev} alt="Callouts Evolved preview"/>
            <a href="https://www.calloutsevolved.com" target="_blank" rel="noreferrer" title="Check out the current live version of Callouts Evolved!">&nbsp;</a>
          </div><p>Live Version of Callouts Evolved - Aspirational Project</p></div>
          <div className="card"><div className="iwrapper">
            <img src={webdevquine} alt="Web Dev HTML Quine preview"/>
            <a href="https://codepen.io/maverickcer/pen/vYxWYgJ" target="_blank" rel="noreferrer" title="Check out this project!">&nbsp;</a>
          </div><p>HTML Quine</p></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;