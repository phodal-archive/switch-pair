var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('user', {
        id: { type: 'int', primaryKey: true },
        name: type.STRING,
        dev: type.BOOLEAN,
        new: type.BOOLEAN,
        pic_url: type.STRING
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('user', callback);
};
