import React from "react";
import About from "./about.component";
import Contact from "./contact.component";
import CERComponent from "./cer.component";
import Welcome from "./welcome.component";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home">
        <div id="Welcome">
          <Welcome />
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
