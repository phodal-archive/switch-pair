var factory = function(
    _
) {
    var Role = function () {

    };

    _.extend(Role.prototype, {
        initialize: function() {

        },
        getDev: function(members){
            var results = [];
            _.each(members, function(member){
                if(member.dev){
                    results.push(member);
                }
            });
            return results;
        },

        getNewMember: function(members){
            var results = [];
            _.each(members, function(member){
                if(member.new){
                    results.push(member);
                }
            });
            return results;
        },

        getOldMember: function(members){
            var results = [];
            _.each(members, function(member){
                if(!member.new){
                    results.push(member);
                }
            });
            return results;
        }
    });
    return new Role();
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
