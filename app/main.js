define(["jquery", "underscore", "role", "switcher"], function($, _, Role, Switcher) {
    function appendData(data) {
        var items = [];
        $.each(data, function (key, val) {
            if(key === "name" || key ==="id"){
                items.push(" " + val);
            }
        });

        $("<ul/>",
        {
            "class": "my-new-list",
            html: items.join("")
        }
        ).appendTo("body");
    }

    $.getJSON("data.json", function (data) {
        var role = new Role(data);
        var allDev = role.getDev();
        var seniorDev = role.getSenior(allDev);
        var juniorDev = role.getJunior(allDev);
        var switcher = Switcher.auto(seniorDev);
        _.each(switcher, appendData);
    });
});
