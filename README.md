# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Mui material is used here because it contains a variety of different already built-in components that you can reuse in your application very easily and fast, very useful when you are building applications fast and with good quality, including a11y features that the component's offers.

- Debounce hook; this hooks is used to enhance the performance by delaying the request to the GraphQL call each time the user is typing a key in the Input field by 400 ms. This pattern avoids making multiple calls to an API sequently and just hits one when the user finishes its typing actions.

- Prettier and husky; to enhance readability in code by applying best practices linting the code format on every file, and husky checks everything is good before commiting a bunch of code to the repository.

### How to run app & test

# Run the application.

## Pre-requisites

- Node version v16.15 or higher.
- "[Npm](https://www.npmjs.com/)" (Node package manager)
- "[Nvm](https://github.com/nvm-sh/nvm)" (optional) - to change between node versions.

## Instructions

- Run `npm install`
- (Optional if you have Nvm) Run ´nvm use´
- Next run the application with: `npm start`
- Open [localhost](http://localhost:3000) in your browser and have fun!

## Linting

You can run `npm run prettier:check` to only check if the code is healthy or needs something to get fixed without applying the fix, just check.

If you want to fix all possible autofixable problems, instead run `npm run prettier:fix`

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

- Refactoring:
  I would change the way I have implemented the UI components with maybe my own components, and a little bit of the power of Tailwind CSS.

I would also add React Router to create proper URLs for each topic and view, and be able to manage different views if we want to add more features not only Topics.

I would add unit tests because of the time, I couldn't add them. But I would do it using react testing library to test the following case scenarios:

_Should search for a topic and return a list of topics related to it successfully_
_Should not crash if there is an error in the call and let the user know that there was an error_
_Should show loading text to the user if the api call is still on going_

And probably more tests

- Additional Features:
  I would add a Home page to show the different capabilities the GitHub API lets you play with, starting with the Topics and then adding more cards with other available features, and adding react router to manage routes.
