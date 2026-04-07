import React from "react";
import "../styles/Select.css";

export function Select({ value, onValueChange, children, className, ...props }) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={`custom-select ${className || ""}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, className }) {
  // Wrapper só pra manter compatibilidade com o código
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  // Aqui o placeholder já fica no <option>
  return <option value="">{placeholder}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
