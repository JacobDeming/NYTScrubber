var express = require('express');
var router = express.Router();
var articles = require('./controllers/articles.js')

router.get('/', function(req, res) {
    res.render('./public/index.html');});

router.get('/fetch', function(req,res) {
    articles.fetch(function(data){
    	res.json(data);})});

router.post('/save', function(req, res) {
	console.log(req.body);
    articles.save(req.body, function(data) {});});

router.post('/delete', function(req,res){
	console.log(req.body);
	articles.delete(req.body,function(data){});});

module.exports = router;