var factory = function(
    _,
    Storage
) {
    var Switcher = function () {
        this.initialize.apply(this, arguments);
    };

    Switcher.prototype.switch = [];
    Switcher.prototype.members = [];
    _.extend(Switcher.prototype, {
        randomSenior: [],
        juniorDev: [],

        initialize: function() {
        },

        auto: function(members) {
            this.members = members;
            var n = members.length;
            var tempArr = [];
            for (var i = 0; i < n - 1; i++) {
                tempArr.push(members.splice(Math.floor(Math.random() * members.length), 1)[0]);
            }
            tempArr.push(members[0]);
            this.switch = tempArr;
            return this;
        },

        withLast: function(data){
            return this.switch;
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
