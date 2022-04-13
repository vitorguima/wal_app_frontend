# Wall app Client
The Wall Client provides an interface to consume resources from the [Wall API](https://github.com/vitorguima/wall_app_api). The application was built with [ReactJS](https://reactjs.org/) and [Styled Components](https://styled-components.com/).

## API deployment at Heroku:

* [Link to Production environment](https://wall-app-client.herokuapp.com/)

## How to run this project on your local environment


### Clone this repository to your local environment:

```bash
git clone git@github.com:vitorguima/wal_app_frontend.git
```

### Installing the project's dependencies:
Inside the project's root folder, open a new terminal and insert the command below:

```bash
 npm install
```
or
```bash
 yarn install
```

### After installing the dependencies:
* Create a ```.env``` file inside the project's root folder with the same variables that have been defined in the [.env.example](https://github.com/vitorguima/wal_app_frontend/blob/5260e62a987c1d7280ec1a5d1e5d3d7b8eaa4462/.env.example) file.

### Starting the application:
Inside the project's root folder, open a new terminal and insert the command below:

```bash
 npm start
```
or
```bash
 yarn start
```

## Tests
The tests are of the unit type. Those were written to validate the behavior of the application for the different pages and it's components.

### To run the tests:
```bash
npm run test
```

### To run the tests coverage:
```bash
npm run test-coverage
```

### Concerns:
* The user session and the authentication token are being handled and stored by the client at the browser's local storage. It creates a certain vulneraibility to [XSS atacks](https://owasp.org/www-community/attacks/xss/).
* The feed won't update automatically. It will only show new posts after the user execute an update action.

### External Libraries

* [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Axios](https://github.com/axios/axios)
* [React Router](https://reactrouter.com/)
* [Coverage](https://github.com/shinnn/coverage)
* [Jest mock axios](https://github.com/knee-cola/jest-mock-axios)
