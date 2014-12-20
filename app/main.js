define(["jquery", "underscore", "role", "switcher"], function($, _, Role, Switcher) {
    $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
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
        var allDev = Role.getDev(data);
        var switcher = Switcher.auto(allDev);
        _.each(switcher, appendData);
    });
});
