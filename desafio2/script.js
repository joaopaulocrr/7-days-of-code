let nome = document.getElementById('iname')
let age = document.querySelector('#iage')
let language = document.querySelector('#ilanguage')
const body = document.querySelector('body')
const button = document.querySelector('#botao')

button.addEventListener("click", () => {
    const newParagrafo = document.createElement('p')
    body.appendChild(newParagrafo)
    newParagrafo.innerHTML += `Olá ${nome.value}, você tem ${age.value} anos e já está aprendendo ${language.value}!`
    // nome.value = ''
    // age.value = ''
    // language.value = ''
    proximaPergunta()
})


function proximaPergunta() {
    const paragrafo2 = document.createElement('p')
    body.appendChild(paragrafo2)
    paragrafo2.innerHTML = `Você gosta de estudar ${language.value}?`
   
}