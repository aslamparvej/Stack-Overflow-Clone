import React from "react";

import "./Avatar.css";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontsize,
  cursor,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "white",
    borderRadius,
    fontsize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  };
  return <div style={style}>{children}</div>;
};

export default Avatar;
