import React from "react";

// Components
import { CardItem, CardList } from "../../components/Cards/TopicCard";
import { Title, Wrapper, HorizontalWrapper } from "../../components/common";

export const Topics = ({ data, setMainTopic }) => {
  const handleClick = (event) => {
    const value = event.currentTarget.id;
    setMainTopic(value);
  };

  if (!data || !data.topic) return null;

  return (
    <Wrapper>
      <Title>You searched for:</Title>
      <CardItem
        cardTitle={data.topic.name}
        header={`Stargazer count: ${data.topic.stargazerCount}`}
      />
      <HorizontalWrapper>
        <CardList items={data.topic.relatedTopics} onClick={handleClick} />
      </HorizontalWrapper>
    </Wrapper>
  );
};

export default Topics;
