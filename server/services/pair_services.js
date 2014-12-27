var PairMapper = require("./../mapper/pair_mapper");
var pairMapper = new PairMapper();
var UserMapper = require("./../mapper/user_mapper");
var userMapper = new UserMapper();
var _          = require("underscore");

function PairService() {
    'use strict';
    return;
}

PairService.prototype.findLastPair = function (req, res, next) {
    'use strict';
    pairMapper.findAllPair(function (results) {
        res.send(results);
        next();
    });
};

module.exports = PairService;
