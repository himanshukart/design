(function () {
  var container = document.getElementById('container');
  var video = document.getElementById('video-background');

  function adapt() {
    var container_width = container.offsetWidth;
    var container_height = container.offsetHeight;
    video.style.height = "auto";
    video.style.width = container_width + "px";
    if(video.offsetHeight < container_height) {
      video.style.height = container_height + "px";
      video.style.width = "auto";
    }
    video.style.top = (((video.offsetHeight - container_height) / 2) * -1) + "px";
    video.style.left = (((video.offsetWidth - container_width) / 2) * -1) + "px";
  }

  window.addEventListener('load', adapt);
  window.addEventListener('resize', adapt);
}());
