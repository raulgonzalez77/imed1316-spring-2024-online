// A $( document ).ready() block.
$(document).ready(function () {

    var video = document.getElementById('video');

    /* 
     document.querySelector('video').addEventListener('click', function () {
         if (video.paused) {
 
             $(".content").removeClass("content-video");
             $(".call-to-action").css('display', 'none');
 
         }
         else {
 
             $(".content").addClass("content-video");
             $(".call-to-action").css('display', 'block');
         }
 
     }, false);
 */

    /* */
    video.addEventListener("playing", (event) => {

        $(".content").removeClass("content-video");
        $(".call-to-action").css('display', 'none');

    }, false);




    video.addEventListener("play", (event) => {

        $(".content").removeClass("content-video");
        $(".call-to-action").css('display', 'none');

    });


    video.addEventListener("pause", (event) => {

        /*
        function delayContent() {
            $(".content").addClass("content-video");
            $(".call-to-action").css('display', 'block');
        }
        setTimeout(delayContent, 5000);
        */

        var videoTimeout = setTimeout(delayContent, 4000);

        function delayContent() {

            if (video.paused) {

                $(".content").addClass("content-video");
                $(".call-to-action").css('display', 'block');
            }
            else {

                clearTimeout(videoTimeout);
            }


        }


    });



    document.querySelector('video').addEventListener('ended', function () {
        //alert('Video has ended!');

        $(".content").addClass("content-video");
        $(".call-to-action").css('display', 'block');

    }, false);



    /* Get the element you want displayed in fullscreen */
    var elem = document.getElementById("callToAction");

    /* Function to open fullscreen mode */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }




});

