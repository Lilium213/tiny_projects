(function(){
  var width=320;
  var height=0;

  var streaming=false;
  var video = null;
  var canvas = null;

  function startup(){
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
     if (!streaming) {
       height = video.videoHeight / (video.videoWidth/width);

       // Firefox currently has a bug where the height can't be read from
       // the video, so we will make assumptions if this happens.

       if (isNaN(height)) {
         height = width / (4/3);
       }

       video.setAttribute('width', width);
       video.setAttribute('height', height);
       canvas.setAttribute('width', width);
       canvas.setAttribute('height', height);
       streaming = true;
     }
   }, false);
  }
  window.addEventListener('load', startup, false);


})
