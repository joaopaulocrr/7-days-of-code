import { tecnologias } from "./tecnologias.js";
export function escolhaBackend() {

    
        const opcoesBackend = document.createElement('div')
        body.appendChild(opcoesBackend)
       
        const paragrafoJava = document.createElement('p')
        opcoesBackend.appendChild(paragrafoJava)
        paragrafoJava.innerHTML = '<label for="java">Java:</label>'
        paragrafoJava.innerHTML += '<input type="radio" name="javaOuc#" id="java" value="java" >'

        const paragrafoC = document.createElement('p')
        opcoesBackend.appendChild(paragrafoC)
        paragrafoC.innerHTML += '<label for="c#">C#:</label>'
        paragrafoC.innerHTML += '<input type="radio" name="javaOuc#" id="c#" value="c#" >'

        const java = document.getElementById('java')
        const csharp = document.getElementById('c#')
        const thirdButton = document.createElement('button')
        body.appendChild(thirdButton)
        thirdButton.setAttribute('id', 'thirdButton')
        thirdButton.innerText = 'Send'

        const paragrafoResposta = document.createElement('p')
        body.appendChild(paragrafoResposta)

        thirdButton.addEventListener('click', () => {
            if (java.checked) {
                paragrafoResposta.innerHTML += `<p>Ótimo. A linguagem ${java.value.toUpperCase()} é muito boa, principalmente para o backend.</p>`
            } else if (csharp.checked) {
                paragrafoResposta.innerHTML += `<p>Ótimo. A linguagem ${csharp.value.toUpperCase()} é muito boa, principalmente para o backend.</p>`
            }else {
                paragrafoResposta.innerHTML += '<p>Selecione uma das opções.</p>'
            }
            tecnologias()
        })
     
        

}
