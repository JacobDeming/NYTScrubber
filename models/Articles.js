var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
      type: String,
      required: true},
    date:{
      type: String,
      required: true},
    url:{
    	type: String,
    	required: true}});


var Article = mongoose.model('article', ArticleSchema);
module.exports = Article;