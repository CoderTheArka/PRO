var SpeechR = window.webkitSpeechRecognition;

var recognition = new SpeechR();

function start(){
    document.getElementById('textbox').innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
   var abc =  Content.toUpperCase()
    alert(abc);
    if (abc == 'TAKE MY SELFIE'){
        document.getElementById("textbox").innerHTML = abc;
        speak();
    }else{
        alert('We cant recognise what you had just said.')
    }

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    camera = document.getElementById("camera");
    Webcam.attach(camera);

}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
 });

