# About project

The project was made as a final project for She-codes: React course. It's a React app receiving data from external APIs.

### Task

Create a trading center application with information of current exchange rates and a graph. The homepage should consist of the following:
- company logo and name
- top bar with main currencies exchange rates
- main area displaying a graph with Gold vs Silver ratio
- about page
- footer

### How to navigate the project

- Main component with ChartJS chart: [Line chart component](./src/components/LineChart.js). Which required some extra configuration to look properly: [ChartJS config](./src/services/chartJS/config.js)
- CSS modules, e.g. [BarCard CSS module](./src/styles/BarCard.module.css)
- The application fetches data from two APIs. Example of [congifuring the request](./src/services/api/currencyAPI/config.js) and [the fetching function itself](./src/services/api/currencyAPI/fetch.js)
- Routing between pages is added in [App component](./src/App.js)

### Why I built the project this way

- As the project basically requires only data from external API, I used simple `useState` hook to pass the data to component for render, instead of some state-management like Redux.
- I extracted all configuration of charts and API requests, initial data and functions to separate files. That way components are clean and easy to understand and all the other data/functions are maintanable.
- For development I added ["Mock Service Worker: MSW"](https://mswjs.io/), which allows to mock server responses not to call real API each time you make a small change.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
