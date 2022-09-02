// Apollo hooks
import { useQuery } from "@apollo/client";

// Hooks
import { useDebounce } from "../hooks/useDebounce";

// Queries
import { GET_TOPICS_QUERY } from "../layouts/TopicsLayout";

export const useTopicsData = (mainTopic, delayAmount) => {
  const debouncedTopic = useDebounce(mainTopic, delayAmount);
  const query = GET_TOPICS_QUERY(debouncedTopic);
  const { loading, error, data } = useQuery(query, {
    // cache debounced search
    variables: { name: debouncedTopic },
  });

  return { loading, error, data };
};
