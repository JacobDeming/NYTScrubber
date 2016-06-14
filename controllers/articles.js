var Article = require('../models/Articles.js');

exports.save = function(data, cb) {
  console.log(data);
    var newArticle = new Article({
        title: data.title,
        date: data.date,
        url: data.url
    });
    newArticle.save(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            cb(doc);
        }
    });
};

exports.fetch = function(cb) {
    Article.find().sort({
        _id: -1
    }).exec(function(err, doc) {
        cb(doc);
    });
};

exports.delete = function(data, cb) {
    console.log(data);
    Article.remove({
        title: data.title,
        date: data.date,
        url: data.url
    }, function(err, removed) {
        if (err) {
            console.log(err);
        } else {
            console.log("Delete Sucessful");
            cb(removed);
        }
    });
};