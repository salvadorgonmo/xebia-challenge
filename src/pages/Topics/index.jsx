import React from "react";
import { useQuery } from "@apollo/client";
import { useDebounce } from "../../hooks/useDebounce";
import { topicsQuery } from "../../queries/topics";
import { OutlinedCard } from "../../components/Cards/TopicCard";
import { Typography } from "@mui/material";

export const Topics = ({ mainTopic, setMainTopic }) => {
  const debouncedTopic = useDebounce(mainTopic, 300);
  const query = topicsQuery(debouncedTopic);
  const { loading, error, data } = useQuery(query, {
    // cache debounced search
    variables: { name: debouncedTopic },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {JSON.stringify(error, null, 2)}</p>;

  if (!data.topic) {
    return (
      <Typography>Start by tyiping a topic name in the field above.</Typography>
    );
  }

  const handleClick = (event) => {
    const value = event.currentTarget.id;
    setMainTopic(value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        key={1}
      >
        <Typography sx={{ fontSize: "20px", marginBottom: "15px" }}>
          You searched for:
        </Typography>
        <OutlinedCard
          name={data.topic.name}
          stargazerCount={data.topic.stargazerCount}
          isChildren={false}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {data.topic.relatedTopics.map((topic) => (
            <OutlinedCard
              id={topic.name}
              key={topic.id}
              name={topic.name}
              stargazerCount={topic.stargazerCount}
              onClick={handleClick}
            />
          ))}
          {data.topic.relatedTopics.length === 0 && (
            <Typography>There are no related topics for {mainTopic}</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topics;
