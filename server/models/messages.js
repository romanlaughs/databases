var db = require('../db');


module.exports = {
  getAll: function () {
    //access database
    // return

    db.connect(function( err) {
      if (err) {
        console.log(err, '/////////////////////////////////////');
      } else {
        //let request = new db.Request();
        db.query('SELECT text FROM messages', function(err, recordSet) {
          if (err) {
            console.log(err, '/////////////////////////////////');
          } else {
            console.log('successful connect', '/////////////////////');
            console.log(recordSet);
            return recordSet;
          }
        });
      }
    });


  }, // a function which produces all the messages
  create: function (input) {
    db.connect(function( err) {
      if (err) {
        console.log(err, '/////////////////////////////////////');
      } else {
        //let request = new db.Request();
        console.log('THIS IS THE INPUT DATA: ');
        console.log(input);

      }
      //assuming we take in an object {username: blah, text: hello there, roomname: tattooine}

    }); // a function which can be used to insert a message into the database
  }
};