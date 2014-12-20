define(["jquery", "underscore", "role", "switcher"], function($, _, Role, Switcher) {
    function appendData(data) {
        var items = [];
        $.each(data, function (key, val) {
            if(key === "name"){
                items.push(val);
            }
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    }

    $.getJSON("data.json", function (data) {
        var role = new Role(data);
        var allDev = role.getDev();
        var seniorNum = role.getSeniorNumber();
        var juniorNum = role.getJuniorNumber();
        var switcher = Switcher.auto(allDev);
        _.each(switcher, appendData);
    });
});
