import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//ref: https://scotch.io/tutorials/learn-meteor-js-from-scratch-build-a-polling-app

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  var date = new Date();
  var m = [];
  m[0] = "January";
  m[1] = "February";
  m[2] = "March";
  m[3] = "April";
  m[4] = "May";
  m[5] = "June";
  m[6] = "July";
  m[7] = "August";
  m[8] = "September";
  m[9] = "October";
  m[10] = "November";
  m[11] = "December";
  this.month = m[date.getDate() + 1];
  this.counter = new ReactiveVar(0);
});

Template.body.helpers({

  polls: function() {
    return Polls.find();
  }

});
