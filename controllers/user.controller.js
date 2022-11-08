const db = require("../models");
const User = db.users;
const Message = db.messages;

//POST / CREATE a new User

exports.create = (req, res) => {
    //Save to MySQL database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then (user =>{ 
        res.send(user);
    })
    .catch((err) => {
        console.log(">> Error while creating user : ", err);
    });
};

// GET / READ all Users 
exports.findAll = (req, res) => {
    User.findAll({
        include: ["messages"],
    }).then(users => {
        // Send all users to Client
        res.send(users);
    });
};
// FIND a user by Id (GET/READ)
exports.findByPk = (req, res) => {
    User.findByPk(req.params.userId, {
      include: ["meqqages"],
    }).then(user => {
      res.send(user);
    })
  };

// UPDATE a User by Id (PUT/ UPDATE)
exports.update = (req, res) => {
    const id = req.params.userId; 
    User.update( { username: req.body.username, email: req.body.email },
        { where: {id: req.params.userId} }
        ).then(() => {
            res.status(200).send({message: 'updated successfully a user with id = ' + id});
        });
};
// DELETE a User by <id (DELETE/DELETE)
exports.delete = (req, res) => {
    const id = req.params.userId; 
    User.destroy({
        where: { id: id }
    }).then(() => {
            res.status(200).send({message: 'deleted successfully a user with id = ' + id});
        });
};
