var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('pair', {
        id: { type: 'int', primaryKey: true },
        pair_1: type.INTEGER,
        pair_2: type.INTEGER
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('pair', callback);
};
