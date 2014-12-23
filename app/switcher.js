var factory = function(
    _,
    Storage
) {
    var Switcher = function () {
        this.initialize.apply(this, arguments);
    };

    _.extend(Switcher.prototype, {
        randomSenior: [],
        juniorDev: [],

        initialize: function() {
        },

        auto: function(member) {
            var n = member.length;
            var tempArr = [];
            for (var i = 0; i < n - 1; i++) {
                tempArr.push(member.splice(Math.floor(Math.random() * member.length), 1)[0]);
            }
            tempArr.push(member[0]);
            return tempArr;
        },

        saveItem: function(senior, junior){
            Storage.save("randomSenior", senior);
            Storage.save("juniorDev", junior);
        }
    });

    return new Switcher();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore"),
        require("Storage")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore",
        "Storage"
    ], factory);
}
