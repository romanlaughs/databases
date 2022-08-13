var db = require('../db');


module.exports = {
  getAll: function (cb) {
    //access database
    // return

    db.connect(function( err) {
      if (err) {
        console.log(err, '/////////////////////////////////////');
      } else {
        //let request = new db.Request();
        db.query('SELECT * FROM messages', function(err, data) {
          if (err) {
            console.log(err, '/////////////////////////////////');
          } else {
            console.log('Messages successful connect', '/////////////////////');
            console.log(data);
            cb(null, data);
          }
        });
      }
    });


  }, // a function which produces all the messages
  create: function (bigAssObject, cb) {
    //console.log('OBJECT ', bigAssObject);
    db.connect(function( err) {
      if (err) {
        console.log(err, 'models messages connect /////////////////////////////////////');
      } else {
        //let request = new db.Request();
        db.query(`insert into messages (text, userID, roomname) values ('${bigAssObject.message}', (select id from users where username = '${bigAssObject.username}'), '${bigAssObject.roomname}');`, function(err, data) {
          if (err) {
            // console.log(data);
            // console.log(err);
            cb(err, ' models messages query ////////////////////////////////');
          } else {
            console.log('THIS IS HERE NOW');
            cb(null, data);
          }
        });
      }
      //assuming we take in an object {username: blah, text: hello there, roomname: tattooine}

    }); // a function which can be used to insert a message into the database
  }
};