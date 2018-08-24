const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main Route
app.get("/", (req, res) => {
  res.render("index");
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
