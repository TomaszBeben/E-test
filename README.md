# Recruitment technical test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Structure of files

    src
    |---__tests__
        |---App.test.js
        |---Directories.test.js
        |---Files.test.js
        |---Path.test.js
    |---api
        |---fetch.ts
    |---components
        |---app
            App.tsx
        |---content
            |---content
                |---Content.tsx
            |---directories
                |---Directories.tsx
            |---files
                |---Files.tsx
        |---path
            |---Path.tsx
    |---icons
        |---file.png
        |---folder.png
        |---image.png
    |---styles
        |---App.scss
        |---content.scss
        |---globalVariables.scss
        |---index.scss
        |---path.scss
        |---reset.scss
    |---types
        |---Tdata.ts
    |---utils
        |---iconSelect.ts
        |---nameCut.ts
    |---import-png.d.ts
    |---index.tsx
    |---setupTests.ts

## About Project
As description says, i build working version of directory browser.
The app allows users to click on directories and explore their contents.
Content of a directory comes from the provided api.

### Api
Api are fetched by using axios library.
Definition of axios you can find in src/api/fetch.ts
Axios takes data from api and put it to state 'data'.

### [App.tsx]
App component is a container for keeping states and functional components that show us an app

### [Content.tsx]
Takes downloaded data and render it to the user

### [Directories.tsx]
Renders only directories
Folders are clickable and route user into folder content

### [Files.tsx]
Renders only files

### [Path.tsx]
Path.tsx shows the user where he is located
All the elements of path are interactive except last, where user is located

### [types]
Types folder contain only types i had to use multiple times

### [utils]
-iconSelect.ts
    takes name of provided data and return correct icon
-nameCut.ts
    takes name of provided data, check how long the name is and return it shortened or not

### [Tests]
All test are in __tests__ folders and contains only simple unit tests

### [Styles]
Components styled by using SCSS

