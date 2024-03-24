var express = require('express');
var router = express.Router();

const userModel = require("./users")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get("/",async function(req,res){

   const createdUsers= await userModel.create({
    username: 'Ashura',
    age : 3000,
    name: 'Ashura' 
   })

   res.send(createdUsers);
})


router.get("/create", async function(req,res){


  const newUsers = await userModel.create({

    username : "Deva",
    name: 'Deva',
    age: '5000'
     
  })

  res.send(newUsers)
})

//find and display all users

    router.get("/allusers", async function(req,res){

      let searchedUsers = await userModel.find();

      res.send(searchedUsers)
    })



    router.get("/oneuser", async function(req,res){

      let oneUser = await userModel.findOne({
        username: "Deva"
      })

      res.send(oneUser)
    })


    //deleting users/schema from db... userModel.findOneAndDelete({key: value})

    router.get("/delete", async function(req,res){

      let deletedUsers = await userModel.findOneAndDelete({
        username : "Ashura"
      })

      res.send(deletedUsers)
    })

module.exports = router;
