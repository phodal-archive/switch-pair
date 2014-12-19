var factory = function(
    _
) {
    var Switcher = function () {
        this.initialize.apply(this, arguments);
    };

    _.extend(Switcher.prototype, {
        initialize: function(member) {
            this.member = member;
        },
        auto: function(){

        }
    });
    return new Switcher();
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(
        require("underscore")
    );
} else if (typeof define !== "undefined") {
    define([
        "underscore"
    ], factory);
}
