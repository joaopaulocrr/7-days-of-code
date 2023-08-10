import { criarBotao } from "./button.js";
export function tecnologias() {
    const paragrafoTecnologias = document.createElement('p')
    body.appendChild(paragrafoTecnologias)

    paragrafoTecnologias.innerHTML = `Tem mais alguma tecnologia que você gostaria de aprender? Se sim, informe no campo ao lado:`
    paragrafoTecnologias.insertAdjacentHTML('afterend',
        '<select id=select>  <option>sim</option> <option>não</option>  </select>')

    const inputTecnologias = document.createElement('input')
    body.appendChild(inputTecnologias)
    inputTecnologias.setAttribute('id', 'inputTec')

    const inputTec = document.getElementById('inputTec')
    let arrayTec = []

    criarBotao()
    const button = document.getElementById('fourButton')
    const select = document.getElementById('select')

    button.addEventListener('click', () => {

        if (select.value == 'sim') {
            inputTec.focus()
            if (inputTec.value != '') {

                arrayTec.push(inputTec.value)
                inputTec.value = ''
            }

        } else {
            inputTec.remove()
            const paragrafoFinal = document.createElement('p')
            body.appendChild(paragrafoFinal)
            paragrafoFinal.setAttribute('id', 'paragrafoFinal')
            const pFinal = document.getElementById('paragrafoFinal')

            pFinal.innerHTML = 'Aqui estão as tecnologias escolhidas:'
            for (let c = 0; c < arrayTec.length; c++) {
                pFinal.innerHTML += `<p>${arrayTec[c]}</p>`

            }
            pFinal.innerHTML += '<p>Obrigado por participar! Boa Sorte.</p>'

        }

    })
}