$(document).ready(function () {
  videoListener.bind();
});

var video = $("video");

var videoListener = {
  bind: function () {
    // video.on("play", function () {
    //   setTimeout(function () {
    //     video.prop("currentTime", "0").trigger('pause');
    //     $('#payModal').modal({
    //       // keyboard: false,
    //       // backdrop: 'static',
    //       show: true
    //     })
    //   }, 2000)
    // })
  }
}