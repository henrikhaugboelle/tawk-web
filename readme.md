TAWK WEB
========

This application is created using Create React App. For any troubleshooting, please see [create-react-app](https://github.com/facebook/create-react-app). 

# Dependencies

This project is dependent on the availability of [tawk-shared](https://github.com/henrikhaugboelle/tawk-shared) for development. Please see and setup that repository in advance to setting up this one.

The application needs the TAWK API. Which can be found here: [tawk-api](https://github.com/henrikhaugboelle/tawk-api). You should setup this application in advance as well.

# Installation

```
npm install (or yarn)
```

# Setup

Add a `.env` file to the root folder of the repository. The `.env` file needs paths for the API endpoints. The contents of the `.env` should look like this for local development:

```
NODE_PATH=src
REACT_APP_API_PATH=http://localhost:3001/api
REACT_APP_GRAPHQL_PATH=http://localhost:3001/graphql
REACT_APP_GRAPHQL_SUBSCRIPTIONS_PATH=ws://localhost:3001/subscriptions
```

# Development

To run in development, run the following command. You'll need a `.env` file as instructed above in the setup chapter.

```
npm start (or yarn start)
```

# Building

To build for production usage, run the following command. The output will be available in `build` and is a static website ready for deployment. If you use a host in the cloud, make sure, that it's one that supports git submodules. 

The `build` folder is ignored by git.

```
npm run build (or yarn build)
```

# Building for production

To build in production mode, make sure that you have the necessary environment variables configured. You can use a `.env.production` file or your hosts environment variables system. `NODE_ENV` should be set to `production`.

Available environment variables to configure:

```
NODE_ENV=production
NODE_PATH=src
REACT_APP_API_PATH={YOUR_URL}/api
REACT_APP_GRAPHQL_PATH={YOUR_URL}/graphql
REACT_APP_GRAPHQL_SUBSCRIPTIONS_PATH={YOUR_URL}/subscriptions
```
