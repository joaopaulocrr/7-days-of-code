import { tecnologias } from "./tecnologias.js";
export function escolhaFrontend() {


    const opcoesFrontend = document.createElement('div')
    body.appendChild(opcoesFrontend)

    const paragrafoReact = document.createElement('p')
    opcoesFrontend.appendChild(paragrafoReact)
    paragrafoReact.innerHTML = '<label for="react">React:</label>'
    paragrafoReact.innerHTML += '<input type="radio" name="reactOuVue" id="react" value="react" >'

    const paragrafoVue = document.createElement('p')
    opcoesFrontend.appendChild(paragrafoVue)
    paragrafoVue.innerHTML += '<label for="vue">Vue:</label>'
    paragrafoVue.innerHTML += '<input type="radio" name="reactOuVue#" id="vue" value="vue" >'

    const react = document.getElementById('react')
    const vue = document.getElementById('vue')

    const thirdButton = document.createElement('button')
    body.appendChild(thirdButton)
    thirdButton.setAttribute('id', 'thirdButton')
    thirdButton.innerText = 'Send'

    const paragrafoResposta = document.createElement('p')
    body.appendChild(paragrafoResposta)

    thirdButton.addEventListener('click', () => {
        if (react.checked) {
            paragrafoResposta.innerHTML += (`<p>Ótimo. A tecnologia ${react.value.toUpperCase()} é muito boa!</p>`)
        } else if (vue.checked) {
            paragrafoResposta.innerHTML += (`<p>Ótimo. A tecnologia ${vue.value.toUpperCase()} é muito boa!</p>`)
        } else {
            paragrafoResposta.innerHTML += ('<p>Selecione uma das opções.</p>')
        }
        tecnologias()
    })


}