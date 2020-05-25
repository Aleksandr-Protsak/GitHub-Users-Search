const express = require( 'express' );
const db = require( './db' );
const session = require( 'express-session' );
const MongoStore = require( 'connect-mongo' )( session );
const bodyParser = require( 'body-parser' );
const config = require( '../etc/config.json' );
const cors = require( 'cors' );

const controller = require( './controller/controller' );

const app = express();

app.use(session({
  store: new MongoStore({ url: 'mongodb://localhost/employees' }),
  secret: 'QwqYTDHJGDhGHGSDJghhsdghjGJHGdJH',
  saveUninitialized: false,
  resave: false
}));

app.use( bodyParser.json() );
app.use( express.static(__dirname) );
app.use( cors({ 
                origin: 'http://localhost:3000',
                credentials: true 
              }) 
        );

db.connect( 
  `mongodb+srv://${config.main.name}:${config.main.password}@cluster0-n8keq.mongodb.net/${config.db.name}?retryWrites=true&w=majority`, 
  {useNewUrlParser: true},
  (err) => {
      if(err) return console.log( err );
      app.listen( config.serverPort, () => {
        console.log( `Server listen on port: ${config.serverPort}` );
      });
  }
);

app.post( "/", ( req, res ) => {
    controller.addRepositories( req.body ).then( data => res.send( data ) );
});

app.get( "/", ( req, res ) => {
  controller.getRepositories().then( data => res.send( data ) );
});

app.delete( '/:id', ( req, res ) => {
  controller.removeRepositories( req.params.id ).then( data => res.send( data ) );
});