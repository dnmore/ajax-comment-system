# Commenting System

Commenting system built with Node.js, AJAX and MongoDB database.

## Features

- Submit comments which will be displayed without page reload
- Submitted comments will be stored and retrieved in and from MongoDB Database


## Stack

- `node.js` JavaScript runtime environment
- `express.js` web framework for node.js
- `EJS` embedded JavaScript templating
- `ajax` required for comments fetching and displaying without a full page reload
- `mongodb` may be replaced by `mongoose`
- `nodemon` tool automatically restarting the node application when changes are detected

## Database 

Database named `commenting-system`, you can create it on Mongo Shell with the following command 

```
use commenting-system

```

## Cloning

You can [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and install the dependencies with the following command

```
$ npm install

```

You can run the following command to start the application

```
$ npm start

```

The server will be running on port 3000, visit `http://localhost:3000/`

## License

MIT
