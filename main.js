SpeechRecognition = window.webkitSpeechRecognition
var content
var recognition = new SpeechRecognition()
function start() {
    recognition.start()
}
recognition.onresult = function(event) {
    console.log(event)
    content = event.results[0][0].transcript.toLowerCase()
    console.log(content)
    if (content == "selfie") {
        speak()
    }
}
function speak() {
    var synth = window.speechSynthesis
    Webcam.attach(camera)
    speakdata = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    setTimeout(function() {
        imageid = "selfie1"
        takeSnapshot()
        speakdata = "Taking your selfie in 10 seconds"
        var utterThis = new SpeechSynthesisUtterance(speakdata)
        synth.speak(utterThis)
    },5000)
    setTimeout(function() {
        imageid = "selfie2"
        takeSnapshot()
        speakdata = "Taking your selfie in 15 seconds"
        var utterThis = new SpeechSynthesisUtterance(speakdata)
        synth.speak(utterThis)
    },10000)
    setTimeout(function() {
        imageid = "selfie3"
        takeSnapshot()
    },15000)
}
camera = document.getElementById("camera")
Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_quality:90
})
function takeSnapshot() {
    console.log(imageid)
    Webcam.snap(function(dataURI){
        if (imageid == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+dataURI+"'>"
        }
        if (imageid == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+dataURI+"'>"
        }
        if (imageid == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+dataURI+"'>"
        }
    })
}