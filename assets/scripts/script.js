$(document).ready(function () {
    var tickAudio = document.getElementById('tickSound');
    var interval;

    $('#boomButton').on('click', function () {
        interval = setInterval(increaseSpeed, 1000);
        tickAudio.play();
    });

    function increaseSpeed() {
        var currentSpeed = tickAudio.playbackRate;
        tickAudio.playbackRate = currentSpeed + 0.1;
    }

    // Stop the ticking sound when the page is unloaded or button is clicked again
    $(window).on('unload', function () {
        clearInterval(interval);
        tickAudio.pause();
        tickAudio.currentTime = 0;
    });
});

