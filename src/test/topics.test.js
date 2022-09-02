import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_TOPICS_QUERY, TopicsLayout } from "../layouts/TopicsLayout";

const mocks = [
  {
    request: {
      query: GET_TOPICS_QUERY("react"),
      variables: {
        name: "react",
      },
    },
    result: {
      data: {
        topic: {
          id: "1",
          name: "react",
          stargazerCount: 1000,
          relatedTopics: [
            {
              id: "2",
              name: "angular",
              stargazerCount: 500,
              relatedTopics: [{ id: "3", name: "python" }],
            },
          ],
        },
      },
    },
  },
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TopicsLayout />
    </MockedProvider>
  );

  // Shows the loading phase:
  expect(
    await screen.findByText("Searching for your topic...")
  ).toBeInTheDocument();

  // Show rendered UI's component phase
  // First item
  expect(await screen.findByText("Github API Topics")).toBeInTheDocument();
  expect(await screen.findByText("react")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 1000")).toBeInTheDocument();

  // Related topics
  expect(await screen.findByText("angular")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 500")).toBeInTheDocument();
});

it("should show error UI", async () => {
  const topicsMock = {
    request: {
      query: GET_TOPICS_QUERY("react"),
      variables: { name: "react" },
    },
    error: new Error("An error occurred"),
  };
  render(
    <MockedProvider mocks={[topicsMock]} addTypename={false}>
      <TopicsLayout />
    </MockedProvider>
  );
  expect(
    await screen.findByText(
      "Ups! We are sorry, there was an error trying to fetch the topics!"
    )
  ).toBeInTheDocument();
});

it("should be able to search for a new topic if the user entries new topic in text field", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TopicsLayout />
    </MockedProvider>
  );

  // First render
  expect(await screen.findByText("Github API Topics")).toBeInTheDocument();
  expect(await screen.findByText("react")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 1000")).toBeInTheDocument();

  // Related topics
  expect(await screen.findByText("angular")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 500")).toBeInTheDocument();

  const input = await screen.findByPlaceholderText("Search for a topic");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "python" } });
  expect(input.value).toBe("python");

  // Shows the loading phase:
  expect(
    await screen.findByText("Searching for your topic...")
  ).toBeInTheDocument();

  // Shows no record for that search
  expect(
    await screen.findByText("There are no records with this search.")
  ).toBeInTheDocument();
});

it("should be able to see related topics if the user clicks on 'See related topics'", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TopicsLayout />
    </MockedProvider>
  );

  // First render
  expect(await screen.findByText("Github API Topics")).toBeInTheDocument();
  expect(await screen.findByText("react")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 1000")).toBeInTheDocument();

  // Related topics
  expect(await screen.findByText("angular")).toBeInTheDocument();
  expect(await screen.findByText("Stargazer count: 500")).toBeInTheDocument();

  const searchButton = await screen.findByText("See related topics");

  expect(searchButton).toBeInTheDocument();

  fireEvent.click(searchButton); // Simulate a click and fire the mutation

  // Shows the loading phase:
  expect(
    await screen.findByText("Searching for your topic...")
  ).toBeInTheDocument();

  // Shows no record for that search
  expect(
    await screen.findByText("There are no records with this search.")
  ).toBeInTheDocument();
});
