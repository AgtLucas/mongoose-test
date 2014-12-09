'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongotest');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  var kittySchema = mongoose.Schema({
    name: String
  });

  var Kitten = mongoose.Model('Kitten', kittySchema);

  var silence = new Kitten({name: 'Silence'});
  silence.save(function (err) {
    if (err)
      console.error('Meow');
  })
  console.log(silence.name);
});