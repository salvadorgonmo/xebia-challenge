// Apollo client
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Service hooks
export { useTopicsData } from "./TopicsService";

export const initializeClient = () => {
  return new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
    },
  });
};
