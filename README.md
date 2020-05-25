# GitHub users search

GitHub user search project and their repositories use REST API GitHub. You can add the repository to you list of favorite repositories and save it in the MongoDB database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run webpack-devserver`

Runs the app in the development mode from `.../server` - directory. `Server side`<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

**The application use Cloud MongoDB database.**

Create a new database in `https://account.mongodb.com/account/login` called `githubUsersFavoriteRepos` or change database name to your own in the configurations `.../etc/config.json` row - `db : { name : yourName }`<br/>
You must create collections in database - `repositories` or change collection name to your own in the  `.../server/models/Repositories.js`.