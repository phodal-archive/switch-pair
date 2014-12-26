define(["jquery", "underscore", "Role", "Switcher", "Behavior", "History", "../config"], function($, _, Role, Switcher, Behavior, History, CONFIG) {
    $.getJSON("last.json", function (data) {
        History.save(data);
        Behavior.showLast(JSON.parse(History.getData()));
    });

    $.getJSON(CONFIG["all"], function (data) {
        var role = new Role(data);
        var allDev = role.getDev();
	    var isEnoughPair = role.getSeniorNumber(allDev) - role.getJuniorNumber(allDev);
        if(isEnoughPair <= 2){
            var seniorDev = role.getSenior(allDev);
            var juniorDev = role.getJunior(allDev);
            var randomSenior = Switcher.auto(seniorDev).withLast(History.getLastId());
            _.each(randomSenior, Behavior.addSenior);
            _.each(juniorDev, Behavior.addJunior);
        }
    });
});
