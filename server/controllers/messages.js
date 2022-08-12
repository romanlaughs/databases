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
    if ( req.method === 'GET') {
      var iSwear = new Promise((resolve, reject) => {
        models.messages.getAll((err, result) => {
          if (err) {
            reject('////////////////////////////////////////// reject error');
          } else {
            resolve(result);
          }
        });
      });
      iSwear.then(data => {
        res.writeHead(200, corsHeaders);
        res.end(JSON.stringify(models.messages.getAll(data)));
      });
    } else {
      writeHead(404, corsHeaders);
      res.end('not found /////////////////////////////////// 404');
    }
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let messageText = '';

    if (req.method === 'POST') {
      req.on('data', (chunk) => {
        console.log(chunk, 'binary //////////////////');
        result += chunk.toString();
      }).on('end', () => {
        response.writeHead(201, corsHeaders);
        // do a sql thing here??
        // let thing = 'INSERT into (table?)' + 'VALUES ' + result;
        messageText.parse();
        // res.end(models.create(messageText));
        res.end('ended, but nothing happened yet');
      });
    } else {
      writeHead(404, corsHeaders);
      res.end('not found');
    }
  } // a function which handles posting a message to the database
};
