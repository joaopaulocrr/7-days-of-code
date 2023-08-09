export function escolhaFrontend() {
    setTimeout(() => {

        const opcoesFrontend = document.createElement('div')
        body.appendChild(opcoesFrontend)

        const paragrafoReact = document.createElement('p')
        opcoesFrontend.appendChild(paragrafoReact)
        paragrafoReact.innerHTML = '<label for="react">React:</label>'
        paragrafoReact.innerHTML += '<input type="radio" name="reactOuVue" id="react" value="java" >'

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

        thirdButton.addEventListener('click', () => {
            if (react.checked) {
                console.log(`<p>Ótimo. A linguagem ${react.value} é muito boa!</p>`)
            } else if (vue.checked) {
                console.log(`<p>Ótimo. A linguagem ${vue.value} é muito boa!</p>`)
            } else {
                console.log('<p>Selecione uma das opções.</p>')
            }
        })

    }, 1000);
}