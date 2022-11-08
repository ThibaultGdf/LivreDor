module.exports = (app) => {
    const messages = require('../controllers/message.controller.js');

    //Create a new Message
    app.post('/messages/index', messages.create);

    //Retrieve all Message
    app.get('/messages/index', messages.findAll);

    //Retrieve a single Message by Pk
    app.get('/messages/:messageId', messages.findByPk);
     
    //Update a Message with Id
    app.put('/messages/:messageId', messages.update);

    //Delete a Message with Id
    app.delete('/messages/:messageId', messages.delete);
}