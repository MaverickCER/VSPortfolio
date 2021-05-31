import React from "react";
import About from "./about.component";
import Contact from "./contact.component";
import CERComponent from "./cer.component";
import Toggle from "../theme/theme.component";
import { HashLink as Link } from "react-router-hash-link";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home">
        <div id="Welcome">
          <div>
            <h1>HTML Email Developer</h1>
            <h3>Maverick Manasco</h3>
            <div className="welcomeGrid">
              <div>
                <h4>Start</h4>
                <Link to="/portfolio/walmartemail.html">New file</Link>{" "}<span>(Start Here!)</span>
                <br />
                <Link to="/Portfolio">Open Portfolio</Link> or{" "}
                <a
                  href="https://github.com/MaverickCER"
                  target="_blank"
                  rel="noreferrer"
                >
                  clone repository
                </a>
                <h4>Recent</h4>
                <Link to="/">public</Link>{" "}
                <span>https://www.maverickcer.com</span>
                <br />
                <Link to="/">More...</Link> <span>(Ctrl + R)</span>
              </div>
              <div>
                <h4>Customize</h4>
                <div className="darkCell">
                  <Link
                    to="/Portfolio"
                    style={{ color: "inherit", width: "100%", height: "100%" }}
                  >
                    <p>Tools and Languages</p>
                    <small>
                      Install support for <b>JavScript</b> <b>Python</b>{" "}
                      <b>Java</b> <b>PHP</b> <b>Azura</b> <b>Docker</b> and{" "}
                      <b>more</b>
                    </small>
                  </Link>
                </div>
                <div className="darkCell">
                  <Link
                    to="/Portfolio"
                    style={{ color: "inherit", width: "100%", height: "100%" }}
                  >
                    <p>Settings and Keybindings</p>
                    <small>
                      Install the settings and keyboad shortcuts of <b>Vim</b>{" "}
                      <b>Sublime</b> <b>Atom</b> and <b>others</b>
                    </small>
                  </Link>
                </div>
                <div className="darkCell">
                  <Toggle>
                    <p>Color theme</p>
                    <small>
                      Make the editor and your code look the way you love
                    </small>
                  </Toggle>
                </div>
              </div>
              <div>
                <h4>Help</h4>
                <a
                  href="https://drive.google.com/file/d/1uGDCkZqGfzU7fyHBZPeP7iO7QDiVp5TA/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Printable resume
                </a>
                <br />
                <a href="https://studio.youtube.com/channel/UCkYSvi4dRFcsrSIbE5Sflmg">
                  Introductory videos
                </a>
                <br />
                <a href="https://codepen.io/maverickcer">Tips and Tricks</a>
                <br />
                <a href="https://github.com/MaverickCER">
                  Product documentation
                </a>
                <br />
                <a href="https://github.com/MaverickCER">GitHub repository</a>
                <br />
                <a href="https://stackoverflow.com/users/13098534/maverickcer">
                  Stack Overflow
                </a>
                <br />
                <Link to="/#Contact">Join our Newsletter</Link>
              </div>
              <div>
                <h4>Learn</h4>
                <div className="darkCell">
                  <p>Find and run all commands</p>
                  <small>
                    Rapidly access and search commands from the Command Palette
                    (Ctrl+Shift+P)
                  </small>
                </div>
                <div className="darkCell">
                  <p>Interface Overview</p>
                  <small>
                    Get a visual Overlay highlighing the major components of the
                    UI
                  </small>
                </div>
                <div className="darkCell">
                  <p>Interactive Playground</p>
                  <small>
                    Try out essential editor features in a short walkthrough
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="About">
          <About />
        </div>
        <div id="CER">
          <CERComponent />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;