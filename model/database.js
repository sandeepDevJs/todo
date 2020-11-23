const mongoose = require("mongoose");

//mongo atlas connection
module.exports = function(){

    mongoose.connect("ADD MONGODB CONNECTION STRING HERE!!!")
        .then(() => console.log("Connected To Db!!"))
        .catch((err) => console.log(err));

}
