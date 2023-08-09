import { escolhaBackend } from "./backend.js";
import { escolhaFrontend } from "./frontend.js";

const buttonSend = document.querySelector('#send')

export const body = document.getElementById('body')
const parabens = document.createElement('p')
body.appendChild(parabens)
parabens.innerHTML = ''

const back = document.querySelector('#backend')
const front = document.querySelector('#frontend')


buttonSend.addEventListener('click', () => {

        if (back.checked) {

            parabens.innerHTML = 'Meus parabéns! Você escolheu o  BACKEND!'
            parabens.innerHTML += '<p>Qual tecnologia deseja aprender a seguir?</p>'

            escolhaBackend()
            
           
        } else if (front.checked) {

            parabens.innerHTML = 'Meus parabéns! Você escolheu o FRONTEND!'
            parabens.innerHTML += '<p>Qual tecnologia deseja aprender a seguir?</p>'

            escolhaFrontend()
           

        } else {
            parabens.innerHTML = 'Você não escolheu nenhuma opção. Tente novamente.'
        }
         
})

