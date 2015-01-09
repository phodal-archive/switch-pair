var factory = function(
    _
) {
    var Storage = function () {
        this.initialize.apply(this, arguments);
    };

    _.extend(Storage.prototype, {
        initialize: function(members) {
            this.members = members;
        },
        load: function(key) {
            return localStorage.getItem(key);
        },
        save: function (key, value) {
            localStorage.setItem(key, value);
        }
    });
    return new Storage();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("jquery")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "jquery"
    ], factory);
}
