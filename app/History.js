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

        save: function (data) {
            var results = [];
            var lastId = [];
            this.data = data;
            _.each(data, function(pair){
                results.push({"pair_id":pair["pair_id"], "pair_info":pair["pair"]});
                lastId.push(pair["pair"][0]["id"]);
            });
            Storage.save("lbs_info", JSON.stringify(results));
            Storage.save("lbs_last_id", JSON.stringify(lastId));
        },

        getData: function() {
            return Storage.load("lbs_info");
        },

        getLastId: function(){
            return $.parseJSON(Storage.load("lbs_last_id"));
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
