# Commenting System
## Overview
A Node.js-based commenting system that allows users to submit comments asynchronously using AJAX. Comments are stored and retrieved from MongoDB.

## Features

- Submit comments without page reload using AJAX
- Store and retrieve comments from MongoDB


## Tech Stack

- `Node.js`– Backend framework
- `Express.js`– Web framework for Node.js
- `EJS`– Templating engine for dynamic content
- `AJAX`– For asynchronous data submission
- `MongoDB`– NoSQL database
- `Nodemon`– Automatically restarts server upon changes

## Database Setup

Create a MongoDB database named  `commenting-system`:

```
use commenting-system

```

## Getting Started
### Installation

Clone the repository and install the dependencies:

```
git clone https://github.com/dnmore/ajax-comment-system.git
$ npm install

```
### Running the Application
To start the server, use:

```
$ npm start

```

The server will be running at `http://localhost:3000/`

## License

This project is licensed under the MIT License.
