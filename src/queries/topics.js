import { gql } from "@apollo/client";

export const topicsQuery = (name) => {
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
