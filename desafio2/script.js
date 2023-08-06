let nome = document.getElementById('iname')
let age = document.querySelector('#iage')
let language = document.querySelector('#ilanguage')
const body = document.querySelector('body')
const button = document.querySelector('#botao')

button.addEventListener("click", () => {
    const newParagrafo = document.createElement('p')
    body.appendChild(newParagrafo)
    newParagrafo.innerHTML = `Olá ${nome.value}, você tem ${age.value} anos e já está aprendendo ${language.value}!`

    proximaPergunta()
})

function proximaPergunta() {
    const paragrafo2 = document.createElement('p')
    body.appendChild(paragrafo2)
    paragrafo2.innerHTML = `Você gosta de estudar ${language.value}? Responda com [1] para Sim e [2] para Não`
    const novoInput = document.createElement('input')
    body.appendChild(novoInput)
    novoInput.setAttribute('type', 'number')
    novoInput.setAttribute('id', 'simOuNao')


    createBotao()
    const paragrafo3 = document.createElement('p')
        body.appendChild(paragrafo3)

    document.getElementById('enviar').addEventListener('click', () => {
        paragrafo3.innerHTML =""
        

        if (novoInput.value == '1') {
            paragrafo3.innerHTML += " <p>Muito bom! Continue estudando e você terá muito sucesso.</p>"
        } else if (novoInput.value == '2') {
            paragrafo3.innerHTML += "<p>Ahh que pena... Tente aprender novas linguagens. Você vai se surpreender.</p>"
        } else {
            paragrafo3.innerHTML += "<p>Opção inválida Digite 1 ou 2 no campo..</p>"

        }
    })

}

const novoInput = document.getElementById('simOuNao')
const respostaFinal = document.createElement('p')
body.appendChild(respostaFinal)


function createBotao() {
    const botaoFinal = document.createElement('button')
    body.appendChild(botaoFinal)
    botaoFinal.setAttribute('type', "submit")
    botaoFinal.setAttribute('id', "enviar")
    botaoFinal.innerHTML = 'Send'
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    document.location.reload();
})