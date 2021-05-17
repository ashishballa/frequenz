# Frequenz

Displayes top N most frequently occurring words in a paragraph

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Components

### React components

NavBar.js - The main navbar of the site
Footer.js - The main footer of the site
UserInput.js - Take input from user and passes the data to frequency.js and the result to DataTable.js
DataTable.js - Displayes the prop data in tabular form

### Javascript utils

frequency.js - Cauculates the frequency of all words, sorts them and returns the top N.

## Libraries & Sites

Bulma - A 'css only' framework for basic styles and flexbox
regex101  - A site to preview our regex output [link](https://regex101.com/)

## Tests

1. To test if navbar is rendered
2. To test if user input form is rendered
3. To test frequency function is working
4. To test if footer is rendered
