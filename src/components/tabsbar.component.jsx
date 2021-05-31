import React from "react";
import Routing from "../router/router.component";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Close } from "../assets/close.svg";

const TabsBar = (props) => {
  return (
    <div>
      <div className="tabsBar">
        <div className="welcomeTab">
          <Logo/>Welcome<Close/>
        </div>
      </div>
      <div className="routerContent">
        <Routing />
      </div>
    </div>
  );
};

export default TabsBar;