let nome = document.getElementById('iname')
let age = document.querySelector('#iage')
let language = document.querySelector('#ilanguage')
const body = document.querySelector('body')
const button = document.querySelector('#botao')

button.addEventListener("click", () => {
    const newParagrafo = document.createElement('p')
    body.appendChild(newParagrafo)
    newParagrafo.innerHTML = `Olá ${nome.value}, você tem ${age.value} anos e já está aprendendo ${language.value}!`
    // nome.value = ''
    // age.value = ''
    // language.value = ''
    setTimeout(() => {
        proximaPergunta()
        
    }, 2000);
})

function proximaPergunta() {
    const paragrafo2 = document.createElement('p')
    body.appendChild(paragrafo2)
    paragrafo2.innerHTML = `Você gosta de estudar ${language.value}? Responda com [1] para Sim e [2] para Não`
    const novoInput = document.createElement('input')
    body.appendChild(novoInput)
    novoInput.setAttribute('type', 'number')
    
    // createNo()
    // createYes()
}


// function createYes() {
//     const novalabel = document.createElement('label')
//     body.appendChild(novalabel)
//     novalabel.setAttribute('for', 'yes')
//     novalabel.textContent ='Sim'

//     const novoInput = document.createElement('input')
//      body.appendChild(novoInput)
//      novoInput.setAttribute('name', 'yesOrNo')
//      novoInput.setAttribute('type', 'radio')
//      novoInput.value = "Sim"

// }


// function createNo() {
//     const novalabel = document.createElement('label')
//     body.appendChild(novalabel)
//     novalabel.setAttribute('for', 'no')
//     novalabel.textContent ='Não'

//     const novoInput = document.createElement('input')
//      body.appendChild(novoInput)
//      novoInput.setAttribute('name', 'yesOrNo')
//      novoInput.setAttribute('type', 'radio')
//      novoInput.value = "Não"
// }

 


const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
})