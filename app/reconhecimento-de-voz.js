const elementChute = document.getElementById('chute')
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    console.log(e)
    verificaChuteValor(chute)
}

function exibeChuteNaTela(chute) {
    elementChute.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
