var _               = require('underscore');
var DBPrototype     = require('./db_prototype');

function PairMapper() {
    'use strict';
    return;
}

PairMapper.prototype = new DBPrototype();

PairMapper.prototype.findAllPair = function (callback) {
    'use strict';
    var sql = "SELECT id,pair_1,pair_2 FROM pair";
    PairMapper.prototype.basic(sql, callback);
};

module.exports = PairMapper;
