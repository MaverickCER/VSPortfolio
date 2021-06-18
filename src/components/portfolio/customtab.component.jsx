import React from "react"

const style = {
  padding: "0 20px 0 0",
  display: "inline-block",
  cursor: "pointer",
  width: "fit-content",
  color: "var(--textColor2)",
}

const activeStyle = {
  ...style,
  color: "var(--textColor1)",
  textDecoration: "underline"
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab