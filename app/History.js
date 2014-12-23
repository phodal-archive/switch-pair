var factory = function(
    _,
    Storage
) {
    var History = function (members) {
        this.initialize.apply(this, arguments);
    };

    History.prototype.data =[];

    _.extend(History.prototype, {
        initialize: function(members) {
            this.members = members;
        },
        loadData: function(data) {
            this.data = data;
            return this;
        },
        save: function (data) {
            _.each(data, function(pair){
                Storage.save("pair_id_" + pair["pair_id"], JSON.stringify(pair["pair"]));
            });
        }
    });
    return new History();
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
