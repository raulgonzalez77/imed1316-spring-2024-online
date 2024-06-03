// A $( document ).ready() block.
$(document).ready(function () {

    //alert('test');

    //$(document).addClass('content'); //Re-add before

    document.querySelector('video').addEventListener('ended', function () {
        alert('Video has ended!');

        $(".content").addClass("content-video");
        $(".call-to-action").css('display', 'block');

    }, false);

    $("video").click(function () {
        alert('test');
        $(".content").removeClass("content-video");
    });


    $("button").click(function () {
        //alert('test');
        $(".content").addClass("content-video");
        $(".call-to-action").css('display', 'block');
    });

});

