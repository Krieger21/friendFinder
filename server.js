var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes")(app)

// Sets up the Express app to handle data parsing

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

