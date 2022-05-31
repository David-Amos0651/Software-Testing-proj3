'use strict';

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/gradeCalculator",
  {useNewUrlParser: true}
);
const db = mongoose.connection;
const GradeInput = require("./models/gradeInput")

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' );

app.use(
    express.urlencoded({
        extended: false
        })
    );
app.use(express.json());
app.set( 'port', process.env.PORT || 3000 );

app.set( 'view engine', 'ejs' );
app.use( layouts );
app.use( express.static( 'public' ) );

app.get( '/', function( req, res )  {
  res.render( 'index' );
} );

app.get('/courses', homeController.showCourses);
app.post ('/newcourse', homeController.addCourses, homeController.showCourses);
app.get('/newcourse', homeController.getNewCourse);

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
