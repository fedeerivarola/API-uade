var User = require('../models/User');
    
let getUsers = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Users.find()
    .then
    (
        (listaUsers)=>
        {
            res.send(listaUsers); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    )       
};

let loginUser = (req, res) =>
{
    // console.log(req.body);
    User.findOne({username: req.body.username, password: req.body.password})
    .then(
        (user)=>
        {
            if(user == null){;
                res.status(400).send({err: "user not found"});
                return
            }
            res.status(200).send(user); //devuelvo resultado query       
        },
        (err)=>{res.status(500).send(err);}
    )       
};



let createUser = (req,res) =>
{
    console.log(req.body);
    User.findOne({username: req.body.username})
    .then(
        (user)=>{
            if(user != null){
                res.status(400).send({err: "Username already exists"})
                return
            }
            let newUser = User({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            });
            newUser.save()
            .then(
                (newUser)=>
                {
                    res.status(200).send(newUser); //devuelvo resultado query       
                },
                (err)=>{console.log(err);}
            ) 
        },
        (err)=>console.log(err)
    )
}

module.exports = {getUsers,createUser, loginUser};

