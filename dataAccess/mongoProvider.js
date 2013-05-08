/**
* Provides access to a MongoDb instance.
**/

var mongo = require('mongodb-wrapper');
var config = require('../config/config');

Store = function () {

    this.db = mongo.db(config.db.host, config.db.port, config.db.database);

}

Store.prototype.newPage = function (page, callback) {

    this.db.collection('pages').insert(page, function (err, result) {
        if (err) callback(err);
        else callback(null, result);
    });

};

Store.prototype.getAll = function (callback) {

    this.db.collection('pages').find().toArray(function (err, result) {
        if (err) callback(err);
        else callback(null, result);

    });
};

exports.store = Store;