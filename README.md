# Evaluate a news article with Natural Language Processing

## Installing
Fork, clone, or download this repo to begin the project setup.

 `cd` into the project folder and run:

`npm install` to install all the required dependencies.

## Aylien API setup

First, you will need to go [here](https://developer.aylien.com/signup) & sign up for an API key. 

Next, Create a new  file named `.env` in the root of your project.

Fill the `.env` file with your API keys like this:

```
API_ID=**************************
API_KEY=**************************
```

## Run Project

### 1. Production Mode
- `cd` into the project folder
- `npm run build-prod` to generate the distribution folder.
- `node src/node src/server/index.js` to start the express server.
- The production mode web app can be accessed at `localhost:8081`

### 2. Development Mode
- `npm run build-dev` to start the webpack dev server.
- The development mode web app can be accessed at `localhost:8080`

**Note: To successfuly run and test development mode, express server should be running.**

### 3. Testing
- `npm run test` to run Jest & test all test cases.
