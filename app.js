$(function() {
    $("td").click(function() {
        $("table").fadeOut(700);
        $(".elements").show();
    });
});
$(function() {
    $(".back").click(function() {
        $(".elements").fadeOut(700);
        $("table").show();
    });
    $(".do").click(function() {
        $(".elements").fadeOut(700);
        $(".confg").show();
    });
});

// This is a single line comment
alert("click on elements name and electonic configuration!");