var db = require('../db');
var messageTable = require('./messages');

module.exports = {
  getAll: function () {},
  create: function (username) {
    console.log(username);
    db.query(`insert into users (username) values ('${username.name}');`, function(err) {
      if (err) {
        console.log(err, '/////////////////////////////////');
      } else {
        console.log('successful connect', '/////////////////////');
      }
    });
  }
};
