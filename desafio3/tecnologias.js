import { criarBotao } from "./button.js";
export function tecnologias() {
    const paragrafoTecnologias = document.createElement('p')
    body.appendChild(paragrafoTecnologias)

    paragrafoTecnologias.innerHTML = `Tem mais alguma tecnologia que você gostaria de aprender?`
    paragrafoTecnologias.insertAdjacentHTML('afterend',
        '<select id=select>  <option>sim</option> <option>não</option>  </select>')
        
        criarBotao()
    const button = document.getElementById('fourButton')    
    const select = document.getElementById('select')
    
    button.addEventListener('click', () => {
         
    })
}