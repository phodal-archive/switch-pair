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
        //var results = [];
        //_.each(pairs, function(each_pair){
        //    var pair_info = [];
        //    userMapper.getAccountById(each_pair["pair_1"], function(result){
        //        pair_info.push(result);
        //    });
        //    console.log(pair_info);
        //});
        res.send(results);
        next();
    });
};

module.exports = PairService;
