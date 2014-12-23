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
            var randomMember = _.sample(members, members.length);
            this.switch = randomMember;
            return this;
        },

        getIds: function (members) {
            var ids = [];
            _.each(members, function(member){
                ids.push(member["id"]);
            });
            return ids;
        },

        withLast: function(lastIDs){
            var newIDs = this.getIds(this.switch);
            console.log(newIDs);
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
