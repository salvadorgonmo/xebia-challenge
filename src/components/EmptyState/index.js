import React from "react";
import { Paragraph, Wrapper } from "../common";

export const EmptyState = ({ show, textDescription }) => {
  if (!show) return null;
  return (
    <Wrapper>
      <Paragraph>{textDescription}</Paragraph>
    </Wrapper>
  );
};

export default EmptyState;
