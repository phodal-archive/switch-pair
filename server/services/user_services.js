var UserMapper = require("./../mapper/user_mapper");
var db        = new UserMapper();

function UserServices() {
    'use strict';
    return;
}

UserServices.prototype.getAccountById = function (req, res, next) {
    'use strict';
    var userId = req.params.id;
    db.getAccountById(userId, function (result) {
        res.send(result);
        next();
    });
};

UserServices.prototype.findAllAccount = function (req, res, next) {
    'use strict';
    db.findAllAccount(function (result) {
        res.send(result);
        next();
    });
};

module.exports = UserServices;
