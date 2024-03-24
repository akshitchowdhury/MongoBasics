const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ashuradb")


//Make Schema (in Db it will form as Documents)

const userSchema = mongoose.Schema(
    {
        username: String,
        name: String,
        age: Number 
    }
)

//Make Mode(in Db it will form as Collection)...
//mongoos.model("name of your collection", name of your Schema)

module.exports =  mongoose.model("users", userSchema) //exporting this model