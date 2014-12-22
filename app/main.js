define(["jquery", "underscore", "role", "switcher"], function($, _, Role, Switcher) {
    function addSenior(data) {
        var items = [];
        $.each(data, function (key, val) {
            if(key === "name" || key ==="id"){
                items.push(" " + val);
            }
        });

        $("<li/>",
        {
            "class": "li",
            html: items.join("")
        }
        ).appendTo("#senior");

        var img = "<img src=" + data["pic_url"] + "/>";
        $(img).appendTo("#senior");
    }

    function addJunior(data) {
        var items = [];
        $.each(data, function (key, val) {
            if(key === "name" || key ==="id"){
                items.push(" " + val);
            }
        });

        $("<li/>",
            {
                "class": "li",
                html: items.join("")
            }
        ).appendTo("#junior");
    }

    $.getJSON("data.json", function (data) {
        var role = new Role(data);
        var allDev = role.getDev();
        var seniorDev = role.getSenior(allDev);
        var juniorDev = role.getJunior(allDev);
        var randomSenior = Switcher.auto(seniorDev);
        _.each(randomSenior, addSenior);
        _.each(juniorDev, addJunior);
    });
});
