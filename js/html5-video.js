// A $( document ).ready() block.
$(document).ready(function () {

    var video = document.getElementById('video');

    document.querySelector('video').addEventListener('click', function () {
        if (video.paused) {

            $(".content").addClass("content-video");
            $(".call-to-action").css('display', 'block');
        }
        else {

            $(".content").removeClass("content-video");
            $(".call-to-action").css('display', 'none');
        }

    }, false);

    document.querySelector('video').addEventListener('ended', function () {
        //alert('Video has ended!');

        $(".content").addClass("content-video");
        $(".call-to-action").css('display', 'block');

    }, false);

    $("video").click(function () {
        //alert('test');
        $(".content").removeClass("content-video");
    });


    $("button").click(function () {
        //alert('test');
        $(".content").addClass("content-video");
        $(".call-to-action").css('display', 'block');
    });



});

