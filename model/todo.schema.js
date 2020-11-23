const mongoose = require("mongoose");
todoSchema = mongoose.Schema({
    todo: {type:String, required:true}
})

module.exports = mongoose.model("todo", todoSchema);