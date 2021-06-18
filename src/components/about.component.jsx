import React from "react";

const About = (props) => {
  return (
    <React.Fragment>
      <h3># About</h3>
      <div className="welcomeGrid">
        <div className="wrap">
          <p>
            Hello! My name is Maverick and I started programming back in 2017.
            I've dabbed in several programming languages as a hobbiest, but I've
            decided to go pro! I'm very comfortable with HTML5, CSS3,
            Javascript, Jquery, and DiscordJS. This site has been developed in
            ReactJS and I plan to expand upon it as I grow as a developer.
          </p>
        </div>
        <div className="wrap">
          <p>
            I've based the design on Microsoft VS Code, becuase it is a unique
            design for a website that still allows for easy navigation. I've
            attempted to make the site as accessible as possible with titles,
            alt tags, appropriate contrast ratios, and ensuring that everything
            can be navigated through using the keyboard. Enjoy!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
