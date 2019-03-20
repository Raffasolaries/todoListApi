const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors');
const Task = require('./api/models/todoListModel'); // created model loading here
const jwt = require('./api/_helpers/jwt');
const errorHandler = require('./api/_helpers/error-handler');


  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/Tododb', {useNewUrlParser: true}); 
mongoose.connect('mongodb://127.0.0.1/Tododb', {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


exports.test = function(req,res) {
  res.render('test');
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./api/controllers/users.controller'));

// global error handler
app.use(errorHandler);

/* app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
}); */

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);

// console.log('mongoose connection', mongoose.connection.readyState);
console.log('todo list RESTful API server started on: ' + port);