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

    var getEachPairInfo = function (each_pair, callback) {
        userMapper.getAccountById(each_pair["pair_1"], function (result) {
            callback(result);
        });
    };

    var getAllPairInfo = function(data, callback){
        var results = [];
        data.forEach(function(value, index) {
            getEachPairInfo(data[index], function(result){
                results.push(result);
            });
        });
        callback(results);
    };

    pairMapper.findAllPair(function (data) {
        getAllPairInfo(data, function(result){
            res.send(result);
            next();
        });
    });
};

module.exports = PairService;
