var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function takeSelfie(){
    document.getElementById("ta").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("ta").innerHTML = content;
 if(content == "take my selfie") {
    console.log("Taking Selfie");
    speak();

 }
}

function speak() {
  var synth = window.speechSynthesis;
  var speakdata = "Taking a selfie in 5 seconds. ";
  var utter = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utter);
  Webcam.attach(camera);
  setTimeout(function(){
    takeSnapshot();
    save();
  } ,5000 );
 }

 camera = document.getElementById("camera");
 Webcam.set({
   width : 360 , 
   height : 250 , 
   image_format : "png" ,
   png_qaulity : 90
 });