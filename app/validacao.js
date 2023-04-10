function verificaChuteValor(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
        
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Fim de jogo</h2>
                <button id="jogar-novamente" class="botao-jogar" >Reiniciar <i class="fa-solid fa-rotate-right"></i></button>
                `
                document.body.style.background = "black"
        } else {
            elementChute.innerHTML += '<div>valor inválido: Isso não é um número</div>'
            return
        }

    }

    if (numero > maiorValor || numero < menorValor) {
        elementChute.innerHTML += '<div>Valor inválido: O número está fora dos limites determinados</div>'
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="botao-jogar">Jogar novamente <i class="fa-solid fa-rotate-right"></i></button>
        `
    } else if (numero > numeroSecreto) {
        elementChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
