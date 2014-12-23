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
            var results = [];
            _.each(data, function(pair){
                results.push({"pair_id":pair["pair_id"], "pair_info":pair["pair"]});
            });
            Storage.save("lbs_info", JSON.stringify(results));
        },
        getData: function(){
            return Storage.load("lbs_info");
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
