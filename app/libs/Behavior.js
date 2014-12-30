var factory = function(
    _,
    $
) {
    var Behavior = function () {
        this.initialize.apply(this, arguments);
    };

    Behavior.prototype.data =[];

    _.extend(Behavior.prototype, {
        initialize: function(members) {
            this.members = members;
        },
        randomColor: function(data) {
            var back = ["blue", "gray", "yellow", "red", "purple"];
            var rand = back[Math.floor(Math.random() * back.length)];
            $("." + data["id"]).css('background', rand);
        },
        addImage: function (data) {
            var img = "<img src=" + data["pic_url"] + "/>";
            $(img).appendTo("#senior");
        },
        addSenior: function(data) {
            var items = [];
            $.each(data, function (key, val) {
                if(key === "name" || key ==="id"){
                    items.push(" " + val);
                };
                if(key === "point"){
                    items.push(" " + val["count"]);
                };
            });

            $("<li/>",
                {
                    "class": data["id"],
                    html: items.join("")
                }
            ).appendTo("#senior");
            //addImage(data);
        },
        addJunior: function(data) {
            var items = [];
            $.each(data, function (key, val) {
                if(key === "name" || key ==="id"){
                    items.push(" " + val);
                }
                if(key === "point"){
                    items.push(" " + val["count"]);
                };
            });

            $("<li/>",
                {
                    "class": data["id"],
                    html: items.join("")
                }
            ).appendTo("#junior");
            //randomColor(data);
        },
        showLast: function(data){
            var items = [];
            $.each(data, function (key, val) {
                var names = [];
                _.each(val["pair_info"], function(pair){
                    names.push(pair["name"]);
                });
                items.push(names);
            });

            $("<li/>",
                {
                    html: items.join("<br/>")
                }
            ).appendTo("#last");
        }
    });
    return new Behavior();
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
