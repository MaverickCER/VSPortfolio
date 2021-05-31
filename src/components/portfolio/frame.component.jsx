import React from "react";
import Iframe from "react-iframe";

const FrameComponent = ({name}) => {
  return (
    <Iframe src={name} title={name}/>
  );
};

export default FrameComponent;