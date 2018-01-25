'use strict';

var mongoose = require('mongoose'),
ObjectId = mongoose.Schema.Types.ObjectId,
Redelivery = mongoose.model('Redeliveries');


exports.list_all_redeliveries = function(req, res) {
    Redelivery.find({}, function(err, redelivery) {
        if (err)
            res.send(err);
        res.json(redelivery);
    });
};

exports.create_a_redelivery = function(req, res) {
    var new_redelivery = new Redelivery(req.body);
    new_redelivery.save(function(err, redelivery) {
        if (err)
            res.send(err);
        res.json(redelivery);
    });
};

exports.read_a_redelivery = function(req, res) {
    Redelivery.find({cardId: req.params.cardId}, function(err, redelivery) {
        if (err) return res.send(err);

        res.json(redelivery);
    });
};


exports.update_a_redelivery = function(req, res) {
    Redelivery.findOneAndUpdate({ cardId: req.params.cardId}, req.body, {new: true}, function(err, redelivery) {
        if (err)
            res.send(err);
        res.json(redelivery);
    });
};


exports.delete_a_redelivery = function(req, res) {


    Redelivery.remove({
        cardId: req.params.cardId
    }, function(err, redelivery) {
        if (err)
            res.send(err);
        res.json({ message: 'Redelivery successfully deleted' });
    });
};