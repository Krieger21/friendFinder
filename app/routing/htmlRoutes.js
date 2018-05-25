var express = require("express");
var app = express();
var path = require("path");

var htmlRoute = app.get("/", function(req, res){
	res.sendFile(path.join("/Users/coltenkrieg/Desktop/friendFinder/app/public/home.html"));
});

var surveyRoute = app.get("/survey", function(req, res){
	res.sendFile(path.join("/Users/coltenkrieg/Desktop/friendFinder/app/public/survey.html"));
});

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/", function(req, res){
        res.sendFile(path.join("./app/public/home.html"));
    });

	// fallback use route for homepage
	app.get("/survey", function(req, res){
        res.sendFile(path.join("./app/public/survey.html"));
    });
};