'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  user_id: {
    type: String,
    required: 'Kindly enter the referred user id'
  },
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);