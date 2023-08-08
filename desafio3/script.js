
import { escolhaBackend } from "./backend.js";
import { escolhaFrontend } from "./frontend.js";
import { criarBotao } from "./button.js";

const buttonSend = document.querySelector('#send')

export const body = document.getElementById('body')
const parabens = document.createElement('p')
body.appendChild(parabens)
parabens.innerHTML = ''

const back = document.querySelector('#backend')
const front = document.querySelector('#frontend')

 const limpar = document.querySelector('.limpar')



buttonSend.addEventListener('click', () => {

    

    if (back.checked) {
        limpar.innerHTML =""
        parabens.innerHTML = 'Meus parabéns! Você escolheu o  BACKEND!'
        setTimeout(() => {
            parabens.innerHTML += '<p>Qual tecnologia deseja aprender a seguir?</p>'
        }, 1000);

        escolhaBackend()
        criarBotao()
        
        

    } else if (front.checked) {
        limpar.innerHTML = ""
        parabens.innerHTML = 'Meus parabéns! Você escolheu o FRONTEND!'
        setTimeout(() => {
            parabens.innerHTML += '<p>Qual tecnologia deseja aprender a seguir?</p>'
        }, 1000);
        escolhaFrontend()
        criarBotao()
        
        

    } else {
        parabens.innerHTML = 'Você não escolheu nenhuma opção. Tente novamente.'

    }

})




