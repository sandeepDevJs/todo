const bodyParser = require("body-parser");
const urlEncoder = bodyParser.urlencoded({extended:true});
let todos = [ "get milk", "walk dog" ]

module.exports = function (app) {
    
    app.get("/todo", (req, res) => {
        res.render("todo", {todos: todos})
    })

    app.post("/todo", urlEncoder, (req, res) => {
        todos.push(req.body.data);
        console.log(req.body.data);
        res.end();
    })

    app.delete("/todo", urlEncoder, (req, res) => {
        todos = todos.filter((todo) => {
            return todo !== req.body.data.trim()
        })
        res.end();
    })


}