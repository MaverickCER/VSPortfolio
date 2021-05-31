import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Toggle from "../theme/theme.component";
import { ReactComponent as Files } from "../assets/files.svg";
import { ReactComponent as Extension } from "../assets/extension.svg";
import { ReactComponent as Bug } from "../assets/bug.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as HTML5 } from "../assets/html5.svg";
import { ReactComponent as Jquery } from "../assets/jquery.svg";
import { ReactComponent as Angular } from "../assets/angular.svg";
import { ReactComponent as ReactLogo } from "../assets/react.svg";

const ActivityBar = (props) => {
  const [isOpen, setIsOpen] = React.useState("Welcome");
  function handleChange(event) {
    event.target.getAttribute("name") === isOpen
      ? setIsOpen(null)
      : setIsOpen(event.target.getAttribute("name"));
  }

  return (
    <div className="sideWrapper">
      <div className="activityBar">
        <ul className="dropdown">
          <li className={isOpen === "Welcome" ? "selected" : null}>
            <Link to="/" name="Welcome" onClick={handleChange}>
              <Files />
            </Link>
          </li>
          <li className={isOpen === "Portfolio" ? "selected" : null}>
            <Link to="/Portfolio" name="Portfolio" onClick={handleChange}>
              <Extension />
            </Link>
          </li>
        </ul>
        <ul
          className="dropdown"
          style={{ position: "absolute", bottom: "0", left: 0 }}
        >
          <li>
            <a
              href="https://drive.google.com/file/d/1uGDCkZqGfzU7fyHBZPeP7iO7QDiVp5TA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Bug />
            </a>
          </li>
          <li>
            <Toggle>
              <Settings />
            </Toggle>
          </li>
        </ul>
      </div>
      <div className="sideBar">
        {
          {
            Welcome: (
              <div className="accordion">
                <p className="expLabel">EXPLORER</p>
                <div className="option">
                  <input
                    type="checkbox"
                    id="toggle0"
                    className="toggleInput"
                    defaultChecked
                  />
                  <label className="title" htmlFor="toggle0">
                    WORKSPACE
                  </label>
                  <div className="content">
                    <div className="option">
                      <input
                        type="checkbox"
                        id="toggle1"
                        className="toggleInput"
                        defaultChecked
                      />
                      <label className="title" htmlFor="toggle1">
                        MaverickCER
                      </label>
                      <div className="content">
                        <a href="/#About">
                          <ReactLogo />
                          About
                        </a>
                        <a href="/#CER">
                          <ReactLogo />
                          CER
                        </a>
                        <a href="/#Contact">
                          <ReactLogo />
                          Contact
                        </a>
                        <a href="/#Welcome">
                          <ReactLogo />
                          Welcome
                        </a>
                      </div>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        id="toggle2"
                        className="toggleInput"
                        defaultChecked
                      />
                      <label className="title" htmlFor="toggle2">
                        Portfolio
                      </label>
                      <div className="content">
                        <div className="option">
                          <input
                            type="checkbox"
                            id="toggle3"
                            className="toggleInput"
                            defaultChecked
                          />
                          <label className="title" htmlFor="toggle3">
                            HTML Email
                          </label>
                          <div className="content">
                            <Link to="/portfolio/linkedinemail.html">
                              <HTML5 />
                              Lead Nurturing
                            </Link>
                            <Link to="/portfolio/transamericaemail.html">
                              <HTML5 />
                              Milestone
                            </Link>
                            <Link to="/portfolio/soylentemail.html">
                              <HTML5 />
                              Newsletter
                            </Link>
                            <Link to="/portfolio/displateemail.html">
                              <HTML5 />
                              Promotional
                            </Link>
                            <Link to="/portfolio/walmartemail.html">
                              <HTML5 />
                              Survey
                            </Link>
                          </div>
                        </div>
                        <a
                          href="https://www.calloutsevolved.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Jquery />
                          Callouts Evolved
                        </a>
                        <a
                          href="https://qre2k.csb.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Angular />
                          Langsynth
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            Portfolio: (
              <div className="accordion">
                <p className="expLabel">PORTFOLIO</p>
                <div className="option">
                  <input
                    type="checkbox"
                    id="toggle0"
                    className="toggleInput"
                    defaultChecked
                  />
                  <label className="title" htmlFor="toggle0">
                    WORKSPACE
                  </label>
                  <div className="content">
                    <div className="option">
                      <input
                        type="checkbox"
                        id="toggle1"
                        className="toggleInput"
                        defaultChecked
                      />
                      <label className="title" htmlFor="toggle1">
                        MaverickCER
                      </label>
                      <div className="content">
                        <a href="/">
                          <ReactLogo />
                          Welcome
                        </a>
                        <a href="/#About">
                          <ReactLogo />
                          About
                        </a>
                        <a href="/#Contact">
                          <ReactLogo />
                          Contact
                        </a>
                      </div>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        id="toggle2"
                        className="toggleInput"
                        defaultChecked
                      />
                      <label className="title" htmlFor="toggle2">
                        Portfolio
                      </label>
                      <div className="content">
                        <div className="option">
                          <input
                            type="checkbox"
                            id="toggle3"
                            className="toggleInput"
                            defaultChecked
                          />
                          <label className="title" htmlFor="toggle3">
                            HTML Email
                          </label>
                          <div className="content">
                            <Link to="/portfolio/linkedinemail.html">
                              <HTML5 />
                              Lead Nurturing
                            </Link>
                            <Link to="/portfolio/transamericaemail.html">
                              <HTML5 />
                              Milestone
                            </Link>
                            <Link to="/portfolio/soylentemail.html">
                              <HTML5 />
                              Newsletter
                            </Link>
                            <Link to="/portfolio/displateemail.html">
                              <HTML5 />
                              Promotional
                            </Link>
                            <Link to="/portfolio/walmartemail.html">
                              <HTML5 />
                              Survey
                            </Link>
                          </div>
                        </div>
                        <a
                          href="https://www.calloutsevolved.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Jquery />
                          Callouts Evolved
                        </a>
                        <a
                          href="https://qre2k.csb.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Angular />
                          Langsynth
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            Null: <div className="toggleInput"></div>
          }[isOpen]
        }
      </div>
    </div>
  );
};

export default ActivityBar;
