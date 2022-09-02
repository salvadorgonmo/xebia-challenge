import React from "react";

// Component
import { Loading as CommonLoading } from "../common";

export const Loading = ({ loading = false, loadingText }) => {
  if (!loading) return null;
  return <CommonLoading>{loadingText}</CommonLoading>;
};

export default Loading;
