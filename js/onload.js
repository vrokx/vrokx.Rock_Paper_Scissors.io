$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
})
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    screen.orientation.lock("portrait");
}