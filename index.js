const btn = document.getElementById("btn")

btn.addEventListener("click", playAudio)

function playAudio() {
    const audio = document.querySelector('audio');
    audio.play()
    console.log(`teste`)
}