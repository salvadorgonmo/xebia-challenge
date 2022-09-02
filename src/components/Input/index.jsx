import React from "react";
import { Input } from "../common";

export const CommonInput = ({
  handleChange,
  value,
  label,
  hidden,
  placeholder,
}) => {
  if (hidden) return null;
  return (
    <Input
      onChange={handleChange}
      value={value}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default CommonInput;
