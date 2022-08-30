import React from "react";
import { TextField } from "@mui/material";

export const Input = ({ handleChange, value }) => {
  return (
    <TextField
      sx={{
        marginBottom: "20px",
      }}
      onChange={handleChange}
      value={value}
      label="Search your topic"
      variant="standard"
    />
  );
};

export default Input;
