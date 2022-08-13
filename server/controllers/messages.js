var models = require('../models');
var corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};
var Promise = require('bluebird');
var db = require('../db');

module.exports = {
  get: function (req, res) {
    db.Message.findAll({include: [User]})
      .complete(function(err, results) {
        res.json(results);
      });

    // models.messages.getAll((err, data) => {
    //   if (err) {
    //     res.status(400).send(err, 'error////////////////////////');
    //   } else {
    //     res.status(200).send(data);
    //   }
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    db.User.findOrCreate({username: req.body[username]})
      .complete(function(err, user) {
        var items = {
          text: req.body[text],
          userid: user.id,
          roomname: req.body[roomname],
        };
        Message.create(items)
          .complete(function (err, results) {
            res.sendStatus(201);
          });

      });



    // console.log(req.body);
    // models.messages.create(req.body, (err, data) => {
    //   if (err) {
    //     res.send(err, 'error////////////////////////');
    //   } else {
    //     res.status(201).send('success');
    //   }
    // });
  } // a function which handles posting a message to the database
};
