$(document).ready(function () {

    $(".heart").on("click", function () {

        var heart = $(this);
        var likeCount = $("#likeCount" + heart.attr("id").split("like")[1]);
        var intCount = parseInt(likeCount.html());
        var rel = heart.attr("rel");

        heart.css("background-position", "");

        if (rel === "like") {
            likeCount.html(intCount + 1);
            heart.addClass("heartAnimation").attr("rel", "unlike");
        } else {
            likeCount.html(intCount - 1);
            heart.removeClass("heartAnimation").attr("rel", "like");
            heart.css("background-position", "left");
        }
    }).on("mouseleave", function () {
        $(this).css("background-position", "");
    });

});