const bodyParser = require("body-parser");
const urlEncoder = bodyParser.urlencoded({extended:true});

//todo model
const todos = require("../model/todo.schema");

module.exports = function (app) {
    
    //Get Todos
    app.get("/todo", async (req, res) => {
        let data = await todos.find({}, { _id: 0 })
        res.render("todo", {todos: data})
    })

    //create todo
    app.post("/todo", urlEncoder, (req, res) => {
        new todos({ todo : req.body.data.trim() }).save()
        res.end();
    })

    //delete Todo
    app.delete("/todo", urlEncoder, async (req, res) => {
        await todos.remove({todo: req.body.data.trim()});
        res.end();
    })


}