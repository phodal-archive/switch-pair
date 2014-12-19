define(["jquery", "underscore", "role"], function($, _, Role) {
    $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
    function appendData(data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    }

    $.getJSON("data.json", function (data) {
        var allDev = Role.getDev(data);
        console.log(allDev);
        _.each(data, appendData);
    });
});
