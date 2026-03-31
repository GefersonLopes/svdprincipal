import React from "react";
import "../styles/Button.css";

export function Button({ children, onClick, className, type = "button", variant, ...props }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
