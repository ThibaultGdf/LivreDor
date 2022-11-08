//user.route.js
module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    //Create a new User
    app.post('/users/index', users.create);

    //Retrieve all User
    app.get('/users/index', users.findAll);

    //Retrieve a single User by Pk
    app.get('/users/:userId', users.findByPk);
     
    //Update a User with Id
    app.put('/users/:userId', users.update);

    //Delete a User with Id
    app.delete('/users/:userId', users.delete);
}