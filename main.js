var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Startr() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;

if(content == "take my selfie"){
    Speak();
}

    
}

function Speak(){
    var speech = window.speechSynthesis;
    speak_Data = "Taking You A Selfie In Five Seconds";
var utter_This = new SpeechSynthesisUtterance (speak_Data);
speech.speak(utter_This);
Webcam.attach(camera);

setTimeout(function(){
    Take_Snapshot();
    Save();
},5000);

}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
   png_quality : 90
});
var camera = document.getElementById("camera");

function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src= '"+data_uri+"' >";
    });
}

function Save(){
    var link = document.getElementById("Link");
    var image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}