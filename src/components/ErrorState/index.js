import React from "react";
import { Paragraph, Wrapper } from "../common";

export const ErrorState = ({ error, errorMessage }) => {
  if (!error) return null;
  return (
    <Wrapper>
      <Paragraph>{errorMessage}</Paragraph>
    </Wrapper>
  );
};

export default ErrorState;
