//message.controller.js
const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Message = db.messages;

//Post a Message
exports.create = (request, response) => {
    //Save to MySQL database
    Message.create({
        content: request.body.content,
        userId: request.body.userId
    }).then(message => {
        response.send(message);
    });
};

//FETCH all Messages
exports.findAll = (request, response) => {
    Message.findAll({
        include: ["user"]
    }).then(messages => {
        response.send(messages);
    });
};

//Find a Message by Id
exports.findByPk = (request, response) => {
    Message.findByPk(request.params.messageId, {
        include: ["user"]
    }).then(message => {
        response.send(message);
    });
};

exports.update = (request, response) => {
    const id = request.params.messageId;
    Message.update({
        content: request.body.content
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a message with id = ' + id
        });
    });
};

//Deleted a Message by Id
exports.delete = (request, response) => {
    const id = request.params.messageId;
    Message.destroy({
        where: {
             id: id 
            }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a message with id = ' + id
        });
    });
};