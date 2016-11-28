# SNTD Playlist

### Technologies Used
- Node.js : JavaScript server side platform the web application.
- Express.js : Light Node.js fraemwork for creating web application.
- React.js : Front-end Node.js library used to build user interfaces.
- Socket.io : JavaScript library for realtime web application capable of realtime, bi-directional communication between web clients and servers. Used to create chatroom.
- PostgreSQL : Relational Database Management System used to store data for the web application using pg-promise module to interact with the RDMS.
- Webpack : Module bundler which compiles required modules with dependencies and generate as a static asset.
- Heroku : Deploy the web application.
- Itunes API & Youtube API

#### Installation Instructions
- `git clone https://github.com/ga-diamonds-project3/project-3.git`
- `npm install`
- `createdb <name for db>` 
  - in the root directory (must have psql installed)
- `psql -d <name for db> -f ./db/schema.sql`
- `psql -d <name for db> -f ./db/seeds.sql`
- `touch .env`

  Inside the .env file : 
  - `PG_HOST=localhost`
  - `PG_PORT=5432`
  - `PG_DATABASE=<name of db>`
  - `PG_DATABASE=<username>`
  - `PG_PASSWORD=<psql pw>`
- `npm run watch`
- `npm start` on another instance of terminal

## Approaches

### Wireframe
![Wireframe](https://git.generalassemb.ly/storage/user/30/files/ae288ea4-b00d-11e6-8fa8-385cf6f1fe5c)

### User Stories
- As an user, I want to see my playlist that I've saved before.
- As an user, I want to search albums by artists' name.
- As an user, I want to see list of songs of specified album when clicked on album img.
- As an user, I want to see music video of specified song.
- As an user, I want to add a song to my playlist.
- As an user, I want to share my playlist and/or import someone else's playlist.
- As an user, I want to delete songs in my playlist.

## Unsolved Problems
x  The web app does not authenticate users and doesn't support signup and login.

x  As of now, the web app automatically fetches all music videos which slows down the applicaiton.

x  The web app does not support users to export and import playlist.
