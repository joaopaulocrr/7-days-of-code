

export function escolhaFrontend() {
    
    const opcoesFrontend = document.createElement('div')
    body.appendChild(opcoesFrontend)
    opcoesFrontend.classList.add('limpar')
    const paragrafoReact = document.createElement('p')
    opcoesFrontend.appendChild(paragrafoReact)
    const paragrafoVue = document.createElement('p')
    opcoesFrontend.appendChild(paragrafoVue)
    setTimeout(() => {

        paragrafoReact.innerHTML = '<label for="react">React:</label>'
        paragrafoReact.innerHTML += '<input type="radio" name="reactOuVue" id="react" value="java" >'


        paragrafoVue.innerHTML += '<label for="vue">Vue:</label>'
        paragrafoVue.innerHTML += '<input type="radio" name="reactOuVue#" id="vue" value="vue" >'
    }, 1000);
    
    
}
