# Wall app Client
The Wall Client provides an interface to consume resources from the [Wall API](https://github.com/vitorguima/wall_app_api). The application was built with [ReactJS](https://reactjs.org/) and [Styled Components](https://styled-components.com/).

## API deploy at Heroku:

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

### Starting the application:
Inside the project's root folder, open a new terminal and insert the command below:

```bash
 npm start
```
or
```bash
 yarn start
```

### Concerns:
* The user session and the authentication token are being handled and stored by the client at the browser's local storage. It creates a certain vulneraibility to [XSS atacks](https://owasp.org/www-community/attacks/xss/).
* The feed won't update automatically. It will only show new posts after the user execute an update action.
