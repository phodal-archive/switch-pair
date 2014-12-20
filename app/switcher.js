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
        auto: function(member){
            var n = member.length;
            var tempArr = [];
            for ( var i = 0; i < n-1; i++ )
            {
                tempArr.push(member.splice(Math.floor(Math.random()*member.length),1)[0]);
            }
            tempArr.push(member[0]);
            return tempArr;
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
