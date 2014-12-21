var factory = function(
    _
) {
    var Role = function (members) {
        this.initialize.apply(this, arguments);
    };

    _.extend(Role.prototype, {
        initialize: function(members) {
            this.members = members;
        },
        getDev: function(){
            var results = [];
            _.each(this.members, function(member){
                if(member.dev){
                    results.push(member);
                }
            });
            return results;
        },

        getSenior: function(){
            var results = [];
            _.each(this.members, function(member){
                if(!member.new){
                    results.push(member);
                }
            });
            return results;
        },

        getJunior: function(){
            var results = [];
            _.each(this.members, function(member){
                if(member.new){
                    results.push(member);
                }
            });
            return results;
        },

        getSeniorNumber: function(){
            var num = 0;
            _.each(this.members, function(member){
                if(member.new === false){
                    num = num + 1;
                }
            });
            return num;
        },

        getJuniorNumber: function(){
            var num = 0;
            _.each(this.members, function(member){
                if(member.new === true){
                    num = num + 1;
                }
            });
            return num;
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
    return Role;
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
