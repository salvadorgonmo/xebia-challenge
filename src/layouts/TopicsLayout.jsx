import React, { useState } from "react";

// Apollo
import { gql } from "@apollo/client";

// Components
import EmptyState from "../components/EmptyState";
import { Loading } from "../components/Loading";
import { Title } from "../components/common";
import ErrorState from "../components/ErrorState";
import { CommonInput } from "../components/Input";

// Hook services
import { useTopicsData } from "../services";

// Pages
import { Topics } from "../pages";

export const GET_TOPICS_QUERY = (name) => {
  return gql`
  query {
    topic(name: "${name}") {
      name
      id
      stargazerCount
      relatedTopics {
        name
        id
        stargazerCount
        
      }
    }
  }
  `;
};

export const TopicsLayout = () => {
  const [mainTopic, setMainTopic] = useState("react");
  const { data, error, loading } = useTopicsData(mainTopic, 300);
  const handleChange = (event) => {
    const value = event.target.value;
    setMainTopic(value);
  };

  return (
    <>
      <Title>Github API Topics</Title>

      <ErrorState
        error={error}
        errorMessage="Ups! We are sorry, there was an error trying to fetch the topics!"
      />
      <EmptyState
        show={!data?.topic && !data?.topic?.relatedTopics && !loading}
        textDescription="There are no records with this search."
      />
      <CommonInput
        handleChange={handleChange}
        placeholder="Search for a topic"
        value={mainTopic}
        hidden={error}
      />
      <Loading loadingText="Searching for your topic..." loading={loading} />
      {!loading && (
        <Topics data={data} mainTopic={mainTopic} setMainTopic={setMainTopic} />
      )}
    </>
  );
};

export default TopicsLayout;
