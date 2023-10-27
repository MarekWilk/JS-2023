document.addEventListener('keypress', onKeyPress)
const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    "f": document.querySelector('#s4')
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)
}
function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}
function record(){
    const czas = new Date.now
    console.log(czas-Date.now)
}

function play(){
    
}