import React, { useState } from "react";
import { Input } from "../components/Input";
import { Topics } from "../pages";

export const TopicsLayout = () => {
  const [mainTopic, setMainTopic] = useState("react");
  const handleChange = (event) => {
    const value = event.target.value;
    setMainTopic(value);
  };
  return (
    <>
      <h1>Github API Topics</h1>
      <Input handleChange={handleChange} value={mainTopic} />
      <Topics mainTopic={mainTopic} setMainTopic={setMainTopic} />
    </>
  );
};

export default TopicsLayout;
