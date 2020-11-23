const express = require('express');
const app = express();

//DB Connection
require("./model/database")()

//controller
const todoController = require("./controllers/todoController")

//Template Engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//routes
todoController(app);

//listening
app.listen(4000, () => console.log("Connected!"));
