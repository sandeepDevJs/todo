const mongoose = require("mongoose");
module.exports = function(){

    mongoose.connect("mongodb+srv://test:test@cluster0.8fnai.mongodb.net/Cluster0?retryWrites=true&w=majority")
        .then(() => console.log("Connected To Db!!"))
        .catch((err) => console.log(err));

}
