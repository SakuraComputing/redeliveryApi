'use strict';
module.exports = function(app) {
    var redeliveries = require('../controllers/redeliveryController');

    // redeliveries Routes
    app.route('/redeliveries')
        .get(redeliveries.list_all_redeliveries)
        .post(redeliveries.create_a_redelivery);

    app.route('/redelivery/:cardId')
        .get(redeliveries.read_a_redelivery)
        .put(redeliveries.update_a_redelivery)
        .delete(redeliveries.delete_a_redelivery);
};

