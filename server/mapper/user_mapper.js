var _               = require('underscore');
var DBPrototype     = require('./db_prototype');

function UserMapper() {
    'use strict';
    return;
}

UserMapper.prototype = new DBPrototype();

UserMapper.prototype.getAccountById = function (user_id, callback) {
    'use strict';
    var sql = "SELECT id,name,dev,new,pic_url FROM user WHERE id = " + user_id;
    UserMapper.prototype.basic(sql, callback);
};

UserMapper.prototype.findAllAccount = function (callback) {
    'use strict';
    var sql = "SELECT id,name,dev,new,pic_url FROM user";
    UserMapper.prototype.basic(sql, callback);
};

module.exports = UserMapper;
