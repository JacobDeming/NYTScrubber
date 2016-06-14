var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

var options = {
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    }
};

var mongodbUri = 'mongodb://TKC:latvinia@ds013584.mlab.com:13584/nyt_saved';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    app.use(express.static(__dirname + '/public'));
    var port = process.env.PORT || 3000;

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: 'application/vnd.api+json'
    }));

    var routes = require('./routes.js');

    app.use('/', routes);
    app.use('/save', routes);
    app.use('/fetch', routes);
    app.use('/delete', routes);

    app.listen(port, function() {
        console.log("lisenting on port:" + port);
    });
});