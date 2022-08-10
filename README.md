# Anonymous Posting

### By Caroline Veloso and Edis Emin

## Description

This task was to create a web application similar to [Telegraph](https://telegra.ph/). We had to allow the user to create a post with a title, a name and a body which does not require any login. Once they hit publish, the post should be stored in a database.

## Installation & Usage

### Docker

- In the **root directory**, run `bash _scripts/startDev.sh`. This should install all required dependencies (if not installed already) and make the application available on port `8080`

### Usage

- To use the program, run the above command and go to `localhost:8080`

- To remove all docker instances, run `bash _scripts/teardown.sh`

## Technologies

- HTML / CSS

- JavaScript

- Docker

- Postgres

- Node.js

- Express.js

- Cors

- Nodemon

## Changelog

- Successfully got the server to run

- Added a database schema and Post model file

- Completed the post model file

- Linked Postgres to work as expected

- Started the front end design

- Fetched the required routes to allow users to interact with the database

## Bugs

- Couldn't run port `8080` as intended

## Wins & Challenges

### Wins

- Routes worked successfully

- POSTing and GETing worked from a Postgres database

### Challenges

- Couldn't get the post content to render inside the form input boxes
