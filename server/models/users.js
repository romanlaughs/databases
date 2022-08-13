var db = require('../db');
var messageTable = require('./messages');

module.exports = {
  getAll: function (cb) {
    db.connect(function( err) {
      if (err) {
        console.log(err, 'error/////////////////////////////////////');
      } else {
        //let request = new db.Request();
        db.query('SELECT * FROM users', function(err, data) {
          if (err) {
            cb(err, 'error /////////////////////////////////');
          } else {
            console.log('User successful connect', data);
            //console.log('HERES THE DATA: ', data);
            cb(null, data);
          }
        });
      }
    });

  },
  create: function (input, cb) {
    //console.log(input);
    db.connect(function( err) {
      if (err) {
        console.log(err, 'error/////////////////////////////////////');
      } else {
        //let request = new db.Request();
        db.query(`insert into users (username) values ('${input.username}');`, function(err, data) {
          if (err) {
            cb(err, '/////////////////////////////////');
          } else {
            console.log('models users create successful ////////////////');
            cb(null, data);
          }
        });
      }
    });
  }
};
