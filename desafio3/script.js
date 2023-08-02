
import { escolhaBackend } from "./backend.js";
import { escolhaFrontend } from "./frontend.js";

const buttonSend = document.querySelector('#send')
const body = document.getElementById('body')
const parabens = document.createElement('p')
body.appendChild(parabens)
parabens.innerHTML = ''

buttonSend.addEventListener('click', () => {
    const back = document.querySelector('#backend')
    const front = document.querySelector('#frontend')


    if (back.checked) {
        parabens.innerHTML = 'Meus parabéns! Você escolheu o  BACKEND!'
        parabens.innerHTML += '<p>Qual tecnologia deseja aprender a seguir?</p>'
        escolhaBackend()

    } else if (front.checked) {
        parabens.innerHTML = 'Meus parabéns! Você escolheu o FRONTEND!'
        escolhaFrontend()
    } else {
        parabens.innerHTML = 'Opção inválida. Tente novamente.'

    }

})
