import React from "react";
import Toggle from "../theme/theme.component";
import { HashLink as Link } from "react-router-hash-link";
import { ReactComponent as Bug } from "../assets/bug.svg";
import { ReactComponent as Files } from "../assets/files.svg";
import { ReactComponent as Extension } from "../assets/extension.svg";

const Welcome = (props) => {
  return (
    <React.Fragment>
      <h1>HTML Email Developer</h1>
      <h3>Maverick Manasco</h3>
      <div className="welcomeGrid">
        <div>
          <h4>Start</h4>
          <Link to="#About">About</Link> <br />
          <Link to="#Contact">Contact</Link> or{" "}
          <Link to="#CER">Consume Enhance Replicate</Link>
          <h4>Recent</h4>
          <Link to="/portfolio">Portfolio</Link> <span>/portfolio</span>
          <br />
          <a
            href="https://drive.google.com/file/d/1uGDCkZqGfzU7fyHBZPeP7iO7QDiVp5TA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Featured Project
          </a>{" "}
          <span>https://www.calloutsevolved.com</span>
        </div>
        <div>
          <h4>Customize</h4>
          <div className="darkCell">
            <Link
              to="/portfolio/walmartemail.html"
              style={{ color: "inherit", width: "100%", height: "100%" }}
            >
              <p>Getting Started</p>
              <small>
                Check out my first <b>HTML</b> email here!
              </small>
            </Link>
          </div>
          <div className="darkCell">
            <a
              href="https://qre2k.csb.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", width: "100%", height: "100%" }}
            >
              <p>Above and Beyond</p>
              <small>
                Check out my personal project created in <b>Angular 11</b>
              </small>
            </a>
          </div>
          <div className="darkCell">
            <Toggle>
              <p>Color theme</p>
              <small>Make the site theme look the way you love</small>
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
          <a href="https://github.com/MaverickCER">Product documentation</a>
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
            <p>Explore</p>
            <small>
              The files icon <Files className="inlineICO" />, currently active,
              reveals the explorer
            </small>
          </div>
          <div className="darkCell">
            <p>Project Overview</p>
            <small>
              Click the extensions icon <Extension className="inlineICO" /> to
              see all my projects.
            </small>
          </div>
          <div className="darkCell">
            <p>Read All About It!</p>
            <small>
              Download my resume by clicking the user icon{" "}
              <Bug className="inlineICO" />
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
