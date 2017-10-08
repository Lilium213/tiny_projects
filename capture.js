'use strict';

var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({
  audio: false,
  video: true
}).then(function(stream){
    window.stream=stream;
    video.srcObject = stream;
}).catch(function(err){
    console.log("An error has occured " + err);
});
