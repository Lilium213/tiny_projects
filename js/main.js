(function(){
  var width=320;
  var height=0;

  var streaming=false;
  var video = null;
  var canvas = null;

  function startup(){
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');

    navigator.mediaDevices.getUserMedia({video: true, audio:false}).then(function(stream){
      video.srcObject=stream;
      video.play();
    }).catch(function(err){
      console.log("An error has ocurred "+err);
    });

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);
  }



})
