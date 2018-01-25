'use strict';
var mongoose = require('mongoose');
const uuidv4 = require('node-uuid');
var Schema = mongoose.Schema;

var redeliverySchema = new Schema({
    cardId: {
        type: String
    },
    parcelId: {
        type: String
    },
    addressNo: {
        type: Number
    },
    latestScan: {
        type: Date,
        default: Date.now
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        default: uuidv4()
    }
});

module.exports = mongoose.model('Redeliveries', redeliverySchema);