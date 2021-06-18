import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const CERComponent = (props) => {
  return (
    <React.Fragment>
      <h3># Consume Enhance Replicate - A Programmer's Directive</h3>
      <div className="welcomeGrid1">
        <div className="wrap">
          <Logo fill="var(--accent)" />
        </div>
        <div className="wrap">
          <p>
            I started programming to develop a communication solution for my
            team so we could complete end game activities. That game had a major
            impact on my life and the people I met inspired me to become a
            programmer. In the game, a future technology was given a directive
            in hopes of improving life for humanity. That directive was Consume,
            Enhance, Replicate. Today, I aim to become a better programmer by
            consuming knowledge and inspiration, then using that new knowledge
            to enhance my programs, and replicating the process. I think it's
            worked so far!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CERComponent;
