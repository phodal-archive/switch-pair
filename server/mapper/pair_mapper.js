var _               = require('underscore');
var DBPrototype     = require('./db_prototype');

function PairMapper() {
    'use strict';
    return;
}

PairMapper.prototype = new DBPrototype();

PairMapper.prototype.findAllPair = function (callback) {
    'use strict';
    var sql = "SELECT * FROM user WHERE (id == (SELECT pair_2 FROM pair)) OR (id == (SELECT pair_1 FROM pair))";
    PairMapper.prototype.basic(sql, callback);
};

module.exports = PairMapper;
