// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", "underscore"], function($, _) {
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
    console.log(data);
    _.each(data, appendData);
  });
});
