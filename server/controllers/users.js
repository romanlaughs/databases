var models = require('../models');
var corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};
var Promise = require('bluebird');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        res.status(400).send(err, ' controllers users error////////////////////////');
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: function (req, res) {
    let userName = req.body;
    console.log(req.body);
    models.users.create(userName, (err, data) => {
      if (err) {
        res.status(400).send(err, 'error////////////////////////');
      } else {
        res.status(201).send('success');
      }
    });
  }
};
