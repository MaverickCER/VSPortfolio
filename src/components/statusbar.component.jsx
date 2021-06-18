import React from "react";
import { useLocation } from 'react-router-dom'
import { ReactComponent as Branch } from "../assets/branch.svg";
import { ReactComponent as Errors } from "../assets/errors.svg";
import { ReactComponent as Warning } from "../assets/warning.svg";
import { ReactComponent as Status } from "../assets/status.svg";
import { ReactComponent as Alert } from "../assets/alert.svg";

const StatusBar = (props) => {
  return (
    <div className="statusBar">
      <div className="statusBarLeft">
        <a style={{color: "inherit"}} title="MaverickCER (Git) - Checkout branch/tag..." href="https://github.com/MaverickCER" target="_blank" rel="noreferrer">
        <Branch
          fill="var(--textColor1)"
          stroke="var(--textColor1)"
          width="1rem"
          height="1rem"
          style={{ marginBottom: "-.1rem", display: "inline-block"}}
        /> main</a><span title="No Problems" style={{cursor: "default"}}>
        <Errors
          fill="var(--textColor1)"
          stroke="var(--textColor1)"
          width="1rem"
          height="1rem"
          style={{ marginBottom: "-.1rem", marginLeft: "20px" }}
        /> 0
        <Warning
          fill="var(--textColor1)"
          stroke="var(--textColor1)"
          width="1rem"
          height="1rem"
          style={{ marginBottom: "-.1rem", marginLeft: "10px" }}
        /> 0</span>
      </div>
      <div className="statusBarRight">
        <span title="Go to Location">{useLocation().pathname}</span> &nbsp;&nbsp; 
        <span title="Select Encoding">UTF-8</span> &nbsp;&nbsp; 
        <span title="Select End of Line Sequence">LF</span> &nbsp;&nbsp; 
        <span title="Select Language Mode">JavaScript React</span>
        <Status
          fill="var(--textColor1)"
          stroke="var(--textColor1)"
          width="1rem"
          height="1rem"
          style={{ marginBottom: "-.1rem", marginLeft: "10px" }}
        />
        <Alert
          fill="var(--textColor1)"
          stroke="var(--textColor1)"
          width="1rem"
          height="1rem"
          style={{ marginBottom: "-.1rem", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default StatusBar;