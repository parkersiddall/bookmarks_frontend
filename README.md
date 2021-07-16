# Bookmarks (frontend)
Frontend code for the my [Bookmarks app](https://github.com/parkersiddall/bookmarks_backend).

Built with React / Redux / and Material UI. 

### TODOs, bugs, various notes...
- Add in spinners that show while the bookmarks are loading. (maybe this will solve the flash)
- Choosing category in add/edit bookmark form does not always set the state.
- Refactor registration form into seperate component. Right now it is still in the Login component.
- Create a root reducer to easily clear redux state on logout.
- Add button to quickly reset filter.


# React App Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Before running any scripts be sure to download all dependencies, `npm install`.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

# Cypress Tests
Cypress E2E tests are included in this directory. In order to run the tests, first start the test server (script in backend repo) then run `npm run cypress:open`. The Cypress browser will open up and you can choose what tests to run from the interface.
