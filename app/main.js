define(["jquery", "underscore", "Role", "Switcher", "Behavior", "History"], function($, _, Role, Switcher, Behavior, History) {

    $.getJSON("last.json", function (data) {
        History.save(data);
    });

    $.getJSON("data.json", function (data) {
        var role = new Role(data);
        var allDev = role.getDev();
	    var isEnoughPair = role.getSeniorNumber(allDev) - role.getJuniorNumber(allDev);
        if(isEnoughPair <= 2){
            var seniorDev = role.getSenior(allDev);
            var juniorDev = role.getJunior(allDev);
            var randomSenior = Switcher.auto(seniorDev);
            _.each(randomSenior, Behavior.addSenior);
            _.each(juniorDev, Behavior.addJunior);
        }
    });
});
